const _ = require('lodash');

module.exports = class Calculator {
  constructor(items) {
    // Filtrujemy elementy tablicy, zostawiając tylko liczby
    this.numbers = _.filter(items, (item, index) => {
      if (!_.isNumber(item)) {
        console.log(`Błędny typ elementu: "${item}" na pozycji ${index + 1}`);
        return false;  // Pomija nieliczbowe elementy
      }
      return true;  // Zachowuje liczby
    });
  }

  // Metoda sumowania
  sum() {
    const result = _.reduce(this.numbers, (acc, num) => acc + num, 0);
    console.log(`Suma: ${result}`);
    return result;
  }

  // Metoda odejmowania
  subtract() {
    if (this.numbers.length === 0) {
      console.log("Brak liczb do odjęcia");
      return 0;
    }
    const result = _.reduce(this.numbers, (acc, num) => acc - num);
    console.log(`Różnica: ${result}`);
    return result;
  }
}
