package com.ssafy.a103.shoong.model

import com.querydsl.core.annotations.QueryEntity
import lombok.Getter
import lombok.Setter
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import javax.persistence.Entity

@Getter
@Setter
@Entity
@QueryEntity
@Document(collection = "Coin")
class Coin : BaseModel() {

    @Field("coin_name")
    var coin_name: String = ""

    @Field("coin_KRW")
    var coin_KRW: Long = 0

    @Field("coin_USD")
    var coin_USD: Long = 0
}