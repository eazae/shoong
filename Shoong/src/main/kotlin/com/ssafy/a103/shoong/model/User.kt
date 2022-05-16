package com.ssafy.a103.shoong.model

import com.querydsl.core.annotations.QueryEntity
import lombok.Getter
import lombok.Setter
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.Id

@Getter
@Setter
@Entity
@QueryEntity
@Document(collection = "user")
class User {

    @Id
    var id: String? = ObjectId.get().toString()

    @Field("user_phone_number")
    var user_phone_number: String = ""

    @Field("user_email")
    var user_email: String = ""

    @Field("user_password")
    var user_password: String = ""
        set(value) {
            val passwordEncoder = BCryptPasswordEncoder()
            field = passwordEncoder.encode(value)
        }
    fun comparePassword(user_password:String):Boolean{
        return BCryptPasswordEncoder().matches(user_password,this.user_password)
    }
    @Field("user_nickname")
    var user_nickname: String = ""

    @Field("profile_image")
    var user_profile_image: String = "deafult image url" // URL

    // TODO 바로 해결하기
//     Nested Object 선언
    @Field("cards")
    var cards: List<Card> = mutableListOf()

    @Field("friends")
    var friends: List<Friend> = mutableListOf()

    // Type이 일정하지 않은 가변 Key-Value 오브젝트는 Map으로 선언
//    @Field("dynamicObject")
//    var dynamicObject: Map<String, Any> = mutableMapOf()

    @Field("createdAt")
    var createdAt: LocalDateTime = LocalDateTime.now()

    @Field("updatedAt")
    var updatedAt: LocalDateTime? = null

    @Field("deletedAt")
    var deletedAt: LocalDateTime? = null
}

@Getter
@Setter
@Entity
@QueryEntity
class Card {

    @Id
    var id: String? = ObjectId.get().toString()


    @Field("wallet_name")
    var card_name: String = "" //card_memo

    @Field("wallet_address")
    var card_address: String = ""

    @Field("wallet_profile_image")
    var card_profile_image: String = ""

    @Field("createdAt")
    var createdAt: LocalDateTime = LocalDateTime.now()

    @Field("updatedAt")
    var updatedAt: LocalDateTime? = null

    @Field("deletedAt")
    var deletedAt: LocalDateTime? = null
}

@Getter
@Setter
@Entity
@QueryEntity
class Friend {

    @Field("friend_id")
    var friend_id: String? = null
}