import Web3 from "web3";

// 입력된 이더값 wei단위로 바꾸기
const getEth = (num) =>{
    const inputEth = Web3.utils.toWei(`${num}`, 'ether')
    const convertEth = Web3.utils.toHex(inputEth)
    return convertEth
}

// 입력된 토큰값 단위 wei로 바꾸기
const getToken = (num,decimals) =>{
    let inputToken
    switch(decimals){
        case 18:
            inputToken = Web3.utils.toWei(`${num}`, 'ether')
            break;
        case 6:
            inputToken = Web3.utils.toWei(`${num}`, 'Mwei')
            break;
    }
    return inputToken
}

export {getEth, getToken} 