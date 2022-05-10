const { default: axios } = require('axios');
const Web3 = require('web3');

const API_KEY = 'UM43AKX746A62RU5YFTUGQPX23PD3INAYG'
const URL = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${API_KEY}`

// 가스비 세팅 해주기
const setGas = async () => {
    const result = await axios(URL)
    const {SafeGasPrice, ProposeGasPrice, FastGasPrice,
    suggestBaseFee} = result.data.result

    console.log(`low gas fee ${SafeGasPrice} Gwei`)
    console.log(`recommend gas fee ${ProposeGasPrice} Gwei`)
    console.log(`fast gas fee ${FastGasPrice} Gwei`)
    return [SafeGasPrice, ProposeGasPrice, FastGasPrice]
}

// 가스비에 따른 소요시간 알려주기

const sendTime = async (gas) =>{
    const convertGas = Web3.utils.toWei(`${gas}`,'gwei')
    const TIME_URL = `https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=${convertGas}&apikey=${API_KEY}`

    const result = await axios(TIME_URL)
    const second = result.data.result
    return second
}