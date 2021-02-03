//checks if a table is a system table
function is_system_table(field_name) {
    if ($("#table th[data-field-name='" + field_name + "']").attr("data-from-system-table") == "true") {
        return true;
    } else {
        return false;
    }
}


//Syncs the parameters with the filters
function load_params() {
    searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('dc')) {
        if (searchParams.get("dc") != "25" && searchParams.get("dc") != "50" && searchParams.get("dc") != "100" && searchParams.get("dc") != "200") {
            $("div [data-filter-display-count] > select > option[value='50']").attr("selected", "");
            searchParams.set("dc", "50");
        } else {
            $("div [data-filter-display-count] > select > option[value='" + searchParams.get("dc") + "']").attr("selected", "");
        }
    } else {
        searchParams.set("dc", "50");
        $("div [data-filter-display-count] > select > option[value='50']").attr("selected", "");
    }

    hidden_fields = [];
    if (searchParams.has('hid_fields')) {
        hidden_fields = searchParams.get("hid_fields").split(',');

        $("#table th").attr("data-hidden-field", "false");

        hidden_fields.forEach(function (field_name) {
            $("#table th[data-field-name='" + field_name + "']").attr("data-hidden-field", "true");
        });

        $("#table th[data-hidden-field='true']").each(function () {
            $(this).hide();
            $('#table td[data-field-name="' + $(this).attr("data-field-name") + '"]').hide();
        });

    } else {
        $("#table th[data-hidden-field='true']").each(function () {
            hidden_fields.push($(this).attr("data-field-name"));
            searchParams.set('hid_fields', hidden_fields.join());
        });
    }


    $("#table th[data-hidden-field='true']").each(function () {
        $(this).hide();
        $('#table td[data-field-name="' + $(this).attr("data-field-name") + '"]').hide();
    });

    hidden_fields.forEach(function (field_name) {
        $("div [data-filter-hidden-fields] > select > option[value='" + field_name + "']").attr("selected", "");
    });


    if (searchParams.has('s_name')) {
        if ($("div [data-sort-field-name] > select > option[value='" + searchParams.get("s_name") + "']").length != 0) {
            $("div [data-sort-field-name] > select > option[value='" + searchParams.get("s_name") + "']").attr("selected", "");
        } else {
            searchParams.set("s_name", $("div [data-sort-field-name] > select > option:eq(0)").attr("value"));
        }
    } else {
        searchParams.set("s_name", $("div [data-sort-field-name] > select > option:eq(0)").attr("value"));
    }

    if (searchParams.has('s_asc')) {
        if (searchParams.get('s_asc') == "false") {
            $("div [data-sort-order] > select > option[value='false']").attr("selected", "");
        } else if (searchParams.get('s_asc') == "true") {
            $("div [data-sort-order] > select > option[value='true']").attr("selected", "");
        } else {
            searchParams.set("s_asc", "true");
        }
    } else {
        searchParams.set("s_asc", "true");
    }

    if (searchParams.has("f_or") && searchParams.has("f_names") && searchParams.has("f_op") && searchParams.has("f_values")) {

        f_types = searchParams.get("f_or").split(',');
        f_names = searchParams.get("f_names").split(',');
        f_operations = searchParams.get("f_op").split(',');
        f_values = searchParams.get("f_values").split(',');

        length = f_types.length;
        if (f_types.length != f_names.length || f_types.length != f_operations.length || f_types.length != f_values.length) {
            console.error("Incorrect filters");
        }
        else {
            $("#table-filters").html("");
            for (i = 0; i < length; i++) {
                
                add_new_filter();
                filter = $("#table-filters > div:eq(" + i + ")");
                filter.find("select").formSelect();
                filter.find(".datepicker").datepicker({
                    format: 'yyyy-mm-dd'
                });

                change_filter_type(filter, f_names[i]);

                filter.find("div[data-filter-el='or'] select option[value='" + f_types[i] + "']").attr("selected", "");
                filter.find("div[data-filter-el='name'] select option[value='" + f_names[i] + "']").attr("selected", "");
                filter.find("div[data-filter-el='operation'] select option[value='" + f_operations[i] + "']").attr("selected", "");


                if (is_system_table(f_names[i])) {
                    filter.find("div[data-filter-el='value'][current='true'] select option[value='" + f_values[i] + "']").attr("selected", "");
                    filter.find("div[data-filter-el='value'][current='true'] select").formSelect();
                } else {


                    value_input = filter.find("div[data-filter-el='value'][current='true'] input");
                    if (value_input.attr("type") == "checkbox") {
                        if (f_values[i] == "true") {
                            value_input.prop("checked", true);
                        }
                    } else {
                        value_input.val(f_values[i]);
                    }
                }





            }
        }

    }


    if (searchParams.has('index')) {
        if (!isNaN(searchParams.get("index"))) {
            max_page = parseInt($("#table").attr("data-max-page"), 10);

            if (parseInt(searchParams.get("index"), 10) > max_page) {
                searchParams.set("index", max_page);
                window.history.replaceState(history.state, document.title, location.protocol + '//' + location.host + location.pathname + '?' + searchParams);
                reload_table();
            } else if (parseInt(searchParams.get("index"), 10) <= 0) {
                searchParams.set("index", "1");
                window.history.replaceState(history.state, document.title, location.protocol + '//' + location.host + location.pathname + '?' + searchParams);
                reload_table();
            }

        } else {
            searchParams.set("index", "1");
        }
    } else {
        searchParams.set("index", "1");
    }

    window.history.replaceState(history.state, document.title, location.protocol + '//' + location.host + location.pathname + '?' + searchParams);
    load_pagination()
}

