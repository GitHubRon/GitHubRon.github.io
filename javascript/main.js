/**
 * Created by RonaldMEicherII on 1/14/17.
 */

"use strict";
$.noConflict();
jQuery(document).ready(function ($) {

// START Slide logo code //////////////////////////////////////////////////////////
    var logoStripe = $("div.logobar");
    var ron = $("#myName");
//    console.log(logoStripe);
    var otherContent = $("nav").siblings().addBack(); //addBack() is a replacement for deprecated andSelf();
    otherContent.hide();
    $('#footercont').css("visibility", "hidden");

    logoStripe.each(function (index) {
            $(this)
                .delay(200 + index * 500)
                .show(500);
        }
    );

    logoStripe.eq(2).promise().then(function () {
        otherContent.fadeIn("slow");
        //$("#slider").after($("<div>", {
            //"id": "label",
            //"html": "<p style='color: white'>Clock Brightness</p>"
        });

        //$("#label")
           // .append("<p style='color: white'>50%</p>")
           // .css("margin", ".5vh 0 0 0");


        otherContent.promise().then(function () {

            //holdFooter();
            //$("#videoholder").load("videomi.html");
        });



// End Slide logo code /////////////////////////////////////////////////////////////////////////////////////////////////
// START Navbar id="addedDiv" code to "stick" to the top //////////////////////
var checkTop;
$(window).on("scroll", function () {
	if ($(window).scrollTop() < $("#addedNav").offset().top) {
		checkTop = $("#addedNav").offset().top;
	} else {
	   checkTop = checkTop;
	}	   
	console.log(checkTop);
	console.log($("#addedNav").offset().top);
	console.log($(window).width());
	console.log($(window).scrollTop());
	// Fix navbar if window scroll exeeds offset, but only for larger devices
	if (($(window).scrollTop() > $("#addedNav").offset().top) && $(window).width() > 800 ) {
		$("#addedNav").addClass("navbar-fixed-top");
	}
	else if ($(window).scrollTop() < checkTop) { 
	$("#addedNav").removeClass("navbar-fixed-top");
	}
}); 
// END Navbar code /////////////////////////////////////////////////////////
    // START Opacity slider code //////////////////////////////////////////////////////////
    $("#slider").slider({
        value: 50,
        min: 0
    });

    $("#clockDisplay").css("opacity", .50);



    $("#slider").on("slide", function (event, ui) {
        var valueMessage = ui.value;
        $("#adjValue").text(valueMessage);
        var setOpacity = ui.value/100;
        $('#clockDisplay').css("opacity", setOpacity);
    });
// END Opacity slider code //////////////////////////////////////////////////////////
// START Clock code ////////////////////////////////////////////////////////////////////////////////////////////////////

    function timeDisplay() {
        var currTime = new Date();
        var hourVal = currTime.getHours();
        var minVal = currTime.getMinutes();
        (minVal < 10) ? minVal = "0" + minVal : minVal = minVal;
        var secVal = currTime.getSeconds();
        (secVal < 10) ? secVal = "0" + secVal : secVal = secVal;
        if (hourVal >= 0 && hourVal < 12) {
            var text = "GOOD MORNING";
        } else if (hourVal >= 12 && hourVal < 17) {
            var text = "GOOD AFTERNOON";
        } else {
            var text = "GOOD EVENING";
        }
        return hourVal + ":" + minVal + ":" + secVal + "   <span id='greet'>" + text + "</span>";
    }

    function startClock() {
        $("#clockDisplay").html(timeDisplay());
    }

    var runClock = setInterval(startClock, 500);


// END Clock code //////////////////////////////////////////////////////////////////////////////////////////////////////
/////// START LOAD CODE //////////////////////
    $('#loadButton').on("click", function () {
		$('#myVideo').load("videomi.html");
	});
// START print resume button code ////////////////////////////////////////////
    $('#printResume').on("click", function () {
		window.print();
	});
// END print resume button code /////////////////////////////////////////////
});


