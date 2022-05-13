package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("UserJoinRequestBody")
data class UserJoinRequestBody (
    // TODO 필요한 데이터 추가해서 쓰기
    var user_phone_number: String,
    var user_email: String,
    var user_password: String,
    var user_nickname: String,
)