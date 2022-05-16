package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("UserUpdatePasswordRequestBody")
data class UserUpdatePasswordRequestBody (
        var user_password: String
        )