(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var words = document.querySelector(".content").textContent.split(" ").length;
var wpm = words / 230;

var wordText = document.createTextNode(Math.round(wpm) + " minutes");

document.querySelector("#words").appendChild(wordText);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsU0FBUyxhQUFULENBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLENBQStDLEtBQS9DLENBQXFELEdBQXJELEVBQTBELE1BQXRFO0FBQ0EsSUFBSSxNQUFNLFFBQVEsR0FBbEI7O0FBR0EsSUFBSSxXQUFXLFNBQVMsY0FBVCxDQUEyQixLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQTNCLGNBQWY7O0FBRUEsU0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFdBQWpDLENBQTZDLFFBQTdDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB3b3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS50ZXh0Q29udGVudC5zcGxpdChcIiBcIikubGVuZ3RoO1xubGV0IHdwbSA9IHdvcmRzIC8gMjMwO1xuXG5cbmxldCB3b3JkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke01hdGgucm91bmQod3BtKX0gbWludXRlc2ApO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmRzXCIpLmFwcGVuZENoaWxkKHdvcmRUZXh0KTtcbiJdfQ==
