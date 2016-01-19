describe('triangle', function() {
  it("is false if the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side ", function() {
    expect(triangle(2,2,6)).to.equal(false);
  });
  it("is true if all sides are equal", function() {
    expect(triangle(4,4,4)).to.equal(true);
  });
  it("is true if exactly 2 sides are equal", function() {
    expect(triangle(3,3,5)).to.equal(true);
  });
  it("is true if no sides are equal", function() {
    expect(triangle(2,4,5)).to.equal(true);
  });
  it("is false for a string", function() {
    expect(triangle(NaN,3,4)).to.equal(false);
  })

});
