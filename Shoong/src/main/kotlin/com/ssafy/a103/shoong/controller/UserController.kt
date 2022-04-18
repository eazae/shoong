package com.ssafy.a103.shoong.controller

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.service.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
private class UserController(val userService: UserService) {

    @GetMapping("/api/user/getAll")
    fun getAll(): List<User>{
        println("/api/user/getAll")
        return userService.getAll()
    }
}