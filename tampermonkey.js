// ==UserScript==
// @name         Status page CETIC skin
// @author       sdu
// @match        https://status.cetic.be*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
     $("body").css("background", "none");
     $("#page-container").css("background", "none");
     $("#page-container").css("margin", "0");
     $("#page-container").css("padding", "0");
     $("#main-header").css("margin", "0");
     $(".controller").css("margin", "0");
     $("#main-header").css("display", "none");
     GM_addStyle(".success-bg {background-color: #10a345 !important}\
          .success {color: #10a345}\
     }");
})();
