package com.ssafy.a103.shoong.service

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.repository.UserRepository
import com.ssafy.a103.shoong.repository.UserRepositorySupport
import com.ssafy.a103.shoong.requestBody.UserJoinRequestBody
import org.springframework.stereotype.Service

@Service
class UserService(val userRepository: UserRepository, val userRepositorySupport: UserRepositorySupport) {
    fun getAll(): List<User> = userRepository.findAll()

    fun getByEmail(email: String): User = userRepositorySupport.getByEmail(email).orElse(null)

    fun join(userJoinRequestBody: UserJoinRequestBody): User {
        val user = User()
        user.user_phone_number = userJoinRequestBody.user_phone_number
        user.user_email = userJoinRequestBody.user_email
        user.user_password = userJoinRequestBody.user_password
        user.user_nickname = userJoinRequestBody.user_nickname
        return userRepository.save(user)
    }
}