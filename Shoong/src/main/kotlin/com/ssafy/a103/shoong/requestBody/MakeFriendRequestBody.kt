package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("MakeFriendRequestBody")
data class MakeFriendRequestBody(
        var user_email:String,
        var user_nickname:String,
        var user_phone_number: String
)