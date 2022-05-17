package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("GetByNickNameRequestBody")
data class GetByNickNameRequestBody (
            var user_nickname: String,
        )