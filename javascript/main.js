"use strict";
/*****************************************************************************
** Created by Ronald M. Eicher II on 1/14/17 **
*****************************************************************************/
$.noConflict();
jQuery(document).ready(function ($) {

    /* Eliminating the three div slide in, then fade, too choppy on Safari browser or slower connections. 
// START Slide logo code, navbar, and link scrolling code
    var logoStripe = $("div.logobar");
    var otherContent = $("nav").siblings().addBack();
    //addBack() is a replacement for deprecated andSelf()
    otherContent.hide();
    $("#footercont").css("visibility", "hidden");

    logoStripe.each(function (index) {
        $(this)
            .delay(200 + index * 500)
            .show(500);
    });

    logoStripe.eq(2).promise().then(function () {
        otherContent.fadeIn("slow");
    });

    otherContent.promise().then(function () {*/
        if (screen.width > 100 && window.innerWidth > 100 && $(window).width() > 100) {
        // The code below gives a slight initial scroll, future movements are counted as a scroll.
        // Links do not function properly without this, except after a manual scroll.
            window.scrollTo(0, 1);
        // START Navbar link code to scroll on desktop (compensate for toolbars and fixed nav)
        // Offsets are zero before the fade in, this must be done here
        // Window height and screen height are different due to Mac tool bar
        // $(window).height() needs used for responsive design mode, screen.height remains desktop height.
            var windowHeight = $(window).height();
            var screenHeight = screen.height;
            var diff = screenHeight - windowHeight;
            var navHeight = $("#addedNav").outerHeight();
            // The code below is for ipads
            if (diff < 50) {
                navHeight = $("#addedNav").outerHeight(true);
            }
            // Find all items with href beginning with '#link'
            var navItems = $("[href^='#link']");
            // Loop the navbar links, set scroll amount to link target offset compensating
            // for the Mac header and the navbar height of 50.
            navItems.each(function () {
                var targetId = $(this).attr("href");
                var item = $(targetId);
                var scrollAmount = ((item.offset().top) - (screenHeight - windowHeight + navHeight));
                $(this).on("click", function (event) {
                    event.preventDefault();
                    window.scrollTo(0, scrollAmount);
                });
            });
        }
   //* part of the slide and fade in code  });
    // The code below activates the menu icon click on smaller devices when any link is clicked.
    // Without the code below the uncollapsed menu blocks the screen, forces user to click again, and skews the scroll amount!
    if ($(window).width() < 1100) {
        $("[href^='#link']").on("click", function () {
            $("button.navbar-toggle").trigger("click");
        });
    }

// End Slide logo code, navbar, and link scrolling code

// START Navbar id="addedDiv" code to "stick" to the top
    $(window).on("scroll", function () {
        // Fix navbar for all devices, leaving conditionals as a reminder of option not to fix navbar for smaller devices.
        var bannerHeight = $(".logobar").height() * 3;
        if ($(window).scrollTop() > bannerHeight && $(window).width() > 100 && screen.width > 100) {
            $("#addedNav").addClass("navbar-fixed-top");
        } else if ($(window).scrollTop() < bannerHeight) {
            $("#addedNav").removeClass("navbar-fixed-top");
        }
    });
// END Navbar id="addedDiv" code to "stick" to the top

// START Opacity slider code
    $("#slider").slider({
        value: 50,
        min: 0
    });

    $("#clockDisplay").css("opacity", .50);



    $("#slider").on("slide", function (event, ui) {
        var valueMessage = ui.value;
        $("#adjValue").text(valueMessage);
        var setOpacity = ui.value / 100;
        $("#clockDisplay").css("opacity", setOpacity);
    });
// END Opacity slider code

// START Clock code
    function timeDisplay() {
        var text;
        var currTime = new Date();
        var hourVal = currTime.getHours();
        var minVal = currTime.getMinutes();
        //(minVal < 10) ? minVal = "0" + minVal : minVal = minVal;
        minVal = (minVal < 10) ? "0" + minVal : minVal;
        var secVal = currTime.getSeconds();
        //(secVal < 10) ? secVal = "0" + secVal : secVal = secVal;
        secVal = (secVal < 10) ? "0" + secVal : secVal;
        if (hourVal >= 0 && hourVal < 12) {
            text = "GOOD MORNING";
        } else if (hourVal >= 12 && hourVal < 17) {
            text = "GOOD AFTERNOON";
        } else {
            text = "GOOD EVENING";
        }
        return hourVal + ":" + minVal + ":" + secVal + "   <span id='greet'>" + text + "</span>";
    }

    function startClock() {
        $("#clockDisplay").html(timeDisplay());
    }

    setInterval(startClock, 500);
// END Clock code

// START Load video code 
    $("#loadButton").on("click", function () {
        $("#myVideo").load("videomi.html");
    });
// END Load video code

// START print resume button code
    $("#printResume").on("click", function () {
        window.print();
    });
// END print resume button code

// START link button code
    $("#lugnuts").click(function () {
        window.open("http://www.webweavin.com");
    });
    $("#geocache").click(function () {
        window.open("http://www.geocaching.com");
    });
    $("#chess").click(function () {
        window.open("http://www.chess.com");
    });
// END link button code

}); // END jQuery ready block
   

