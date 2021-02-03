function load_update_component(id, table_name) {

    url = location.protocol + '//' + location.host + "/table/" + table_name + '/update_component/' + id;
    $.ajax({
        url: url,
        success: function (update_component) {
            window.history.pushState(history.state, "Update" + table_name, location.protocol + '//' + location.host + "/table/" + table_name + '/update/' + id);
            $("#content").removeClass("animate__fadeIn");
            $("#content").hide();
            $("#content").html(update_component);
            $(document).ready(function () {
                load_update_components();
            });
            $("#content").show();
            $("#content").addClass("animate__fadeIn");
        }
    });
}
