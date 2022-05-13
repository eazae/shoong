package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("DeleteFriendRequestBody")
data class DeleteFriendRequestBody (
        var user_nickname: String,
        )