//updates only the table with the new data
function reload_table(keep_pos = false) {

    height = $("body").height();
    if (keep_pos) {
        curr_scroll_pos = $(document).scrollTop();
    } else {
        curr_scroll_pos = $("#table").offset().top - 200;
    }
    $("#table").hide();
    $("ul.pagination").parent().hide();
    $("body").css("height", height);
    $(document).scrollTop(0);
    searchParams = new URLSearchParams(window.location.search);

    $.ajax({
        url: location.protocol + '//' + location.host + location.pathname + '/data?' + searchParams.toString(),
        success: function (table) {
            load_pagination()
            $("#data").html(table);
            $("#table").show();
            $("#table").addClass("animate__slideInLeft");


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

            $('html, body').animate({
                // scrollTop: $("#table").offset().top - 100
                scrollTop: curr_scroll_pos
            }, 300);

            $("body").css("height", "auto");


            $("#table th.table_header[data-field-name]").removeClass("active");
            $("#table th.table_header[data-field-name='" + searchParams.get("s_name") + "']").addClass("active");
            load_pagination();
        }


    });
}


function add_new_row() {
    alert("Works");
}


$(document).ready(function () {
    load_params();
    reload_table(true);
});
