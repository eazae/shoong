import axios from "axios";

const getPrice = async(coin, currency='krw') =>{
    const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`

    const result = await axios(URL)
    const {data} = result

    return data
}

// console.log(await getPrice('ethereum'))

export default getPrice