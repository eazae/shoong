package com.ssafy.a103.shoong.service

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.repository.UserRepository
import com.ssafy.a103.shoong.repository.UserRepositorySupport
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(val userRepository: UserRepository, val userRepositorySupport: UserRepositorySupport) {
    fun getAll(): List<User> = userRepository.findAll()

    fun getByEmail(email: String): Optional<User> = userRepositorySupport.getByEmail(email)
}