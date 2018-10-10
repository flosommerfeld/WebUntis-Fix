// ==UserScript==
// @name        WebUntis-Fix
// @namespace   https://flosommerfeld.github.io
// @description Fix für den WebUntis-Stundenplan vom TBZ Mitte Bremen.
// @icon        http://i.imgur.com/4a4b4fH.png
// @include     https://tipo.webuntis.com/*
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// @downloadURL https://github.com/flosommerfeld/WebUntis-Fix/edit/master/webuntis-fix.user.js
// @version     1.9.5
// ==/UserScript==


this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {

    if (window.location.href.indexOf("WebUntis") == -1) {
        window.location.href = "https://tipo.webuntis.com/WebUntis/#/basic/timetable";
    }

    setInterval(function() {
        if ($(".has-value")[0] && $("#react-select-2--value-item").html().indexOf("BGT") !== -1) {
            $(".rowHeader").each(function() {
                var hourElement = $(this).children().children().children().children().children().children().children();
                hourElement.css("font-size", "8px");

                switch (hourElement.html()) {

                    case "0.":
                        hourElement.append(" 07:20-8:05");
                        break;
                    case "1.":
                        hourElement.append(" 08:55-09:40");
                        break;

                    case "2.":
                        hourElement.append(" 08:55-09:40");
                        break;

                    case "3.":
                        hourElement.append(" 10:00-10:45");
                        break;

                    case "4.":
                        hourElement.append(" 10:45-11:30");
                        break;

                    case "5.":
                        hourElement.append(" 11:45-12:30");
                        break;

                    case "6.":
                        hourElement.append(" 12:30-13:15");
                        break;

                    case "7.":
                        hourElement.append(" 13:45-14:30");
                        break;

                    case "8.":
                        hourElement.append(" 14:30-15:15");
                        break;

                    case "9.":
                        hourElement.append(" 15:30-16:15");
                        break;

                    case "10.":
                        hourElement.append(" 16:15-17:00");
                        break;

                    case "11.":
                        hourElement.append(" 17:15-18:00");
                        break;

                    default:
                        break;
                }

            });
        } else {
            //nothing
        }
    }, 10);

});
