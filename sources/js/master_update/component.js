var update_object = {};

$(document).ready(function () {
    load_update_components();
});

function load_update_components() {
    $.each($("div.update-container [data-update-prop]"), function (index, value) {
        if ($(value).attr("data-type") == "text") {
            console.log(index + "is text ")
        } else if ($(value).attr("data-type") == "boolean") {
            console.log(index + "is bool ")
        } else if ($(value).attr("data-type") == "date") {
            console.log(index + "is date ")
        }
    });

    var instances = M.FloatingActionButton.init($("#submenu"), {
        direction: "left",
        hoverEnabled: false
    });
}