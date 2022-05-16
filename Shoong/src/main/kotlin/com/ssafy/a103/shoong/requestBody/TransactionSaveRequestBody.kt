package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("TransactionSaveRequestBody")
data class TransactionSaveRequestBody (
    var transaction_gasprice: Double,
    var transaction_gas: Double,
    var transaction_sender_user_id: String,
    var transaction_receiver_user_id: String,
    var transaction_value: Double,
    var transaction_memo: String,
    var transaction_coin_id: String
)