// import web3 from 'web3';
const Web3 = require('web3');

// import tx = from 'ethereum-tx';
const Tx = require('ethereumjs-tx')


const ethereumTransfer = async() =>{

    // 지갑 주소 test용
    const address= '0xc1b13D6A6ade2d587f134c015109D9fA43f01445'
    const privateKey ='f75de4b52af767d0fd647f3514f072a5c5a4b7893e9f5a3d50de8af3e725b001'
    const privateKeys = Buffer.from(privateKey,'hex')

    console.log(`지갑주소 : ${address}`)
    console.log(`!!개인키!! : ${privateKey}`)

    // 싸피 네트워크
    // const web3 = new Web3('http://20.196.209.2:8545');

    // goer 네트워크
    const web3 = new Web3('https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9');


    // ether 잔액 조회
    web3.eth.getBalance(address).then(console.log)

    // 단위 나누기
    web3.eth.getBalance(address, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          console.log(web3.utils.fromWei(result, "ether") + " ETH")
        }
      })
    

    // ether 송금

    // 받기 테스트 주소
    const toAddress = '0xc1b13D6A6ade2d587f134c015109D9fA43f01445'
    const accountNonce = await web3.eth.getTransactionCount(address)
    console.log(web3.eth.getTransactionCount(address).then(console.log))

    web3.eth.getTransactionCount(address, (err, txCount) => {
    const txObject = {
        nonce:    web3.utils.toHex(accountNonce),
        gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: toAddress,
        value :  '0x2386f26fc10000' //0.01이더 전송 to_hex
    };
    
    const tx = new Tx.Transaction(txObject,{chain:'goerli'});
    tx.sign(privateKeys);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    
    web3.eth.sendSignedTransaction(raw).on('receipt',console.log);

    //     .once('transactionHash', (hash) => {
    //         // console.info('transactionHash', 'etherscan.io/tx/' + hash);
    //         console.log('보냈어요')
    //         console.log(hash)
    //     })
    //     .once('receipt', (receipt) => {
    //         console.info('receipt', receipt);
    //     }).on('error', console.error);


    });


}

ethereumTransfer()