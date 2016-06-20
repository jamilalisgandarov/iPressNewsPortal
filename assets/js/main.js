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

    $('.sliderMainTrack').mousedown(function(event) {
        $clickedX = event.pageY;
        $(".sliderMainTrack").on("mousemove", function(event) {
            $movedX = event.pageY;
            $difference = $movedX - $clickedX;

            console.log($margin + $difference);
            if(($margin = -316) && $difference < 0) {
                $difference = 0;
            } else if ($margin + $difference < (-316)) {
                $margin = -316;
            } else if ($margin + $difference > 0) {
                $margin = 0;
            } 
            $(".sliderTrack").css({
                transform: 'translate3d(0px,' + $difference + 'px,0px)',

            });
        });
    });


    function carouselInterval() {
        $marginOut = $marginOut - 116;
        $('.sliderTrack').css('margin-top', '' + $marginOut + 'px');
        console.log($marginOut);
        if ($marginOut < -(4 * 116)) {
            $marginOut = 0;
        }

    }
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
        else if($margin + $difference <= (-316)){
            $margin=-316;
        }
        else if($margin+$difference>=0){
            $margin=0;
        }
        else {
            $difference = 0;
        }

    });
    $('.sliderNews').on('click', function() {
        $('.sliderNewsTriangle').css('visibility', 'hidden');
        $('.sliderNews').css('background-color', '#1d1e20');
        $(this).children('.sliderNewsTriangle').css({
            'visibility': 'visible',
            'border-color': 'transparent #242527 transparent transparent '
        });
        $(this).css('background', '#242527');

    });



    // setInterval(function() { carouselInterval() }, 4000);
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
