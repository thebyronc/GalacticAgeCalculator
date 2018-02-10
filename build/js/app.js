(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Solar = exports.Solar = function () {
  function Solar(year, month, day, avgLife) {
    _classCallCheck(this, Solar);

    this.year = year;
    this.month = month;
    this.day = day;
    this.avgEarth = avgLife;
    this.avgMercury = Math.floor(avgLife / .24);
    this.avgVenus = Math.floor(avgLife / .62);
    this.avgMars = Math.floor(avgLife / 1.88);
    this.avgJupiter = Math.floor(avgLife / 11.86);
  }

  _createClass(Solar, [{
    key: "getAvgEarth",
    value: function getAvgEarth() {
      return this.avgEarth;
    }
  }, {
    key: "getAvgMercury",
    value: function getAvgMercury() {
      return this.avgMercury;
    }
  }, {
    key: "getAvgVenus",
    value: function getAvgVenus() {
      return this.avgVenus;
    }
  }, {
    key: "getAvgMars",
    value: function getAvgMars() {
      return this.avgMars;
    }
  }, {
    key: "getAvgJupiter",
    value: function getAvgJupiter() {
      return this.avgJupiter;
    }
  }, {
    key: "convertYearToSeconds",
    value: function convertYearToSeconds() {
      var seconds = Date.UTC(this.year, this.month, this.day) / 1000;
      return seconds;
    }
  }, {
    key: "compareDates",
    value: function compareDates(dateA, dateB) {
      var date = new Date();
      var dateASeconds = Date.UTC(dateA.year, dateA.month, dateA.day) / 1000;
      var dateBSeconds = Date.UTC(dateB.year, dateB.month, dateB.day) / 1000;

      return Math.abs(dateASeconds - dateBSeconds);
    }
  }, {
    key: "getAgeOnEarth",
    value: function getAgeOnEarth(currentDate) {
      var dateMS = Date.UTC(this.year, this.month, this.day);
      var currentDateMS = Date.UTC(currentDate.year, currentDate.month, currentDate.day);
      var ageInMS = currentDateMS - dateMS;
      var epoch = Date.UTC(1971);
      var currentAge = Math.floor(ageInMS / epoch);
      return currentAge;
    }
  }, {
    key: "getAgeOnMercury",
    value: function getAgeOnMercury(currentDate) {
      var dateMS = Date.UTC(this.year, this.month, this.day);
      var currentDateMS = Date.UTC(currentDate.year, currentDate.month, currentDate.day);
      var ageInMS = currentDateMS - dateMS;
      var epoch = Date.UTC(1971);
      var currentAge = Math.floor(ageInMS / (epoch * .24));
      return currentAge;
    }
  }, {
    key: "getAgeOnVenus",
    value: function getAgeOnVenus(currentDate) {
      var dateMS = Date.UTC(this.year, this.month, this.day);
      var currentDateMS = Date.UTC(currentDate.year, currentDate.month, currentDate.day);
      var ageInMS = currentDateMS - dateMS;
      var epoch = Date.UTC(1971);
      var currentAge = Math.floor(ageInMS / (epoch * .62));
      return currentAge;
    }
  }, {
    key: "getAgeOnMars",
    value: function getAgeOnMars(currentDate) {
      var dateMS = Date.UTC(this.year, this.month, this.day);
      var currentDateMS = Date.UTC(currentDate.year, currentDate.month, currentDate.day);
      var ageInMS = currentDateMS - dateMS;
      var epoch = Date.UTC(1971);
      var currentAge = Math.floor(ageInMS / (epoch * 1.88));
      return currentAge;
    }
  }, {
    key: "getAgeOnJupiter",
    value: function getAgeOnJupiter(currentDate) {
      var dateMS = Date.UTC(this.year, this.month, this.day);
      var currentDateMS = Date.UTC(currentDate.year, currentDate.month, currentDate.day);
      var ageInMS = currentDateMS - dateMS;
      var epoch = Date.UTC(1971);
      var currentAge = Math.floor(ageInMS / (epoch * 11.86));
      return currentAge;
    }
  }]);

  return Solar;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _solar = require("./../js/solar.js");

$(document).ready(function () {

  $("#userBirthDay").submit(function (event) {
    event.preventDefault();
    var currentDate = new Date();
    var currentSolar = new _solar.Solar(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 100);
    var year = parseInt($("#year").val());
    var month = parseInt($("#month").val()) - 1;
    var day = parseInt($("#day").val());
    var avgLife = parseInt($("#avgLife").val());
    console.log(year);
    var solar = new _solar.Solar(year, month, day, avgLife);
    if (solar.getAgeOnEarth(currentSolar) > avgLife) {
      $(".over").show();
      $("#overAge").text(solar.getAgeOnEarth(currentSolar));
      $("#getAvgOver").text(solar.getAvgEarth());
    } else {
      $(".over").hide();
    }
    $("#earthAge").text(solar.getAgeOnEarth(currentSolar));
    $("#getAvgEarth").text(solar.getAvgEarth());

    $("#mercuryAge").text(solar.getAgeOnMercury(currentSolar));
    $("#getAvgMercury").text(solar.getAvgMercury());

    $("#venusAge").text(solar.getAgeOnVenus(currentSolar));
    $("#getAvgVenus").text(solar.getAvgVenus());

    $("#marsAge").text(solar.getAgeOnMars(currentSolar));
    $("#getAvgMars").text(solar.getAvgMars());

    $("#jupiterAge").text(solar.getAgeOnJupiter(currentSolar));
    $("#getAvgJupiter").text(solar.getAvgJupiter());
  });
});

},{"./../js/solar.js":1}]},{},[2]);
