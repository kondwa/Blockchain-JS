const {Blockchain,Transaction} = require('./blockchain')

let mileCoin = new Blockchain()

mileCoin.createTransaction(new Transaction('address1','address2',100))
mileCoin.createTransaction(new Transaction('address2','address1',50))

console.log("Starting miner...")
mileCoin.minePendingTransactions('mile-address')
console.log("Balance of mile's address: "+mileCoin.getBalanceOfAddress('mile-address'))

console.log("Starting miner again...")
mileCoin.minePendingTransactions('mile-address')
console.log("Balance of mile's address: " + mileCoin.getBalanceOfAddress('mile-address'))