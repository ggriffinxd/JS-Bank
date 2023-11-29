const Deposit = require("./Deposit.js")
const Installment = require("./Installment.js")


module.exports = class Loan extends Deposit{
  static #interestFees = 1.07

  constructor(value,installments){
    super(value)
    this.installments = []

    for (let i = 0; i <= installments; i++) {
      this.installments.push(new Installment(this.installmentsWithFees(value,installments)),i)
    }
  }

  static get interestFees(){
    return this.#interestFees
  }

  static set interestFees(value){
    return Loan.#interestFees = 1+(value/100)
  }

  installmentsWithFees(value,installments){
    return (value * Loan.#interestFees)/installments
  }
}