package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("UserLoginRequestBody")
data class UserLoginRequestBody (
        var user_email: String,
        var user_password: String
        )