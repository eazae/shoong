import axios from "axios";
import Web3 from "web3";

const web3 = new Web3('https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9');
const API = 'UM43AKX746A62RU5YFTUGQPX23PD3INAYG'
const ADDRESS = '0x8F9C47e5028B3f7c075de0Eaf9Cf3b613255033c'
const CONTRACTADDRESS = '0x70cBa46d2e933030E2f274AE58c951C800548AeF'

/// main net
// const URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API}`
// const TOKEN_URL =  `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${CONTRACTADDRESS}&address=${ADDRESS}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${API}`


/// goerli testnet
// const GOER_URL = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API}`
// const TOKEN_URL =  `https://api-goerli.etherscan.io/api?module=account&action=tokentx&contractaddress=${CONTRACTADDRESS}&address=${ADDRESS}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${API}`
///

// eth

const getTrx = async(ADDRESS) => {
    const URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API}`

    const res = await axios(URL)
    const {result} = res.data
    return result
}

const getTokenTrx = async(ADDRESS,CONTRACTADDRESS) => {
    const URL =  `https://api-goerli.etherscan.io/api?module=account&action=tokentx&contractaddress=${CONTRACTADDRESS}&address=${ADDRESS}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${API}`

    const res = await axios(URL)
    const {result} = res.data
    return result
}


//sol

// mainnet only
const solTrx = async(ADDRESS)=> {
    const URL = `https://public-api.solscan.io/account/solTransfers?account=${ADDRESS}&offset=0&limit=10`

    const res= await axios(URL)
    const {data} = res.data
    
}

export {getTrx, getTokenTrx, solTrx}
