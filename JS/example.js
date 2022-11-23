$(document).ready(function () {
    $(window).scroll(function (event) {
        var position = $('body, html').scrollTop();
        console.log(position);
        if ((position >= 0) && (position < 500)) {
            $('ul.mainmenu li a#item0').addClass('change');
        } else {
            $('ul.mainmenu li a#item0').removeClass('change');
        }

        if ((position >= 500) && (position <= 1000)) {
            $('ul.mainmenu li a#item1').addClass('change');
        } else {
            $('ul.mainmenu li a#item1').removeClass('change');
        }

        if ((position > 1000) && (position <= 1600)) {
            $('ul.mainmenu li a#item2').addClass('change');
        } else {
            $('ul.mainmenu li a#item2').removeClass('change');
        }

        if ((position > 1600) && (position <= 2000)) {
            $('ul.mainmenu li a#item3').addClass('change');
        } else {
            $('ul.mainmenu li a#item3').removeClass('change');
        }

    });;

    $("a#item3").click(function(){
        $(document.body).animate(
            {scrollTop:0},
            800
        );
      });
});