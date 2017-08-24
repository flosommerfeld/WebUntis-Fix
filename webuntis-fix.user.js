// ==UserScript==
// @name        WebUntis-Fix
// @namespace   https://flosommerfeld.github.io
// @description Fügt die Uhrzeiten der Stunden zum WebUntis-Stundenplan vom TBZ Mitte Bremen hinzu.
// @icon        http://i.imgur.com/4a4b4fH.png
// @include     https://tipo.webuntis.com/*
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// @downloadURL https://github.com/flosommerfeld/WebUntis-Fix/edit/master/webuntis-fix.user.js
// @version     1.9.3
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {
  
  if(window.location.href.indexOf("WebUntis") == -1){
    window.location.href = "https://tipo.webuntis.com/WebUntis";
  }
  
  setInterval(function() {
    if ($(".has-value")[0] && $("#react-select-2--value-item").html().indexOf("BGT") !== -1) {
      $(".rowHeader").each(function() {
        var hourElement = $(this).children().children().children().children().children().children().children();
        hourElement.css("font-size", "8px");
        if (hourElement.html() == "0.") {
          hourElement.append(" 07:20-8:05");
        } else if (hourElement.html() == "1.") {
          hourElement.append(" 08:10-8:55");
        } else if (hourElement.html() == "2.") {
          hourElement.append(" 08:55-09:40");
        } else if (hourElement.html() == "3.") {
          hourElement.append(" 10:00-10:45");
        } else if (hourElement.html() == "4.") {
          hourElement.append(" 10:45-11:30");
        } else if (hourElement.html() == "5.") {
          hourElement.append(" 11:45-12:30");
        } else if (hourElement.html() == "6.") {
          hourElement.append(" 12:30-13:15");
        } else if (hourElement.html() == "7.") {
          hourElement.append(" 13:45-14:30");
        } else if (hourElement.html() == "8.") {
          hourElement.append(" 14:30-15:15");
        } else if (hourElement.html() == "9.") {
          hourElement.append(" 15:30-16:15");
        } else if (hourElement.html() == "10.") {
          hourElement.append(" 16:15-17:00");
        } else if (hourElement.html() == "11.") {
          hourElement.append(" 17:15-18:00");
        }
      });
    } else {
      //nothing
    }
  }, 10);
  
});

