module.exports = class Deposit {
  #dateCreate

  constructor(value){
    this.value = value
    this.#dateCreate = Date.now()
  }
}