// import web3 from 'web3';
const Web3 = require('web3');


const ethereumTokenTransfer = async() =>{
    // 지갑 주소 test용
    const address= '0xc1b13D6A6ade2d587f134c015109D9fA43f01445'
    const privateKey ='f75de4b52af767d0fd647f3514f072a5c5a4b7893e9f5a3d50de8af3e725b001'

    console.log(`지갑주소 : ${address}`)
    console.log(`!!개인키!! : ${privateKey}`)

    // 토큰 보내기 
    let minABI = [
        // transfer
        {
            "constant": false,
            "inputs": [
            {
            "name": "_to",
            "type": "address"
            },
            {
            "name": "_value",
            "type": "uint256"
            }
            ],
            "name": "transfer",
            "outputs": [
            {
            "name": "",
            "type": "bool"
            }
            ],
            "type": "function"
        }
        ];

    // 싸피 네트워크
    // const web3 = new Web3('http://20.196.209.2:8545');

    // goer 네트워크
    const web3 = new Web3('https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9');
    

    //ssafy코인 컨트랙트
    // const contractAddr = "0x6C927304104cdaa5a8b3691E0ADE8a3ded41a333";

    //goer 테스트 코인 컨트랙트
    // const contractAddr = "0xe4E81Fa6B16327D4B78CFEB83AAdE04bA7075165"; // zrx
    // const contractAddr = "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C"; //usdc
    // const contractAddr = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60"; //Dai
    const contractAddr = "0x70cBa46d2e933030E2f274AE58c951C800548AeF"; //bat

    // 토큰 트랜스퍼 생성
    // 받기 테스트 주소
    const toAddress = '0xc1b13D6A6ade2d587f134c015109D9fA43f01445'

    let contract = new web3.eth.Contract(minABI, contractAddr,{from:address});
    let data = contract.methods.transfer(toAddress, web3.utils.toBN('ex)300000000000000000')).encodeABI()
    
    // zx 1,000,000,000,000,000,000
    // usdc 1,000,000
    //dai 1,000,000,000,000,000,000
    //bat 1,000,000,000,000,000,000

    function sendErcToken() {
        let txObj = {
            "gasLimit": web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
            "gasPrice": web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            "to": contractAddr,
            "value": "0x00",
            "data": data,
            "from": address
        }

        web3.eth.accounts.signTransaction(txObj, privateKey, (err, signedTx) => {
            if (err) {
                return callback(err)
            } else {
                console.log(signedTx)
                return web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, res) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(res)
                        console.log('성공')
                    }
                })
            }
        })
    }
    sendErcToken()
}

ethereumTokenTransfer()