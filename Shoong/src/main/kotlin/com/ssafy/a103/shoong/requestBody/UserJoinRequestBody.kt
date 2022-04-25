package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("UserJoinRequestBody")
data class UserJoinRequestBody (
    // TODO 필요한 데이터 추가해서 쓰기
    var id: Int,
    var name: String
)