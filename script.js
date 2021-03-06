//JQUERY
//Animating Text
$(function () {
    "use strict";
    let speed = 500;
    $("#underscore").hide();
    $(".symbol").hide();
    $(".animated-text").hide();
    $(".animated-text").fadeIn(5000);

    $("#an-text li").each(function () {
        speed *= 1.5
        $(this).animate({ right: $(window).width() / 4 }, speed);
    });
    $(".symbol").fadeIn(9000);

    setTimeout(function () {
        $('#underscore').show()
        $('#underscore').each(function () {
            var elem = $(this);
            setInterval(function () {
                if (elem.css('visibility') == 'hidden') {
                    elem.css('visibility', 'visible');
                } else {
                    elem.css('visibility', 'hidden');
                }
            }, 500);
        });
    }, 5000)

    setTimeout(function () {
        $('#an-concept').css({
            '-moz-transform': 'scale(-1, 1)',
            '-webkit-transform': 'scale(-1, 1)',
            '-o-transform': 'scale(-1, 1)',
            '-ms-transform': 'scale(-1, 1)',
            'transform': 'scale(-1, 1)',
        });
    }, 7000)
    setTimeout(function () {
        $('#an-concept').css({
            '-moz-transform': 'scale(1, 1)',
            '-webkit-transform': 'scale(1, 1)',
            '-o-transform': 'scale(1, 1)',
            '-ms-transform': 'scale(1, 1)',
            'transform': 'scale(1, 1)',
        });
    }, 8000)
    setTimeout(function () {
        $('#an-design').css({
            '-moz-transform': 'scale(-1, 1)',
            '-webkit-transform': 'scale(-1, 1)',
            '-o-transform': 'scale(-1, 1)',
            '-ms-transform': 'scale(-1, 1)',
            'transform': 'scale(-1, 1)',
        });
    }, 8000)
    setTimeout(function () {
        $('#an-design').css({
            '-moz-transform': 'scale(1, 1)',
            '-webkit-transform': 'scale(1, 1)',
            '-o-transform': 'scale(1, 1)',
            '-ms-transform': 'scale(1, 1)',
            'transform': 'scale(1, 1)',
        });
    }, 9000)
    setTimeout(function () {
        $('#an-code').css({
            'color': 'darkred'
        })
    }, 9000)

    setInterval(repeat, 5000)
})

//Animate the footer infinitely -- Calling above
function repeat() {
    $("#anim-footer").css({
        'color': 'darkred',
        '-moz-transform': 'scaleY(-1)',
        '-webkit-transform': 'scaleY(-1)',
        '-o-transform': 'scaleY(-1)',
        '-ms-transform': 'scaleY(-1)',
        'transform': 'scaleY(-1)',
        '-moz-transition': 'all 0.2s linear',
        '-webkit-transition': 'all 0.2s linear',
        'transition': 'all 0.2s linear'
    }, 100);
    setTimeout(function () {
        $("#anim-footer").css({
            'color': 'black',
            '-moz-transform': 'scaleY(1)',
            '-webkit-transform': 'scaleY(1)',
            '-o-transform': 'scaleY(1)',
            '-ms-transform': 'scaleY(1)',
            'transform': 'scaleY(1);',
            '-moz-transition': 'all 0.2s linear',
            '-webkit-transition': 'all 0.2s linear',
            'transition': 'all 0.2s linear'
        }, 100);
    }, 500);
}

$(function () {
    "use strict"
    //FLIPPING TEXT FUNCTIONALITY
    //Turn string into p elements
    function convertLetters(tobe) {
        const raw = $(tobe).html()
        let spreaded = [...raw]
        let i = 0

        for (i = 0; i in spreaded; i++) {
            spreaded[i] = '<p class="anim-letter">' + spreaded[i] + '</p>'
        }
        let joined = spreaded.join('')
        $(tobe).html(joined)
    }

    let speed = 80

    function animateLetter(value) {
        setTimeout(function () {
            $(value).css({
                '-moz-transform': 'scale(-1, 1)',
                '-webkit-transform': 'scale(-1, 1)',
                '-o-transform': 'scale(-1, 1)',
                '-ms-transform': 'scale(-1, 1)',
                'transform': 'scale(-1, 1)',
            }, speed)
        }, speed)
        setTimeout(function () {
            $(value).css({
                '-moz-transform': 'scale(1, 1)',
                '-webkit-transform': 'scale(1, 1)',
                '-o-transform': 'scale(1, 1)',
                '-ms-transform': 'scale(1, 1)',
                'transform': 'scale(1, 1)',
            }, speed)
        }, speed * 2)
    }

    function animate(input) {
        $(input).each(function (i, input) {
            setTimeout(function () {
                animateLetter(input)
            }, speed * i)
        })
    }
    setTimeout(function(){
        convertLetters("#an-code")
        animate("#an-code p")
    }, 9000)

})

//MENU AND SLIDESHOW FUNCTIONALITY
$(function () {
    //--CODE FOR MENU SLIDE IN AND OUT
    $(document).ready(function () {
        "use strict";
        $("#pressMe").click(function (event) {
            $("#myNav").css({ width: "100%" }, 500);
        });
        $(".closeSlider").click(function (event) {
            event.preventDefault();
            $("#myNav").css({ width: "0%" }, 500);
        });
        $(".overlay-content").click(function (event) {
            $("#myNav").css({ width: "0" }, 500);
        });
    });
    //----CODE FOR IMAGE SHOW AND HIDE
    $(".clickThis").click(function (event) {
        "use strict";
        event.preventDefault();
        var img = $("#img" + $(this).attr("target"));

        $(".sdL svg").hide();
        img.show();

        $(window).scroll(function (event) {
            "use strict";
            event.preventDefault();
            if (img.is(":visible")) {
                img.hide();
                $(".sdL svg").show();
            }
        });
    });
    //--Close button fucntionality
    $(".closebtn").click(function (event) {
        "use strict";
        event.preventDefault();
        $(".sdL svg").show();
        $("#img" + $(this).attr("target")).hide();
    });

    //---CODE FOR AUTOMATIC IMAGE SHOW
    $("#slideShow > div:gt(0)").hide();
    setInterval(function () {
        "use strict";
        $("#slideShow > div:first")
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#slideShow");
    }, 3000);

    //----ANIMATE THE BACK BUTTON------//
    $("#logo").mousedown(function (event) {
        "use strict";
        $(this).addClass("bounceIn");
    });
    $("#logo").mouseup(function (event) {
        "use strict";
        $(this).removeClass("bounceIn");
    });

    //--SCROLLIFY--//
    //$(".container").height($(window).height());
    //$(".snap").height($(window).height());
    //$(".snap").snapscroll();

    $.scrollify({
        section: ".snap",
        //sectionName : "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1300,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () { },
        after: function () { },
        afterResize: function () { },
        afterRender: function () { }
    });
})

/*
//--SNAP TO SCROLL COPYRIGHT: Mi_Creativity----//
$(document).ready(function() {
    "use strict";
    var sections = $('.snap'),
    win = $(window),
    index = 0,
    isScrolling = false;
    
win.on('scroll', function() {
  var winTop = win.scrollTop(),
    secTop = $(sections[index]).offset().top;
    
  if (!isScrolling) {
    if (winTop > secTop) {
      isScrolling = true;
      animateScrolling($(sections[index + 1]).offset().top);
      index += 1;
    }
    if (winTop < secTop) {
      isScrolling = 1;
      animateScrolling($(sections[index - 1]).offset().top);
      index -= 1;
    }
  }
});

function animateScrolling(secTop) {
  $('html, body').animate({
    scrollTop: secTop
  }, 500, 'easeInOutCubic', function(){
  	isScrolling = false;
  });
}
});
*/