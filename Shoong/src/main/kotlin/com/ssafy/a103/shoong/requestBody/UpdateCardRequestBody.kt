package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel


@ApiModel("UpdateCardRequestBody")
data class UpdateCardRequestBody (
            var card_id: String,
            var card_name: String,
            var card_profile_image: String
        )