package com.ssafy.a103.shoong.controller

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.service.UserService
import io.swagger.annotations.Api
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Api(value = "유저 API", tags = [ "User" ])
@RestController
private class UserController(val userService: UserService) {

    // TODO JWT 토큰 관련 코드 추가

    // TODO 비밀번호 암호화 함수 추가

    // TODO 필요한대로 수정
    @Operation(summary = "get all users", description = "get all users")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @GetMapping("/api/user/getAll")
    fun getAll(): List<User>{
        println("/api/user/getAll")
        return userService.getAll()
    }
}