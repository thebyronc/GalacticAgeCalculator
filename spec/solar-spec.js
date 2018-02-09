import { Solar } from './../js/solar.js';

describe('Solar', function() {
  let solar;
  beforeEach(function() {
    solar = new Solar(1986, 6, 1);
  });
  it('checkColumnsForSameNumber', function() {
    expect(solar.convertYearToSeconds(1)).toEqual(123);
  });
});
