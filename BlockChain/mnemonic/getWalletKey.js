// import pkg from 'ethereumjs-wallet';
const pkg = require('ethereumjs-wallet');
// import bip39 from 'bip39';
const bip39 = require('bip39');


const {hdkey} = pkg;
// const mnemonicKey = null
const mnemonicKey = 'alter silver general theme fashion business width topple warfare canoe pledge satoshi improve balcony clump action donate people'

let walletNumber = 0

// 니모닉키를 이용해서 지갑을 생성합니다.
const getWalletKey = async() =>{
    const seed = await bip39.mnemonicToSeed(mnemonicKey)
    const rootKey = hdkey.fromMasterSeed(seed);
    const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0");

    // 니모닉키를 이용한 기본주소
    // deriveChild값에 따라서 추가로 지갑 계속 생성가능 
    const childKey = hardenedKey.deriveChild(walletNumber);

    const wallet = childKey.getWallet();
    // 지갑 주소
    const address = wallet.getAddressString()

    // 개인키 니모닉키와 함께 **유출 금지**
    const privateKey = wallet.getPrivateKeyString();

    console.log(`지갑주소 : ${address}`)
    console.log(`!!개인키!! : ${privateKey}`)
}

getWalletKey()