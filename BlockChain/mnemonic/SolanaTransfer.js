import bip39 from 'bip39';
// const bip39 = require('bip39');
import ed25519 from 'ed25519-hd-key';
// const ed25519 = require('ed25519-hd-key');
import * as solanaWeb3 from '@solana/web3.js';
import getSolanaKey from './getSolanaKey.js';
// const solanaWeb3 = require('@solana/web3.js')

// temp_key
//지갑주소 CqKfJPQFRn6sSN2zWbKUckR68XPFYSDY42D2grecCwr1
const mnemonicKey = 'pottery mistake dry purchase limit spawn consider steak wagon fashion feed edit student work lake you boss lecture march remember toddler drop drop frog'


// 보내는사람의 지갑이나 비밀키
let solanaWallet = ''
let mySecretkey = '209,117,221,122,155,103,135,251,136,43,96,29,128,127,13,88,168,242,72,100,15,177,35,241,245,11,108,189,32,196,43,50,175,209,136,202,129,192,43,124,37,102,229,173,58,153,15,218,54,214,94,45,187,49,58,0,193,32,197,209,118,36,234,122'
// 받는 상대방 주소
let toAddress = 'DtfCFfHLwf4NHi5B3G9STSnU8GVRh3iaSymCAzK2aLJc'

const getMyKey = async(mySecretkey) =>{
    // secretkey를 솔라나 keypair 로 변환하기
    let mySecretKeyArray = mySecretkey.toString().split(',')
    let toSolanaKey = new Uint8Array(mySecretKeyArray)
    let myKeypair = solanaWeb3.Keypair.fromSecretKey(toSolanaKey)

    return myKeypair
}

// 솔라나 전송하기
const solanaTransfer = async (myKeypair, toAddress,sol) => {
    const solana = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),
        'confirmed');
    let recentBlockhash = await solana.getRecentBlockhash();

    // 상대방 주소 변환
    const toPublickey = new solanaWeb3.PublicKey(toAddress)




    const transferTransaction = new solanaWeb3.Transaction({
        recentBlockhash: recentBlockhash.blockhash, 
        feePayer: myKeypair.publicKey
        })
    .add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: myKeypair.publicKey,
            toPubkey: toPublickey,
            lamports: sol //1solana = 1,000,000,000
        }))
    const end = await solanaWeb3.sendAndConfirmTransaction(solana, transferTransaction, [myKeypair])

    console.log(end,'트랜잭션 결과')
    console.log(`보낸사람 잔액조회 ${await solana.getBalance(myKeypair.publicKey)}`); 
    console.log(`받은 사람 잔액조회 ${await solana.getBalance(toPublickey)}`);
}

const myKeypair = await getMyKey(mySecretkey)
solanaTransfer(myKeypair,toAddress,1)

export {getMyKey, solanaTransfer}

