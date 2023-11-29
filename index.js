const App = require("./App.js")

App.createUser("Gabriel","gabreeu@email.com")
App.createUser("Alemao","alemao@email.com")
App.createUser("David","david@email.com")
App.createUser("Edgar","edgar@email.com")
App.createUser("Kevin","kevin@email.com")

App.depositInAccount("gabreeu@email.com",16000)

App.transferInAccount("gabreeu@email.com","alemao@email.com",20)

App.swapLoanFee(10)

App.loanInAccount("kevin@email.com",100000,20)

console.log(App.findUser("gabreeu@email.com"))
console.log(App.findUser("gabreeu@email.com").account)
console.log(App.findUser("alemao@email.com"))
console.log(App.findUser("alemao@email.com").account)
console.log(App.findUser("kevin@email.com"))
console.log(App.findUser("kevin@email.com").account.loans[0].installments)