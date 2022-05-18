```
npm install bip39
npm install ethereumjs-wallet
npm install @solana/web3
npm install ed25519-hd-key
npm install web3
npm install ethereumjs-tx
```

```javascript
createMnemoic : 니모닉키(영어 12구문)을 생성합니다.
ethConvert: 이더리움 코인,토큰 단위 바꾸기
EtherTokenTransfer: 이더리움 네트워크 기반의 토큰을 보냅니다.
EtherTransfer: 이더리움을 보냅니다
ethTokenContract: 이더리움 토큰 정보
getEtherBalance : 이더리움 네트워크 기반의 잔고를 조회합니다.
getPrice: 현재 시세 보기(기본 원화)
getSolanaBalance: 솔라나 네트워크 기반의 잔고를 조회합니다.
getTransaction: 트랜잭션 리스트 불러오기
getWalletKey : 니모닉키로 이더리움 지갑주소를 가져옵니다.
setGasFee: 가스비용3단계 구하기, 입력된 가스,코인,토큰 단위 바꿔주기 
getSolanaKey : 니모닉키로 솔라나 지갑주소를 가져옵니다. 
solanaTransfer: 솔라나 보내기
solConvert: 솔라나 단위 바꾸기

```

```
ethConverter.js
 - getEth(입력값) 입력값을 wei로 바꿉니다
 - getToken(입력값,토큰단위) 입력값을 토큰단위로 바꿉니다.

EtherTokenTransfer.js
 - ethereumToenTransfer(지갑주소,개인키,보내는주소,토큰컨트랙트주소,토큰값,가스값) 토큰 전송

EtherTransfer.js
 - ethereumTransfer(지갑주소,개인키,보내는주소,이더리움값,가스값) 이더리움 전송

ethTokenContract.js
 - 토큰 정보 (이름, 네트워크, 컨트랙트 주소, 단위)

getEtherBalance.js
 - getEthBalance(지갑주소) 이더리움 조회
 - getTokenBalance(지갑주소,토큰컨트랙트주소,토큰단위) 토큰 조회

getPrice.js
 - getPrice(코인이름, 화폐) ex) 'solana', 'usd'
 - 코인, 토큰 가격 조회

getSolanaBalance.js
 -getSolanaBalance(지갑주소) 솔라나 조회

getSolanaKey.js
-getSolanaKey(니모닉, 지갑번호('default=0')) 솔라나 키생성
	return [공개키(string), 비밀키(Uint8Array(64))] 
 
getTransaction.js
 - 트랜잭션 리스트 불러오기
 - getTrx(주소), 
 - getTokenTrx(주소, 토큰컨트랙트주소), 
 - solTrx(주소) //메인넷 한정
 
 getWalletKey.js 
 -getWalletKey(니모닉, 지갑번호('default=0')) 지갑 주소생성
 	return[공개키, 비밀키] 
 	
 setGasFee.js
 -setGas() 최적화된 가스값조회
  return [로우,미들,하이]
 -sendTime(gas) 가스값에 따른 소요시간 알려주기
 
 SolanaTransfer.js
 -getMykey(비밀키) 비밀키로 솔라나 키페어 가져오기
 -solanaTransfer(키페어, 보내는주소, 솔라나값) 보내는 주소로 솔라나 전송
 
 solConverter.js
 -solToLamport(값) 솔라나를 람포트단위로 변경
 -convertSol(값) 람포트를 솔라나단위로 변경

```

