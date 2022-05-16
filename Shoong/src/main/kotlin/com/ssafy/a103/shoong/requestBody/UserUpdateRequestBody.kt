package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("UserUpdateRequestBody")
data class UserUpdateRequestBody (
        var user_phone_number: String,
        var user_nickname: String,
        var user_profile_image: String
        )