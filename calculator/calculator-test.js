
it('should calculate the monthly rate', function () {
  // initialize values object with amount, years, rate
  const values = {
    amount: 20000, 
    years: 5, 
    rate: 0.9
  }; 
  expect(calculateMonthlyPayment(values)).toEqual('341.01'); 
});

it("should return a result with 2 decimal places", function() {
  // initialize values object with amount, years, rate
  const values = {
    amount: 100000, 
    years: 6, 
    rate: 0.9
  }; 
  expect(calculateMonthlyPayment(values)).toEqual('1427.25'); 
});

it('should not return a result with 3 decimal places', function() {
  // initialize values obj with amount, yeares, rate
  const values = {
    amount: 250000, 
    years: 30, 
    rate: 3.5
  }; 
  // expect 
  expect(calculateMonthlyPayment(values)).not.toEqual('1122.605'); 
})

it('should return NaN', function() {
  // initialize values obj with amount, yeares, rate
  const values = {
    amount: null, 
    years: 0, 
    rate: 3.5
  }; 
  // expect 
  expect(calculateMonthlyPayment(values)).toBe('NaN'); 
})