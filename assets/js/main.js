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
    $margin = 0;
    $difference = 0;
    $posTop = 0;

    $('.sliderMainTrack').mousedown(function(event) {
        $clickedX = event.pageY;
        $(".sliderMainTrack").on("mousemove", function(event) {
            $movedX = event.pageY;
            $difference = $movedX - $clickedX;
            // console.log($difference);
            $(".sliderTrack").css({
                transform: 'translate3d(0px,' + $difference + 'px,0px)',

            });
        });
    });
    $(document).mouseup(function(event) {
        $(".sliderMainTrack").unbind('mousemove');
        if ($difference != 0) {
            // console.log($difference);
            $margin = $margin + $difference;
            $difference = 0;
            $(".sliderTrack").css({
                'margin-top': '' + $margin + 'px',
                transform: 'translate3d(0px,0px,0px)'

            });
        }

    });
    $('.sliderNews').on('click', function() {
        $('.sliderNewsTriangle').css('visibility', 'hidden');
        $('.sliderNews').css('background-color','#1d1e20');
        $(this).children('.sliderNewsTriangle').css({
            'visibility': 'visible',
            'border-color':'transparent #242527 transparent transparent '
        });
        $(this).css('background','#242527');

    });
    $marginOut=0;
    function carouselInterval(){
        $marginOut=$marginOut-116;
        $('.sliderTrack').css('margin-top',''+$marginOut+'px');


    }
   setInterval(function(){carouselInterval()},6000);
    // setInterval(newsOverlay(), 3000);
    // $('.sliderMain').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // });
    // newsOverlay();
});
