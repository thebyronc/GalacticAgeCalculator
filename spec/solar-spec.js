import { Solar } from './../js/solar.js';

describe('Solar', function() {
  let solar;
  beforeEach(function() {
    solar = new Solar(1986, 6, 1);
  });
  it('convertYearToSeconds', function() {
    expect(1009843200).toEqual(solar.convertYearToSeconds());
  });

  it('compareDates', function() {
    let dateA = new Solar(1986, 6, 1);
    let dateb = new Solar(1986, 6, 1);
    expect(0).toEqual(solar.compareDates(dateA,dateb));
  });
});
