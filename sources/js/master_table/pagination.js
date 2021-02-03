//loads the pagination based on the page index
//could be used to move_pagination indexes left or right or to simply reload the pagination
function load_pagination(move_pag = false, direction = false) {

    ULR_s_params = new URLSearchParams(window.location.search);
    max_page = parseInt($("#table").attr("data-max-page"), 10);
    dc = parseInt(ULR_s_params.get("dc"), 10);
    index = parseInt(ULR_s_params.get("index"), 10);
    items_count = max_page;
    if (items_count > 10) {
        items_count = 10;
    }

    left = 0;
    right = 0;

    if (!move_pag) {
        
        left = index - 5;
        right = max_page;

        while (left < 1) { left++; }

        if (right - left < 9) {
            while (right < max_page) {
                right++;
                if (right - left == 9) {
                    break;
                }
            }
            while (left > 1) {
                left--;
                if (right - left == 9) {
                    break;
                }
            }

        } else {
            right = left + 9;
        }
    
    } else {
        left = parseInt($("ul.pagination li:eq(1) a").attr("data-target-page"), 10);
        right = parseInt($("ul.pagination li:eq(" + items_count + ") a").attr("data-target-page"), 10);

        if (direction) {
            left -= 10;
            right -= 10;
            while (left < 1) {
                left++;
            }
            while (right - left < 9) {
                right++;
                if (right == max_page) {
                    break;
                }
            }
        } else {
            left += 10;
            right += 10;
            while (right > max_page) {
                right--;
            }
            while (right - left < 9) {
                left--;
                if (left == 1) {
                    break;
                }
            }
        }
    }

    $("ul.pagination").parent().hide();
    $("ul.pagination a[data-target-page]").parent().remove();
    $("h6.pag_info").remove();

    if (left == 1) {
        $("ul.pagination li[data-move-pagination='true']").addClass("disabled");
    } else {
        $("ul.pagination li[data-move-pagination='true']").removeClass("disabled");
    }

    if (right == max_page) {
        $("ul.pagination li[data-move-pagination='false']").addClass("disabled");
    } else {
        $("ul.pagination li[data-move-pagination='false']").removeClass("disabled");
    }

    for (i = left; i < right + 1; i++) {
        $("ul.pagination li[data-move-pagination='false']").before('<li class="page-item"><a class="page-link" href="#" data-target-page="' + i + '">' + i + '</a></li>');
    }

    count_data = $("<h6 class='pag_info text-center'>" + (1 + (index - 1) * dc) + " - " + ($("#table > tbody > tr").length + (index - 1) * dc) + " of " + $("#table").attr("data-rows-count") + "</h6>");
    $("ul.pagination").before(count_data);
    
    $("ul.pagination li a[data-target-page='" + index + "']").parent().addClass("active blue accent-2");
    $("ul.pagination li a[data-target-page='" + index + "']").removeAttr("href");

    $("ul.pagination").parent().removeClass("animate__slideInLeft");
    $("ul.pagination").parent().removeClass("animate__slideInRight");
    $("ul.pagination").parent().show();
    $("ul.pagination").parent().addClass("animate__slideInLeft");


}

//Updates the page
function select_page(index) {
    searchParams = new URLSearchParams(window.location.search);
    searchParams.set("index", index);
    window.history.replaceState(history.state, document.title, location.protocol + '//' + location.host + location.pathname + '?' + searchParams);

    reload_table();
}


//pagination arrow buttons
$(document).on('click', 'ul.pagination li[data-move-pagination]:not(.disabled) a', function () {
    load_pagination(true, $(this).parent().attr("data-move-pagination") == "true");
});

//pagination chose page
$(document).on('click', 'ul.pagination li a[href][data-target-page]:not(.active)', function () {
    select_page($(this).attr("data-target-page"));
});
