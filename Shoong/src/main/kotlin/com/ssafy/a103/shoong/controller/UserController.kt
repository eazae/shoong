package com.ssafy.a103.shoong.controller

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.requestBody.UserJoinRequestBody
import com.ssafy.a103.shoong.service.UserService
import io.swagger.annotations.Api
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

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
    fun getAll(): ResponseEntity<List<User>> {
        println("/api/user/getAll")
        return ResponseEntity.ok().body(userService.getAll())
    }

    @Operation(summary = "get user by Email", description = "get user by Email")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @GetMapping("/api/user/getByEmail")
    fun getByEmail(@RequestParam email: String): ResponseEntity<User> {
        println("/api/user/getByEmail")
        return ResponseEntity.ok().body(userService.getByEmail(email))
    }

    @Operation(summary = "join new user", description = "join new user")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @PostMapping("/api/user/join")
    fun join(@RequestBody userJoinRequestBody: UserJoinRequestBody): ResponseEntity<Any> {
        println("/api/user/join")
        // TODO 구현하고 주석 풀기
//        userService.join(userJoinRequestBody)
        return ResponseEntity.ok().body(true)
    }
}