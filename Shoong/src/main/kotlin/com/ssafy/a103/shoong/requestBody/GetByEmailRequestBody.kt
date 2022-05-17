package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("GetByEmailRequestBody")
data class GetByEmailRequestBody (
            var user_email: String,
        )