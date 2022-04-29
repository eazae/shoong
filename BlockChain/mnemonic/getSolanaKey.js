// import bip39 from 'bip39';
const bip39 = require('bip39');
// import ed25519 from 'ed25519-hd-key';
const ed25519 = require('ed25519-hd-key');
// import * as solanaWeb3 from '@solana/web3.js';
const solanaWeb3 = require('@solana/web3.js')

// temp_key
const mnemonicKey = 'pottery mistake dry purchase limit spawn consider steak wagon fashion feed edit student work lake you boss lecture march remember toddler drop drop frog'

// 니모닉키를 이용해서 지갑을 생성합니다.
const getWalletKey = async() =>{
    const seed = await bip39.mnemonicToSeed(mnemonicKey)
    const derivePath = "m/44'/501'/0'/0'";
    const derivedSeed = ed25519.derivePath(derivePath,seed.toString('hex')).key
    const solanaKey = solanaWeb3.Keypair.fromSeed(derivedSeed);

    // 지갑주소 publickey
    solanaWallet = solanaKey.publicKey.toBase58()

    console.log(`지갑주소 ${solanaWallet}`);


    // 잔액조회하기(테스트 devnet)
    const getSolanaBalance = async () => {
    const solana = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),
    'confirmed');
    console.log(`잔액조회 ${await solana.getBalance(solanaKey.publicKey)}`);


    // 테스트넷 토큰받기
    // var fromAirdropSignature = await solana.requestAirdrop(
    //     solanaKey.publicKey,
    //     solanaWeb3.LAMPORTS_PER_SOL, // lamports
    //   );
    // await solana.confirmTransaction(fromAirdropSignature);
    // console.log(await solana.getBalance(solanaWallet.publicKey));
  }


  getSolanaBalance()
}



getWalletKey()


