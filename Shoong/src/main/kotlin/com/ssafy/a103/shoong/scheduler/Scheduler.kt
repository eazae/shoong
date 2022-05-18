package com.ssafy.a103.shoong.scheduler

import com.ssafy.a103.shoong.model.GasFee
import com.ssafy.a103.shoong.responseBody.GasFeeResponseBody
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class Scheduler {

    @Scheduled(fixedDelay = 1000*60*3 /*3분*/)
    fun updateGasFee() {
        println("update Gas Fee")
        val response = callAPI()
        val gasFee = makeGasFee(response)
        savegasFee(gasFee)
    }

    // TODO API 호출
    fun callAPI(): GasFeeResponseBody{
        return GasFeeResponseBody()
    }

    // TODO response에서 GasFee 모델 객체 생성
    fun makeGasFee(response: GasFeeResponseBody): GasFee = GasFee()

    // TODO 생성된 GasFee 모델 객체 DB에 저장
    fun savegasFee(gasFee: GasFee){}
}