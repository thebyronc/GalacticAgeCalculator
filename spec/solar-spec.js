import { Solar } from './../js/solar.js';

describe('Solar', function() {

  it('checkColumnsForSameNumber', function() {
    let solar = new Solar();
    expect(solar.convertAgeToSeconds(10)).toEqual(123);
  });
});
