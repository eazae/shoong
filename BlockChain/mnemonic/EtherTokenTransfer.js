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
const inputToken = '10000000000000000' // getToken()타입:string
const gasFee = null

//ssafy코인 컨트랙트
// const contractAddr = "0x6C927304104cdaa5a8b3691E0ADE8a3ded41a333";
//goer 테스트 코인 컨트랙트
// const contractAddr = "0xe4E81Fa6B16327D4B78CFEB83AAdE04bA7075165"; // zrx
// const contractAddr = "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C"; //usdc
// const contractAddr = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60"; //Dai
const contractAddr = "0x70cBa46d2e933030E2f274AE58c951C800548AeF"; //bat


const ethereumTokenTransfer = async(address, privateKey,toAddress,contractAddr,inputToken,gasFee) =>{
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

    // 토큰 트랜스퍼 생성
    const contract = new web3.eth.Contract(minABI, contractAddr,{from:address});
    const data = contract.methods.transfer(toAddress, inputToken).encodeABI()
    const block = await web3.eth.getBlock("latest");
    const maxGas = block.gasLimit/block.transactions.length;
    const maxGasPrice = Math.round(maxGas)
    console.log(maxGasPrice,'최대가스가격')

    const txObject = {
        gasLimit: 100000,
        gasPrice: web3.utils.toWei(`${gasFee}`,'gwei'),
        to: contractAddr,
        data: data,
        from: address
    }
    const tx = await web3.eth.accounts.signTransaction(txObject,privateKey)
    const receipt = await web3.eth.sendSignedTransaction(tx.rawTransaction)
    console.log (receipt)
    return receipt.transactionHash

}

export default ethereumTokenTransfer