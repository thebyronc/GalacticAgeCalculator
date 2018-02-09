import { Solar } from './../js/solar.js';

describe('Solar', function() {
  let solar;
  beforeEach(function() {
    solar = new Solar(1986, 6, 1);
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
    let currentDate = new Solar(2018, 1, 9);
    expect(31).toEqual(solar.getAgeOnEarth(currentDate));
  });

  it('getAgeOnMercury', function() {
    let currentDate = new Solar(2018, 1, 9);
    expect(131).toEqual(solar.getAgeOnMercury(currentDate));
  });
  it('getAgeOnVenus', function() {
    let currentDate = new Solar(2018, 1, 9);
    expect(51).toEqual(solar.getAgeOnVenus(currentDate));
  });
});
