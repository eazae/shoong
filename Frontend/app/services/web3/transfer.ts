import Web3 from 'web3';
// const Web3 = require('web3');
// 싸피 네트워크
// const web3 = new Web3('http://20.196.209.2:8545');
// goer 네트워크
const web3 = new Web3('https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9');

/// test

///
export const ethereumTransfer = async (
  address: string,
  privateKey: string,
  toAddress: any,
  inputEth: any,
  gasFee: any
) => {
  const accountNonce = await web3.eth.getTransactionCount(address);
  const block = await web3.eth.getBlock('latest');
  const maxGas = block.gasLimit / block.transactions.length;
  const maxGasPrice = Math.round(maxGas);
  console.log('맥스가스가격', maxGasPrice);

  // ether 송금
  const txObject = {
    nonce: web3.utils.toHex(accountNonce),
    gasLimit: 100000,
    gasPrice: web3.utils.toWei(`${gasFee}`, 'gwei'),
    to: toAddress,
    value: getEth(inputEth),
  };
  const tx = await web3.eth.accounts.signTransaction(txObject, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(tx.rawTransaction);
  console.log(receipt);

  return receipt.transactionHash;
};
// ethereumTransfer(address, privateKey, toAddress, inputEth, gasFee);

const getEth = (num: any) => {
  const inputEth = Web3.utils.toWei(`${num}`, 'ether');
  const convertEth = Web3.utils.toHex(inputEth);
  return convertEth;
};

// 입력된 토큰값 단위 wei로 바꾸기
const getToken = (num: any, decimals: any) => {
  let inputToken;
  switch (decimals) {
    case 18:
      inputToken = Web3.utils.toWei(`${num}`, 'ether');
      break;
    case 6:
      inputToken = Web3.utils.toWei(`${num}`, 'Mwei');
      break;
  }
  return inputToken;
};

export const ethereumTokenTransfer = async (
  address: any,
  privateKey: string,
  toAddress: any,
  type: string,
  inputToken: any,
  gasFee: any
) => {
  // 토큰 보내기

  let minABI = [
    // transfer
    {
      constant: false,
      inputs: [
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      type: 'function',
    },
  ];
  let contractAddr;
  if (type === 'decentraland') {
    contractAddr = '0xB03aD6059FA34670B13DDa4ef3aE3De224d1c13E';
  } else if (type === 'tether') {
    contractAddr = '0x509Ee0d083DdF8AC028f2a56731412edD63223B9';
  }
  // 토큰 트랜스퍼 생성
  const contract = new web3.eth.Contract(minABI, contractAddr, { from: address });
  const data = contract.methods.transfer(toAddress, inputToken).encodeABI();
  const block = await web3.eth.getBlock('latest');
  const maxGas = block.gasLimit / block.transactions.length;
  const maxGasPrice = Math.round(maxGas);
  console.log(maxGasPrice, '최대가스가격');

  const txObject = {
    gasLimit: 100000,
    gasPrice: web3.utils.toWei(`${gasFee}`, 'gwei'),
    to: contractAddr,
    data: data,
    from: address,
  };
  const tx = await web3.eth.accounts.signTransaction(txObject, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(tx.rawTransaction);
  console.log(receipt);
  return receipt.transactionHash;
};
