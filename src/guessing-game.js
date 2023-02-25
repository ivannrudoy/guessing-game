const calcMid = (start, end) => start + Math.ceil((end - start) / 2);

class GuessingGame {
  #min;
  #max;
  #mid;

  setRange(min, max) {
    this.#min = min;
    this.#max = max;
  }

  guess() {
    this.#mid = calcMid(this.#min, this.#max);
    return this.#mid;
  }

  lower() {
    this.#max = this.#mid;
  }

  greater() {
    this.#min = this.#mid;
  }
}

module.exports = GuessingGame;
