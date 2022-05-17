package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("TransactionCancelRequestBody")
data class TransactionCancelRequestBody (
    var transaction_id: String
)