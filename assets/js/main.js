jQuery(document).ready(function($) {
    $date = new Date();
    $month = $date.getMonth();
    $day = $date.getDay();
    $monthDay = $date.getDate();
    switch ($day) {
        case 0:
            $day = "Bazar";
            break;
        case 1:
            $day = "Bazar ertəsi";
            break;
        case 2:
            $day = "Çərşənbə axşamı";
            break;
        case 3:
            $day = "Çərşənbə";
            break;
        case 4:
            $day = "Cümə axşamı";
            break;
        case 5:
            $day = "Cümə";
            break;
        case 6:
            $day = "Şənbə";
    }
    switch ($month) {
        case 0:
            $month = "Yanvar";
            break;
        case 1:
            $month = "Fevral";
            break;
        case 2:
            $month = "Mart";
            break;
        case 3:
            $month = "Aprel";
            break;
        case 4:
            $month = "May";
            break;
        case 5:
            $month = "İyun";
            break;
        case 6:
            $month = "İyul";
        case 7:
            $month = "Avqust";
        case 8:
            $month = "Sentyabr";
        case 9:
            $month = "Oktyabr";
        case 10:
            $month = "Noyabr";
        case 11:
            $month = "Dekabr";
    }
    $(".todaysDate").text($day + "," + " " + $monthDay + " " + $month);
    $("li").hover(
        function() {
            $(this).find("span").stop().animate({
                width: "100%",
                opacity: "1",
            }, 400, function() {})
        },
        function() {
            $(this).find("span").stop().animate({
                width: "0%",
                opacity: "0",
            }, 400, function() {})
        }
    );
    $bool = true;

    function newsOverlay() {
        $('.newsOverlay').css('width', '0%');
    };
    newsOverlay();
    $clickedX = 0;
    $movedX = 0;
    $marginOut = 0;
    $margin = 0;
    $difference = 0;
    $posTop = 0;

    function carouselInterval() {
        if ($('.sliderNews').position().top == -232) {
            $('.sliderTrack').css('margin-top', '-316px');
            $marginOut = 0;
        } else if ($('.sliderNews').position().top <= -316) {
            $marginOut = 0;
            $('.sliderTrack').css('margin-top', '' + $marginOut + 'px');
        } else {
            $marginOut = $marginOut - 116;
            $('.sliderTrack').css('margin-top', '' + $marginOut + 'px');
        }
    }
    $interval = setInterval(function() { carouselInterval() }, 10000);
    $('.sliderMainTrack').mousedown(function(event) {
        $clickedX = event.pageY;
        clearInterval($interval);
         clearInterval($interval2);
        $(".sliderMainTrack").on("mousemove", function(event) {
            $movedX = event.pageY;
            $difference = $movedX - $clickedX;
            if ($margin + $difference < (-316)) {
                $difference = 0;
                $margin = -316;
                $(".sliderTrack").css({
                    'margin-top': '' + $margin + 'px',
                    transform: 'translate3d(0px,0px,0px)'

                });
            } else if ($margin + $difference > 0) {
                $difference = 0;
                $margin = 0;
                $(".sliderTrack").css({
                    'margin-top': '' + $margin + 'px',
                    transform: 'translate3d(0px,0px,0px)'

                });
            }
            $(".sliderTrack").css({
                transform: 'translate3d(0px,' + $difference + 'px,0px)',

            });
        });
    });
    $('.sliderTrack').mouseleave(function(event) {
        $(".sliderMainTrack").unbind('mousemove');
    });
    $('.sliderTrack').mouseup(function(event) {
        $(".sliderMainTrack").unbind('mousemove');
    });
    $(document).mouseup(function(event) {
        $(".sliderMainTrack").unbind('mousemove');
        if ($difference != 0) {
            // console.log($difference);
            $margin = $margin + $difference;
            $marginOut = $margin;
            $difference = 0;
            $(".sliderTrack").css({
                'margin-top': '' + $margin + 'px',
                transform: 'translate3d(0px,0px,0px)'

            });
        }

    });

    function activated() {
        $('.sliderNews').css('background-color', '#1d1e20');
        $('.sliderNewsTitle').css('color', 'white');
        $('.sliderNews:first-child').children('.sliderNewsTitle').css('color', '#d54646');
        $('.sliderNews').removeClass('triangle');
        $('.sliderNews h4').removeClass('sliderNewsTitleColored')
        $('.sliderNews').removeClass('activeSlider');
        $('.sliderNews:first-child').addClass('triangle');
        $('sliderNews:first-child').css('background', '#242527');
    }
    activated();
    $activatedslider = 0;

    function activeSlider() {
        $activatedslider++;
        $('.sliderNews').css('background-color', '#1d1e20');
        $('.sliderNewsTitle').css('color', 'white');
        $('.sliderNews').eq($activatedslider).children('.sliderNewsTitle').css('color', '#d54646');
        $('.sliderNews').removeClass('triangle');
        $('.sliderNews h4').removeClass('sliderNewsTitleColored')
        $('.sliderNews').removeClass('activeSlider');
        $('.sliderNews').eq($activatedslider).addClass('triangle');
        $('sliderNews').eq($activatedslider).css('background', '#242527');
        if($('.sliderNews').length-1==$activatedslider){
                $activatedslider = 0;
        }
    }
    $interval2 = setInterval(function() { activeSlider() }, 7000);
    $('.sliderNews').on('click', function() {
        $('.sliderNews').css('background-color', '#1d1e20');
        $('.sliderNewsTitle').css('color', 'white');
        $(this).children('.sliderNewsTitle').css('color', '#d54646');
        $('.sliderNews').removeClass('triangle');
        $('.sliderNews h4').removeClass('sliderNewsTitleColored')
        $('.sliderNews').removeClass('activeSlider');
        $(this).addClass('triangle');
        $(this).css('background', '#242527');

    });



    $(".searchButton a").mouseover(function(event) {
        $('.overlayInput').css('width', '0');
    });

    $('.searchMain input').focus(function(event) {
        $('.overlayInput').css('width', '0');
    });
    $('.searchMain input').focusout(function(event) {
        $('.overlayInput').css('width', '100%');
    });
    $langOn = 0;
    $(".langSelector li:first-child img").click(function(event) {

        if ($langOn % 2 == 0) {
            $('.langSelector li').css('display', 'block');
        } else {

            $('.langSelector li').css('display', 'none');
        }
        $langOn++;
    });
    if ($('.sliderNews').margin < 768) {
        alert("ada");
    }
});
