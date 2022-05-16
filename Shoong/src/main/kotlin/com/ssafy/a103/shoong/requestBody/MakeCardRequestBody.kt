package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("MakeCardRequestBody")
data class MakeCardRequestBody (
            var card_name: String,
            var card_address: String,
            var card_profile_image: String
        )