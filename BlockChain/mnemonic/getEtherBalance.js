// import web3 from 'web3';
const Web3 = require('web3');


// test address
const address= '0xc1b13D6A6ade2d587f134c015109D9fA43f01445'

const getEtherBalance = ()=> {
  // 이더 잔액 조회
  let minABI = [
      // balanceOf
      {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
      }];

  // 싸피 네트워크
  // const web3 = new Web3('http://20.196.209.2:8545');

  // goer 네트워크
  const web3 = new Web3('https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9');
  

  //ssafy코인 컨트랙트
  // const contractAddr = "0x6C927304104cdaa5a8b3691E0ADE8a3ded41a333";

  //goer 테스트 코인 컨트랙트
  const contractAddr = "0xe4E81Fa6B16327D4B78CFEB83AAdE04bA7075165"; // zrx
  // const contractAddr = "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C"; //usdc
  // const contractAddr = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60"; //Dai
  // const contractAddr = "0x70cBa46d2e933030E2f274AE58c951C800548AeF"; //bat


  // 토큰 잔액조회
  const contractInstance = new web3.eth.Contract(minABI, contractAddr);
  const contractMethod = contractInstance.methods.balanceOf(address).call().then(console.log) //ex zrx 50 == 50,000,000,000,000,000,000 (콘솔단위18)

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
    
}

getEtherBalance()