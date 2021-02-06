// Fahrenheit to Celsius Test

describe('fahrenheit to celsius', function() {
    // it statement 
    it('should return celsius values', function() {
        // expect function
        expect(getCelsius([250, 32])).toEqual(['121.11', '0.00']); 
    });
}); 