package com.ssafy.a103.shoong.repository

import com.ssafy.a103.shoong.model.User
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository: MongoRepository<User, String>{
}