package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("GetByPhoneRequestBody")
data class GetByPhoneRequestBody (
            var user_phone: String,
        )