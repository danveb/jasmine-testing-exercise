// Fahrenheit to Celsius 
// [250, 32, 120] = [121.11, 0, 48.89]
// (32°F − 32) × 5/9 = 0°C

// initialize function, parameter fahrenheit arr
function getCelsius(fahrenheit) {
    // map arr and formula
    return fahrenheit.map(value => ((value - 32) * 5 / 9).toFixed(2)); 
}
