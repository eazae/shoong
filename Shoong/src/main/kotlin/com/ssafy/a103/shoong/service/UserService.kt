package com.ssafy.a103.shoong.service

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(val userRepository: UserRepository) {
    fun getAll(): List<User> {
        return userRepository.findAll()
    }
}