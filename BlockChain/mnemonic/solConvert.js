// 입력된 솔라나값 lamport로 바꾸기

const solToLamport = (num)=>{
    const lmaport = num * 1000000000
    // LAMPORTS_PER_SOL === 1000000000
    return lmaport
}

// lamport 솔라나 단위로 보기
const convertSol = (num) =>{
    const sol = num/1000000000
    console.log(sol)
    return sol
}

export {solToLamport, convertSol}