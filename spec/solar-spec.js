import { Solar } from './../js/solar.js';

describe('Solar', function() {
  let solar;
  let currentDate;
  beforeEach(function() {
    solar = new Solar(1986, 6, 1, 100);
    currentDate = new Solar(2018, 1, 9, 100);
  });

  it('convertYearToSeconds', function() {
    expect(520560000).toEqual(solar.convertYearToSeconds());
  });

  it('compareDates', function() {
    let dateA = new Solar(1986, 6, 1);
    let dateb = new Solar(1986, 6, 1);
    expect(0).toEqual(solar.compareDates(dateA,dateb));
  });

  it('getAgeOnEarth', function() {
    expect(31).toEqual(solar.getAgeOnEarth(currentDate));
  });
  it('getAgeOnMercury', function() {
    expect(131).toEqual(solar.getAgeOnMercury(currentDate));
  });
  it('getAgeOnVenus', function() {
    expect(51).toEqual(solar.getAgeOnVenus(currentDate));
  });
  it('getAgeOnMars', function() {
    expect(16).toEqual(solar.getAgeOnMars(currentDate));
  });
  it('getAgeOnJupiter', function() {
    expect(2).toEqual(solar.getAgeOnJupiter(currentDate));
  });
  it('ageVsLife_checktoseeifolderthanavglife', function() {
    expect(false).toEqual(solar.ageVsLife(currentDate));
  });
  it('getAverageLifeExptancy', function() {
    expect(100).toEqual(solar.getAvgEarth());
    expect(416).toEqual(solar.getAvgMercury());
    expect(161).toEqual(solar.getAvgVenus());
    expect(53).toEqual(solar.getAvgMars());
    expect(8).toEqual(solar.getAvgJupiter());
  });
});
