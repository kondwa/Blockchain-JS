const {Blockchain,Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

let mileCoin = new Blockchain()

const myKey = ec.keyFromPrivate('661d8981c1d97a9ca0cfd08fe2dab8ed66026ff30ac3af6e4514052cf17944e8')
const myWalletAddress = myKey.getPublic('hex')

const tx1 = new Transaction(myWalletAddress,'public key goes here',10)

tx1.signTransaction(myKey)

mileCoin.addTransaction(tx1)

console.log("Starting miner...")
mileCoin.minePendingTransactions(myWalletAddress)
mileCoin.minePendingTransactions(myWalletAddress)
console.log("Balance of mile's address: "+mileCoin.getBalanceOfAddress(myWalletAddress))