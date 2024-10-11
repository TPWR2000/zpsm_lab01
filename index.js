const _ = require('lodash');
const Calculator = require('./Calculator.js');

const item1 = new Calculator([1, 2, 3, 4, 5]);
const item2 = new Calculator([1, 'text', 3, {}]);

item1.sum();        // Suma: 15
item1.subtract();   // Różnica: -13

item2.sum();        // Błędny typ: "text" na pozycji 2, Błędny typ: "[object Object]" na pozycji 4, Suma: 4
item2.subtract();   // Różnica: -2
