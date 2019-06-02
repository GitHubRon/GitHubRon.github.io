"use strict";
/*****************************************************************************
** Created by Ronald M. Eicher II on 1/14/17 **
*****************************************************************************/
$.noConflict();
jQuery(document).ready(function ($) {
/****************************************************************************/
/***START code for reader name input*****************************************/
    $("#readerInput").hide();
    // This function is called if there is not a valid localStorage.readerName
    function nameFormSetup() {
        // Shows the reader input form
        $("#readerInput").show();
        // Increase the size of the input field if needed
        $("#readerName").on("keyup", function (event) {
            var entryLength = $(this).val().length;
            var startSize = $("#readerName").attr("size");
            if (entryLength >= startSize) {
                $("#readerName").attr("size", entryLength);
            }

        });
        // Make the enter key trigger a click event on the submit button
        $("#readerName").on("keydown",function (event) {
                if (event.which === 13) {
                    $("#readerSubmit").trigger("click"); 
                }
            });
        $("#readerSubmit").on("click", function(event) {
            // Check that something was entered, if valid
            // store value of readerName and populate span before footer,
            // blur the field and set reader var for intro paragraph
            if ($("#readerName").val() !== "" && $("#readerName").val() !== null 
                && $("#readerName").val() !== " ") {
                localStorage.readerName = $("#readerName").val();
                $("#readerThanks").html("<h2 class='lead'>Thanks for visiting " + localStorage.readerName + "</h2>");

                // Remove input field border and blur
                $("#readerName").css("border", "0px").blur();
                var reader = localStorage.readerName;
                // Hide the submit button
                $(this).hide();
                // This variable is the name in the intro paragraph
                if(reader != "" && reader != null) {
                    $("#reader").text(" "+reader);
                }
            }
        });
    }
    if(localStorage.readerName === "" || localStorage.readerName === null 
            || localStorage.readerName === undefined) {
        nameFormSetup();
    } else {
        // If there is a readerName display personalized welcome greeting
        // and leave the input form hidden. Provide a button for the user
        // to change the name if they are not the person being greeted.
        $("#readerInput").before("<div id='returnUser' class='col-md-9 purpleHeader'><h2>Welcome back " + localStorage.readerName + "</h2><button id='changeName' class='btn btn-default'>Click if you are not " + localStorage.readerName + "</button><br/><br/></div>");
        $("#reader").text(" " + localStorage.readerName);

        $("#readerThanks").html("<h2 class='lead'>Thanks for visiting " + localStorage.readerName + "</h2>");
    }
    // If the changeName button is clicked, reset localStorage.readerName,
    // hide the returnUser greeting, call the function to present the input,
    // reset the #reader text and #readerThanks test, and put the focus
    // on #readerName
    $("#changeName").on("click", function () {
        localStorage.readerName = "";
        $("#returnUser").hide();
        nameFormSetup();
        $("#reader").text("");
        $("#readerName").focus();
        $("#readerThanks").html("");
    });



/****************************************************************************/
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
            console.log(navHeight + "navheight");
            console.log(windowHeight + " windowheight");
            console.log(screenHeight + " screenheight");
            
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
                // Hardcoding at offset -149 to make up for browser differences. 
                // on desktop, not on mobile
                if ($(window).width() < 1100) {
                var scrollAmount = ((item.offset().top) - (screenHeight - windowHeight + navHeight));
                } else {
                   var scrollAmount = item.offset().top - 149;
                }
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
   

