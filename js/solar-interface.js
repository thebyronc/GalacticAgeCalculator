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
    if(solar.getAgeOnEarth(currentSolar) > avgLife) {
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
