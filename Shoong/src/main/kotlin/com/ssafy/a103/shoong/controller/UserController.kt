package com.ssafy.a103.shoong.controller

import com.fasterxml.classmate.members.ResolvedParameterizedMember
import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.requestBody.Message
import com.ssafy.a103.shoong.requestBody.UserJoinRequestBody
import com.ssafy.a103.shoong.requestBody.UserLoginRequestBody
import com.ssafy.a103.shoong.service.UserService
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.swagger.annotations.Api
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

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
        return ResponseEntity.ok().body(userService.join(userJoinRequestBody))
    }
    @PostMapping("/api/user/login")
    fun login(@RequestBody userLoginRequestBody: UserLoginRequestBody, response:HttpServletResponse) : ResponseEntity<Any>{
        println("/api/user/login")
        val user = this.userService.getByEmail(userLoginRequestBody.user_email)
                ?:return ResponseEntity.badRequest().body(Message("user not found"))
        if(!user.comparePassword(userLoginRequestBody.user_password)){
            return ResponseEntity.badRequest().body(Message("invalid pasword!"))
        }

        var issuer = user.id.toString()

        val jwt = Jwts.builder()
                .setIssuer(issuer)
                .setExpiration(Date(System.currentTimeMillis()+60*24*1000))//1day
                .signWith(SignatureAlgorithm.HS512,"secret").compact()

        var cookie = Cookie("jwt",jwt)
        cookie.isHttpOnly = true

        response.addCookie(cookie)
        return ResponseEntity.ok(jwt)
    }
    @PostMapping("/api/user/logout")
    fun logout(response:HttpServletResponse) : ResponseEntity<Any>{
        println("/api/user/logout")
        var cookie = Cookie("jwt", "")
        cookie.maxAge = 0
        response.addCookie(cookie)

        return ResponseEntity.ok(Message("success"))
    }
    @GetMapping("/api/user/getUser")
    fun getUser(@CookieValue("jwt")jwt:String?):ResponseEntity<Any>{
        try {
            if(jwt==null){
                return ResponseEntity.status(401).body(Message("unauthenticated"))
            }
            var body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body

            return ResponseEntity.ok(this.userService.getById(body.issuer.toString()))
        }catch (e:Exception){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }

    }
}