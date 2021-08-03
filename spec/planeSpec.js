'use strict'

describe('Plane', () => {
  let plane;
  let airport;
  beforeEach(() => {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });

  it('can land a plane at an airport', () => {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});