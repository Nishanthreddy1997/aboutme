function speedConverter(number) {
    valNum = parseFloat(number);
    N = (number )*1.609344;
    return N;
  }
//Added QUnit Test
  QUnit.test("SpeedConverter", function(assert) {
	assert.equal(speedConverter(15), 24.14016, "15 MPH == 24.14016 KPH");
	assert.equal(speedConverter(0), 0, "0 MPH == 0 KPH");
	assert.equal(speedConverter(50), 80.4672, "50 MPH == 80.4672 KPH ");
	assert.equal(speedConverter(5), 8.04672, "5 MPH == 8.04672 KPH");
	assert.equal(speedConverter(500), 804.672, "500 MPH == 804.672 KPH");
 });