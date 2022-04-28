// import bip39 from 'bip39'
const bip39 = require('bip39')



let mnemonicKey = null


// 니모닉키를 생성합니다
const getMnemonic = () =>{
    mnemonicKey = bip39.generateMnemonic() 
}


// 올바르게 생성된 니모닉키인지 확인합니다.
const validMnemonic = () =>{
      if(bip39.validateMnemonic(mnemonicKey)){
          console.log('올바른 키입니다.')
      }else{
          console.log('올바른 키가 아닙니다')
      }
}
