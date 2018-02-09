export class Solar {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  convertYearToSeconds() {
    let date = new Date();
    let years = date.getFullYear() - this.year;
    let seconds = Date.UTC(1970 + years)/1000;
    return seconds;
  }

  compareDates(dateA, dateB) {
    let date = new Date();
    let dateASeconds = Date.UTC(dateA.year,dateA.month,dateA.day)/1000;
    let dateBSeconds = Date.UTC(dateB.year,dateB.month,dateB.day)/1000;

    return Math.abs(dateASeconds - dateBSeconds);
  }
  checkError() {
    $(".errorCode").text("Works");
  }
}
