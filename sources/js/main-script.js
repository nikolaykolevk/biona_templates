//Event listeners for the table page
$(document).ready(function () {


    $(document).on('click', "#navigation li a[data-menu-link][data-target-table]", function () {
        load_table_component($(this).attr("data-target-table"));
    });

    $(document).on('click', "#navigation a[data-menu-link][data-home-link]", function () {
        console.log("he");
        
        url = location.protocol + '//' + location.host;
        $.ajax({
            url: url + "/home",
            success: function (home_page) {
                window.history.pushState(history.state, document.title, url);
                $("#content").removeClass("animate__fadeIn");
                $("#content").hide();
                $("#content").html(home_page);
                $("#content").show();
                $("#content").addClass("animate__fadeIn");
            }
            
        });
    });

});