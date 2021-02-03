//adds new filter based on its type and the values it can take
function add_new_filter() {
    new_filter = $("<div></div>").addClass("col s12 row valign-wrapper animate__animated animate__faster");

    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(0)").addClass("input-field col s2");
    $(new_filter).find("div:eq(0)").attr("data-filter-el", "or");
    $(new_filter).find("div:eq(0)").append($("<select></select>"));
    el = $("<option></option>");
    el.attr("value", "false");
    el.text("And");
    $(new_filter).find("div:eq(0) select").append($(el));
    el = $("<option></option>");
    el.attr("value", "true");
    el.text("Or");
    $(new_filter).find("div:eq(0) select").append($(el));


    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(1)").addClass("input-field col s3");
    $(new_filter).find("div:eq(1)").attr("data-filter-el", "name");
    $(new_filter).find("div:eq(1)").append($("<select></select>"));

    $("#table th[data-filterable='true']").each(function () {
        el = $("<option></option>");
        el.attr("value", $(this).attr("data-field-name"));
        el.text($(this).attr("data-display-name"));
        $(new_filter).find("div:eq(1) select").append($(el));
    })

    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(2)").addClass("input-field col s3");
    $(new_filter).find("div:eq(2)").attr("data-filter-el", "operation");
    $(new_filter).find("div:eq(2)").append($("<select></select>"));
    el = $("<option></option>");
    el.attr("value", "eq");
    el.text("IS");
    $(new_filter).find("div:eq(2) select").append($(el));
    el = $("<option></option>");
    el.attr("value", "ne");
    el.text("IS NOT");
    $(new_filter).find("div:eq(2) select").append($(el));
    el = $("<option></option>");
    el.attr("value", "gt");
    el.text("GREATHER THAN");
    $(new_filter).find("div:eq(2) select").append($(el));
    el = $("<option></option>");
    el.attr("value", "lt");
    el.text("LESS THAN");
    $(new_filter).find("div:eq(2) select").append($(el));
    el = $("<option></option>");
    el.attr("value", "like");
    el.text("CONTAINS");
    $(new_filter).find("div:eq(2) select").append($(el));
    el = $("<option></option>");
    el.attr("value", "not_like");
    el.text("DOES NOT CONTAIN");
    $(new_filter).find("div:eq(2) select").append($(el));



    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(3)").addClass("input-field col s2");
    $(new_filter).find("div:eq(3)").attr("data-filter-el", "value");
    $(new_filter).find("div:eq(3)").attr("current", "true");
    $(new_filter).find("div:eq(3)").attr("data-for-type", "string");
    $(new_filter).find("div:eq(3)").append($("<input>"));
    $(new_filter).find("div:eq(3) input").attr("placeholder", "value");
    $(new_filter).find("div:eq(3) input").attr("type", "text");
    $(new_filter).find("div:eq(3) input").addClass("validate");


    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(4)").addClass("input-field col s2");
    $(new_filter).find("div:eq(4)").hide();
    $(new_filter).find("div:eq(4)").attr("data-filter-el", "value");
    $(new_filter).find("div:eq(4)").attr("current", "false");
    $(new_filter).find("div:eq(4)").attr("data-for-type", "number");
    $(new_filter).find("div:eq(4)").append($("<input>"));
    $(new_filter).find("div:eq(4) input").attr("placeholder", "value");
    $(new_filter).find("div:eq(4) input").attr("type", "number");
    $(new_filter).find("div:eq(4) input").addClass("validate");


    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(5)").addClass("col s2");
    $(new_filter).find("div:eq(5)").hide();
    $(new_filter).find("div:eq(5)").attr("data-filter-el", "value");
    $(new_filter).find("div:eq(5)").attr("current", "false");
    $(new_filter).find("div:eq(5)").attr("data-for-type", "boolean");
    $(new_filter).find("div:eq(5)").append($("<label>"));
    $(new_filter).find("div:eq(5) label").append("<input type='checkbox' />");
    $(new_filter).find("div:eq(5) label").append("<span> Yes/No </span>")


    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(6)").addClass("input-field col s3");
    $(new_filter).find("div:eq(6)").hide();
    $(new_filter).find("div:eq(6)").attr("data-filter-el", "value");
    $(new_filter).find("div:eq(6)").attr("current", "false");
    $(new_filter).find("div:eq(6)").attr("data-for-type", "system-table");
    $(new_filter).find("div:eq(6)").append($("<select></select>"));

    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(7)").addClass("input-field col s3");
    $(new_filter).find("div:eq(7)").hide();
    $(new_filter).find("div:eq(7)").attr("data-filter-el", "value");
    $(new_filter).find("div:eq(7)").attr("current", "false");
    $(new_filter).find("div:eq(7)").attr("data-for-type", "date");
    $(new_filter).find("div:eq(7)").append("<input type='text' placeholder='Pick a date' class='datepicker'>")


    $(new_filter).append($("<div></div>"));
    $(new_filter).find("div:eq(8)").addClass("col s1");
    $(new_filter).find("div:eq(8)").attr("data-filter-el", "remove");
    $(new_filter).find("div:eq(8)").append($("<a></a>"));
    $(new_filter).find("div:eq(8) a").addClass("waves-effect waves-light btn red darken-2 hoverable");
    el = $("<i></i>");
    el.addClass("material-icons");
    el.text("remove");
    $(new_filter).find("div:eq(8) a").append($(el));



    $("#table-filters").append(new_filter);
    $("#table-filters > div:nth-child(1) > div[data-filter-el='name']").addClass("s5");
    $("#table-filters > div:nth-child(1) > div[data-filter-el='name']").removeClass("s3");
    $("#table-filters > div:nth-child(1) > div[data-filter-el='or']").remove();

    $('select').formSelect();
    $('#table-filters .datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });
    change_filter_type($(new_filter), $(new_filter).find("div[data-filter-el='name'] select").formSelect("getSelectedValues")[0]);

    $(new_filter).addClass("animate__fadeIn").delay(500).queue(function (next) {
        $(this).removeClass("animate__fadeIn")
        next();
    });


}

//applies the filters and updates the page with the new data
function apply_filters() {
    searchParams = new URLSearchParams(window.location.search);

    $("div[data-filter-display-count] select").formSelect();
    searchParams.set('dc', $("div[data-filter-display-count] select").formSelect("getSelectedValues")[0]);

    hidden_fields = [];
    $("div[data-filter-hidden-fields] select").formSelect();
    hidden_fields = $("div[data-filter-hidden-fields] select").formSelect("getSelectedValues");
    searchParams.set('hid_fields', hidden_fields.join());

    $("div[data-sort-field-name] select").formSelect();
    searchParams.set('s_name', $("div[data-sort-field-name] select").formSelect("getSelectedValues")[0]);

    $("div[data-sort-order] select").formSelect();
    searchParams.set('s_asc', $("div[data-sort-order] select").formSelect("getSelectedValues")[0]);

    f_types = [];
    f_names = [];
    f_operations = [];
    f_values = [];

    if ($("#table-filters div").length > 0) {

        f_types.push("false");
        $("#table-filters div[data-filter-el='or'] select").each(function () {
            $(this).formSelect();
            f_types.push($(this).formSelect("getSelectedValues")[0]);
        });
        searchParams.set('f_or', f_types.join());


        $("#table-filters div[data-filter-el='name'] select").each(function () {
            $(this).formSelect();
            f_names.push($(this).formSelect("getSelectedValues")[0]);
        });
        searchParams.set('f_names', f_names.join());


        $("#table-filters div[data-filter-el='operation'] select").each(function () {
            $(this).formSelect();
            f_operations.push($(this).formSelect("getSelectedValues")[0]);
        });
        searchParams.set('f_op', f_operations.join());

        $("div[data-filter-el='value'][current='true']").each(function () {
            if ($(this).attr("data-for-type") == "boolean") {
                if ($("div[data-filter-el='value'][current=true] input:checked").length == 0) {
                    f_values.push("false");
                } else {
                    f_values.push("true");
                }
            } else if ($(this).attr("data-for-type") == "date") {
                f_values.push($(this).find("input.datepicker").val());
            } else {
                f_values.push($(this).find("input").val());
            }
        });

        searchParams.set('f_values', f_values.join());



    } else {
        searchParams.delete('f_or');
        searchParams.delete('f_names');
        searchParams.delete('f_values');
        searchParams.delete('f_op');
    }

    searchParams.set("index", "1");

    window.history.replaceState(history.state, document.title, location.protocol + '//' + location.host + location.pathname + '?' + searchParams);

    reload_table();
}

//when a new filter is selected this function is used to assign values it can take in select boxes
function change_filter_type(filter, f_name) {

    type = $("#table th[data-field-name='" + f_name + "']").attr("data-type");
    operation = filter.find("div[data-filter-el='operation'] select")
    operation.parent().parent().show();
    operation.html("");

    value_input = filter.find("div[data-filter-el='value'][current='true'] input");
    if (value_input.attr("type") == "checkbox") {
        value_input.prop("checked", false);
    } else {
        value_input.val("");
    }

    ;
    filter.find("div[data-filter-el='value']").hide()
    filter.find("div[data-filter-el='value']").attr("current", "false");


    if (is_system_table(f_name)) {
        table_name = $("#table th[data-field-name='" + f_name + "']").attr("data-field-schema").split(" :: ")[2];
        field_name = $("#table th[data-field-name='" + f_name + "']").attr("data-field-schema").split(" :: ")[3];
        operation.append($("<option value='eq' selected>IS</option>"));
        operation.append($("<option value='ne'>IS NOT</option>"));

        filter.find("div[data-filter-el='value'][data-for-type='system-table']").show();
        filter.find("div[data-filter-el='value'][data-for-type='system-table']").attr("current", "true");
        filter.find("div[data-filter-el='value'][data-for-type='system-table'] select").html("");

        $.ajax({
            url: "http://localhost:8000/select/" + table_name + "?index=1",
            async: false,
            success: function (table) {
                table = JSON.parse(table)
                table.forEach(function (row) {
                    el = $("<option></option>");
                    el.attr("value", row[field_name]);
                    el.text(row[field_name]);
                    filter.find("div[data-filter-el='value'][data-for-type='system-table'] select").append(el);
                });

                filter.find("div[data-filter-el='value'][data-for-type='system-table'] select").formSelect();
            }
        });


    } else {
        switch (type) {
            case "string":
                operation.append($("<option value='eq' selected>IS</option>"));
                operation.append($("<option value='ne'>IS NOT</option>"));
                operation.append($("<option value='like'>CONTAINS</option>"));
                operation.append($("<option value='not_like'>DOES NOT CONTAIN</option>"));
                filter.find("div[data-filter-el='value'][data-for-type='string']").show();
                filter.find("div[data-filter-el='value'][data-for-type='string']").attr("current", "true");
                break;
            case "number":
                operation.append($("<option value='eq' selected>IS</option>"));
                operation.append($("<option value='ne'>IS NOT</option>"));
                operation.append($("<option value='gt'>GREATHER THAN</option>"));
                operation.append($("<option value='lt'>LESS THAN</option>"));
                filter.find("div[data-filter-el='value'][data-for-type='number']").show();
                filter.find("div[data-filter-el='value'][data-for-type='number']").attr("current", "true");
                break;
            case "boolean":
                operation.append($("<option value='eq' selected>IS</option>"));
                filter.find("div[data-filter-el='operation'").hide();
                filter.find("div[data-filter-el='value'][data-for-type='boolean']").show();
                filter.find("div[data-filter-el='value'][data-for-type='boolean']").attr("current", "true");
                break;
            case "date":
                operation.append($("<option value='eq' selected>IS</option>"));
                operation.append($("<option value='ne'>IS NOT</option>"));
                operation.append($("<option value='gt'>AFTER</option>"));
                operation.append($("<option value='lt'>BEFORE</option>"));
                filter.find("div[data-filter-el='value'][data-for-type='date']").show();
                filter.find("div[data-filter-el='value'][data-for-type='date']").attr("current", "true");
                break;
        }
    }

    operation.formSelect();
}