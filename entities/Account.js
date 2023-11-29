module.exports = class Account{
  #balance
  #idAccount
  static #id = 1

  constructor(){
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
    this.#idAccount = Account.#id
    Account.#id++;
  }

  newDeposit(deposit){
    this.#balance += deposit.value
    return this.deposits.push(deposit)
  }

  newLoan(loan){
    this.#balance += loan.value
    return this.loans.push(loan)
  }

  newTransfer(transfer){
    if(transfer.toUser.idAccount === this.idAccount){
      this.newDeposit(transfer.value)
      return this.transfers.push(transfer)
    }else{
      this.#balance -= transfer.value
      return this.transfers.push(transfer)
    }
  }
  get idAccount(){
    return this.#idAccount
  }
  get balance(){
    return this.#balance
  }
}