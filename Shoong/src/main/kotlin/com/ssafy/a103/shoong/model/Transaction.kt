package com.ssafy.a103.shoong.model

import com.querydsl.core.annotations.QueryEntity
import lombok.Getter
import lombok.Setter
import org.hibernate.annotations.Where
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import javax.persistence.Entity

@Getter
@Setter
@Entity
@QueryEntity
@Document(collection = "Transaction")
@Where(clause = "deletedAt IS NULL")
class Transaction: BaseModel() {

    @Field("transaction_gasprice")
    var transaction_gasprice: Double = 0.0

    @Field("transaction_gas")
    var transaction_gas: Double = 0.0

    @Field("transaction_sender_user_id")
    var transaction_sender_user_id: String = ""

    @Field("transaction_receiver_user_id")
    var transaction_receiver_user_id: String = ""

    @Field("transaction_value")
    var transaction_value: Double = 0.0

    @Field("transaction_memo")
    var transaction_memo: String = ""

    @Field("transaction_coin_id")
    var transaction_coin_id: String = ""
}