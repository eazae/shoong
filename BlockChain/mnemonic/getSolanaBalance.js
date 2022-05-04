const solanaWeb3 = require('@solana/web3.js')
   
// test 주소
const address = new solanaWeb3.PublicKey('CqKfJPQFRn6sSN2zWbKUckR68XPFYSDY42D2grecCwr1')
   

   // 잔액조회하기(테스트 devnet)
const getSolanaBalance = async () => {
        const solana = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),
        'confirmed');
        console.log(`잔액조회 ${await solana.getBalance(address)}`);
}

getSolanaBalance()