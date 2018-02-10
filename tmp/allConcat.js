import { Solar } from './../js/solar.js';

$(document).ready(function() {

  $("#userBirthDay").submit(function(event) {
    event.preventDefault();
    let currentDate = new Date();
    let currentSolar = new Solar(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 100);
    let year = parseInt($("#year").val());
    let month = parseInt($("#month").val()) - 1;
    let day = parseInt($("#day").val());
    let avgLife = parseInt($("#avgLife").val());
    console.log(year);
    let solar = new Solar(year, month, day, avgLife);
    $("#earthAge").text(solar.getAgeOnEarth(currentSolar));
    $("#getAvgEarth").text(solar.getAvgEarth());
  });
});
