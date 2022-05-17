package com.ssafy.a103.shoong.model

import com.querydsl.core.annotations.QueryEntity
import lombok.Getter
import lombok.Setter
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import javax.persistence.Entity

@Getter
@Setter
@Entity
@QueryEntity
@Document(collection = "user")
class User : BaseModel()  {

    @Field("user_phone")
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
}

@Getter
@Setter
@Entity
@QueryEntity
class Card : BaseModel()  {

    @Field("card_name")
    var card_name: String = "" //card_memo

    @Field("card_address")
    var card_address: String = ""

    @Field("card_profile_image")
    var card_profile_image: String = ""
}

@Getter
@Setter
@Entity
@QueryEntity
class Friend : BaseModel() {

    @Field("friend_id")
    var friend_id: String? = null
}