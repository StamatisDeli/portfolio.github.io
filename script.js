//JAVASCRIPT JQUERY
//----CODE FOR MENU SLIDE IN AND OUT
$(document).ready(function(){
"use strict";
    $("#pressMe").click(function(event){
        $("#myNav").css({ width: "100%" }, 500);
        });
    $(".closeSlider").click(function(event){
            event.preventDefault();
        $("#myNav").css({ width: "0%" }, 500);
        });
     $(".overlay-content").click(function(event){
        $("#myNav").css({ width: "0" }, 500);
        });
});

//----CODE FOR IMAGE SHOW AND HIDE
$(document).ready(function() {
	$(".clickThis").click(function(event) {
        "use strict";
		event.preventDefault();
        var img = $("#img"+$(this).attr("target"));
        
        $(".sdL svg").hide();
        img.show();
        
         $(window).scroll(function(event){
            "use strict";
            event.preventDefault();
            if(img.is(":visible")) {
                img.hide();
                $(".sdL svg").show();
        }
    });
});
	$(".closebtn").click(function(event) {
        "use strict";
		event.preventDefault();
        $(".sdL svg").show();
		$("#img"+$(this).attr("target")).hide();
	});
});

//---CODE FOR AUTOMATIC IMAGE SHOW
$(document).ready(function() {
    "use strict";
    $("#slideShow > div:gt(0)").hide();
    setInterval(function() {
        "use strict";
      $("#slideShow > div:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#slideShow");
    }, 3000);
});

//----ANIMATE THE BACK BUTTON------
