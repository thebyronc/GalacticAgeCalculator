(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Solar = exports.Solar = function () {
  function Solar(yearBorn, monthBorn, dayBorn) {
    _classCallCheck(this, Solar);

    this.yearBorn = yearBorn;
    this.monthBorn = monthBorn;
    this.dayBorn = dayBorn;
  }

  _createClass(Solar, [{
    key: "convertYearToSeconds",
    value: function convertYearToSeconds(ageYear) {
      // let seconds = date.getFullYear() - ageYear;
      return seconds;
    }
  }, {
    key: "checkError",
    value: function checkError() {
      $(".errorCode").text("Works");
    }
  }]);

  return Solar;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _solar = require('./../js/solar.js');

$(document).ready(function () {
  var solar = new _solar.Solar();
  solar.checkError();
});

},{"./../js/solar.js":1}]},{},[2]);
