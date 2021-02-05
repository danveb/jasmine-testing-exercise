
it('should calculate the monthly rate correctly', function () {
  // initialize values object with amount, years, rate
  const values = {
    amount: 2000, 
    years: 5, 
    rate: 1
  }; 
  expect(calculateMonthlyPayment(values)).toEqual('34.19'); 
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