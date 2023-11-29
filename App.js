const Deposit = require("./entities/Deposit.js")
const Loan = require("./entities/Loan.js")
const Transfer = require("./entities/Transfer.js")
const User = require("./entities/User.js")

module.exports = class App{
  static #usersList = []

  static createUser(name,email){
    if(!(App.findUser(email))){
      return this.#usersList.push(new User(name,email))
    }else{
      console.log("Usuário já cadastrado!")
    }
  }

  static findUser(email){
    const user = this.#usersList.find(user => user.email === email)

    return user ?? null
  }

  static depositInAccount(email,value){
    const user = App.findUser(email)
    if(user){
      const deposit = new Deposit(value);
      return user.account.newDeposit(deposit)
    }
    
  }

  static transferInAccount(fromUserEmail,toUserEmail,value){
    const userFrom = App.findUser(fromUserEmail)
    const userTo = App.findUser(toUserEmail)
    
    if(userFrom && userTo){
      const transfer = new Transfer(userFrom,userTo,value)
      userFrom.account.newTransfer(transfer)
      userTo.account.newTransfer(transfer)
    }
    
  }

  static loanInAccount(email,value,portion){
    const user = this.findUser(email)
    
    if(user){
      const loan = new Loan(value,portion)
      user.account.newLoan(loan)
    }
  }

  static swapLoanFee(newValue){
    return Loan.interestFess = 1+(newValue/100)
  }
}