const Deposit = require("./Deposit.js")


module.exports = class Transfer extends Deposit{
  constructor(fromUser,toUser,value){
    super(value)
    this.fromUser = fromUser
    this.toUser = toUser
  }
}