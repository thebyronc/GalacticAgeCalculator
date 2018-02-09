import { Solar } from './../js/solar.js';

describe('Solar', function() {
  let solar;
  beforeEach(function() {
    solar = new Solar(1986, 6, 1);
  });
  it('convertYearToSeconds age 32', function() {
    expect(1009152000).toEqual(solar.convertYearToSeconds());
  });
});
