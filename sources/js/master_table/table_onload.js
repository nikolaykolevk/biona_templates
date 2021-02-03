//Event listeners for the table page
$(document).ready(function () {
    
    $(document).on('click', "#new-filter-btn", function () {
        console.log("adding");
        add_new_filter();
        $('#table-filters select').formSelect();
        $('#table-filters .datepicker').datepicker({
            format: 'yyyy-mm-dd',
        });
        instance = M.Datepicker.getInstance($('#table-filters .datepicker'));
        instance.setDate(new Date);
        instance.doneBtn.click();

    });

    $(document).on('click', "div[data-filter-el='remove'] > a", function () {
        $(this).parent().parent().addClass("animate__fadeOut").delay(500).queue(function (next) {
            $(this).remove();
            $("#table-filters > div:nth-child(1) > div[data-filter-el='name']").addClass("s5");
            $("#table-filters > div:nth-child(1) > div[data-filter-el='name']").removeClass("s3");
            $("#table-filters > div:nth-child(1) > div[data-filter-el='or']").remove();
            next();
        });
    });

    $(document).on('click', "a[data-apply-filters]", function () {
        apply_filters();
    });

    $(document).on('click', "a[data-clear-filters]", function () {
        $("#table-filters").html("");
        apply_filters();
    });

    $(document).on('change', "div[data-filter-el='name'] select", function () {
        $(this).formSelect();
        change_filter_type($(this).parent().parent().parent(), $(this).formSelect("getSelectedValues")[0]);
    });


    var enter_pressed = false;
    $(document).on('keypress', function (e) {
        if (e.which == 13 && !enter_pressed) {
            if ($("#data-filters li:eq(0)").hasClass("active")) {
                enter_pressed = true;
                apply_filters();
            }
        }
    });

    $(document).on('click', "#data-filters > div > ul", function () {
        if ($("#data-filters li:eq(0)").hasClass("active")) {
            enter_pressed = false;
        }
    });

    $(document).on('click', "#table tbody tr", function () {
        load_update_component($(this).attr("data-row-id"), $("#table").attr("data-table"));
    });
    
    $(document).on('click', "#add_new_item_btn", function () {
        add_new_row();
    });

    load_table_components();

    $(document).on('click', 'ul.pagination li.waves-effect a[data-move-pagination]', function () {
        move_pag($(this).attr("data-move-pagination") == "true");
    });
});

function load_table_components() {
    
    load_params();
    $("#data-filters select").formSelect()
    $('#data-filters .datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });
    $('.collapsible').collapsible();
    $('#add_new_item_btn').floatingActionButton();
}
