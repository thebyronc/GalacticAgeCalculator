export class Solar {
  constructor(yearBorn, monthBorn, dayBorn) {
    this.yearBorn = yearBorn;
    this.monthBorn = monthBorn;
    this.dayBorn = dayBorn;
  }

  convertYearToSeconds() {
    let date = new Date();
    let years = date.getFullYear() - this.yearBorn;
    let seconds = Date.UTC(1971)/1000;
    return seconds * years;
  }
  checkError() {
    $(".errorCode").text("Works");
  }
}
