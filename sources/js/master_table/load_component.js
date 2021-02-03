function load_table_component(table_name) {

    url = location.protocol + '//' + location.host + "/table/" + table_name;
    $.ajax({
        url: url + "/table_component/",
        success: function (table_component) {
            window.history.pushState(history.state, table_name, url);
            $("#content").removeClass("animate__fadeIn");
            $("#content").hide();
            $("#content").html(table_component);
            $(document).ready(function () {
                load_table_components();
            });
            $("#content").show();
            $("#content").addClass("animate__fadeIn");
        }
    });
}
