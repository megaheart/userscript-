// ==UserScript==
//@name Facebook changer
//@namespace terashare.tk
//@description Thay d?i phong cách
//@version 1.0
//@icon http://i.imgur.com/XsLls51.jpg?1
//@author Megaheart
//@license MIT
//@include /^http?://facebook.com/*$/
//@supportURL http://terashare.tk/
//@require  https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
//@run-at document-idle
//@grant none
// ==UserScript==

(function () {

    'use strict';
$(document).ready(function(){
$("._2s1x ._2s1y").css({"background-color":" #179a15","border-bottom":"1px solid #179a15"});
});
}());
