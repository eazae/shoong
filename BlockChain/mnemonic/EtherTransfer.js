import Web3 from 'web3';
// const Web3 = require('web3');
// 싸피 네트워크
// const web3 = new Web3('http://20.196.209.2:8545');
// goer 네트워크
const web3 = new Web3('https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9');

/// test
const address= '0xc1b13D6A6ade2d587f134c015109D9fA43f01445'
const privateKey ='0xf75de4b52af767d0fd647f3514f072a5c5a4b7893e9f5a3d50de8af3e725b001'
const toAddress = '0x3ba20130f28232ad75f6a2d4be7ea3164a34c8ce'
const inputEth = 500000
const gasFee = 10

///
const ethereumTransfer = async(address, privateKey, toAddress,inputEth,gasFee) =>{ 
    const accountNonce = await web3.eth.getTransactionCount(address)
    const block = await web3.eth.getBlock("latest");
    const maxGas = block.gasLimit/block.transactions.length;
    const maxGasPrice = Math.round(maxGas)
    console.log('맥스가스가격', maxGasPrice)

    // ether 송금
    const txObject = {
        nonce:  web3.utils.toHex(accountNonce),
        gasLimit: 100000,
        gasPrice: web3.utils.toWei(`${gasFee}`, 'gwei'),
        to: toAddress,
        value : inputEth
    }
    const tx = await web3.eth.accounts.signTransaction(txObject,privateKey)
    const receipt = await web3.eth.sendSignedTransaction(tx.rawTransaction)
    console.log(receipt)

    return receipt.transactionHash


    };
ethereumTransfer(address,privateKey,toAddress,inputEth,gasFee)
export default ethereumTransfer
