export class Solar {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  convertYearToSeconds() {
    let seconds = Date.UTC(this.year,this.month,this.day)/1000;
    return seconds;
  }

  compareDates(dateA, dateB) {
    let date = new Date();
    let dateASeconds = Date.UTC(dateA.year,dateA.month,dateA.day)/1000;
    let dateBSeconds = Date.UTC(dateB.year,dateB.month,dateB.day)/1000;

    return Math.abs(dateASeconds - dateBSeconds);
  }
  getAgeOnEarth(currentDate) {
    let dateMS = Date.UTC(this.year,this.month,this.day);
    let currentDateMS = Date.UTC(currentDate.year,currentDate.month,currentDate.day);
    let ageInMS = currentDateMS - dateMS;
    let epoch = Date.UTC(1971);
    let currentAge = Math.floor(ageInMS/epoch);
    return currentAge;
  }
  getAgeOnMercury(currentDate) {
    let dateMS = Date.UTC(this.year,this.month,this.day);
    let currentDateMS = Date.UTC(currentDate.year,currentDate.month,currentDate.day);
    let ageInMS = currentDateMS - dateMS;
    let epoch = Date.UTC(1971);
    let currentAge = Math.floor(ageInMS/(epoch*.24));
    return currentAge;
  }
  getAgeOnVenus(currentDate) {
    let dateMS = Date.UTC(this.year,this.month,this.day);
    let currentDateMS = Date.UTC(currentDate.year,currentDate.month,currentDate.day);
    let ageInMS = currentDateMS - dateMS;
    let epoch = Date.UTC(1971);
    let currentAge = Math.floor(ageInMS/(epoch*.62));
    return currentAge;
  }
  getAgeOnMars(currentDate) {
    let dateMS = Date.UTC(this.year,this.month,this.day);
    let currentDateMS = Date.UTC(currentDate.year,currentDate.month,currentDate.day);
    let ageInMS = currentDateMS - dateMS;
    let epoch = Date.UTC(1971);
    let currentAge = Math.floor(ageInMS/(epoch*1.88));
    return currentAge;
  }
  checkError() {
    $(".errorCode").text("Works");
  }
}
