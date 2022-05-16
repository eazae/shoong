package com.ssafy.a103.shoong.requestBody

import io.swagger.annotations.ApiModel

@ApiModel("CertificationRequestBody")
data class CertificationRequestBody (
        var user_password: String
    )