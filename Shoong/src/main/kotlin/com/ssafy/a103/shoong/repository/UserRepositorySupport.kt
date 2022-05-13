package com.ssafy.a103.shoong.repository

import com.ssafy.a103.shoong.model.QUser.user
import com.ssafy.a103.shoong.model.User
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class UserRepositorySupport (
    private val userRepository: UserRepository,
    private val mongoTemplate: MongoTemplate // 지워도 될지 확실히 모르겠어요 아직
) {
//     복잡한 쿼리 ex
    fun getByEmail(email: String): Optional<User> {
        return userRepository
            .findOne(
                user.user_email.eq(email)
            )
    }
    fun getById(Id:String):Optional<User>{
        return userRepository.findOne(user.id.eq(Id))
    }
    fun getByPhone(phone_number:String):Optional<User>{
        return userRepository.findOne(user.user_phone_number.eq(phone_number))
    }

    fun getByNickName(nickname:String):Optional<User>{
        return  userRepository.findOne(user.user_nickname.eq(nickname))
    }
}