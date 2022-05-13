package com.ssafy.a103.shoong.controller

import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.requestBody.*
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
        return ResponseEntity.ok().body(userService.getByEmail(email).get())
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

    @PostMapping("api/user/checkemail")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun checkemail(@RequestBody userJoinRequestBody: UserJoinRequestBody): ResponseEntity<Any>{
        if(userJoinRequestBody.user_email !=""){
            val user = this.userService.getByEmail(userJoinRequestBody.user_email)
            if(user != Optional.empty<User>() ){
                return ResponseEntity.status(409).body(Message("Conflick"))
            }
        }
        return ResponseEntity.ok(Message("success"))
    }

    @PostMapping("api/user/checknickname")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun checknickname(@RequestBody userJoinRequestBody: UserJoinRequestBody): ResponseEntity<Any>{
        if(userJoinRequestBody.user_nickname !=""){
            val user = this.userService.getByNickName(userJoinRequestBody.user_nickname)
            if(user != Optional.empty<User>()){
                return ResponseEntity.status(409).body(Message("Conflick"))//중복에러코드
            }
        }
        return ResponseEntity.ok(Message("success"))
    }
    @PostMapping("api/user/checkphone")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun checkphone(@RequestBody userJoinRequestBody: UserJoinRequestBody): ResponseEntity<Any>{
        if(userJoinRequestBody.user_phone_number !=""){
            val user = this.userService.getByPhone(userJoinRequestBody.user_phone_number)
            if(user != Optional.empty<User>()){
                return ResponseEntity.status(409).body(Message("Conflick"))//중복에러코드
            }
        }
        return ResponseEntity.ok(Message("success"))
    }
    @PutMapping("api/user/update")
    fun update(@CookieValue("jwt")jwt:String?,@RequestBody userUpdateRequestBody: UserUpdateRequestBody): ResponseEntity<Any>{
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
        val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        val user = this.userService.getById(body.issuer.toString()).get()
        println(userUpdateRequestBody)
        return ResponseEntity.ok().body(this.userService.update(user,userUpdateRequestBody))
    }
    @PutMapping("api/user/updatepassword")
    fun updatepassword(@CookieValue("jwt")jwt:String?,@RequestBody userUpdatePasswordRequestBody: UserUpdatePasswordRequestBody): ResponseEntity<Any>{
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
        val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        val user = this.userService.getById(body.issuer.toString()).get()
        return ResponseEntity.ok().body(this.userService.updatepassword(user,userUpdatePasswordRequestBody))
    }
    @PostMapping("/api/user/login")
    fun login(@RequestBody userLoginRequestBody: UserLoginRequestBody, response:HttpServletResponse) : ResponseEntity<Any>{
        val user = this.userService.getByEmail(userLoginRequestBody.user_email)
        if(user==Optional.empty<User>()){
            return ResponseEntity.badRequest().body(Message("user not found"))
        }
        if(!user.get().comparePassword(userLoginRequestBody.user_password)){
            return ResponseEntity.badRequest().body(Message("invalid pasword!"))
        }
        val issuer = user.get().id.toString()
        println(issuer)
        val jwt = Jwts.builder()
                .setIssuer(issuer)
                .setExpiration(Date(System.currentTimeMillis()+30*60*1000))//30min
                .signWith(SignatureAlgorithm.HS512,"secret").compact()
        val cookie = Cookie("jwt",jwt)
        cookie.isHttpOnly = true

        response.addCookie(cookie)
        return ResponseEntity.ok(jwt)
    }
    @PostMapping("/api/user/logout")
    fun logout(response:HttpServletResponse) : ResponseEntity<Any>{
        println("/api/user/logout")
        return ResponseEntity.ok().body(this.userService.logout(response))
    }
    @DeleteMapping("/api/user/signout")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun signout(response: HttpServletResponse, @CookieValue("jwt")jwt:String?):ResponseEntity<Any>{
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
        val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        val user = this.userService.getById(body.issuer.toString()).get()
        logout(response)
        return ResponseEntity.ok().body(user.id?.let { userService.signout(it) })
    }
    @GetMapping("/api/user/getUser")
    fun getUser(@CookieValue("jwt")jwt:String?):ResponseEntity<Any>{
        try {
            if(!this.userService.checkJWT(jwt)){
                return ResponseEntity.status(401).body(Message("unauthenticated"))
            }
            var body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body

            return ResponseEntity.ok(this.userService.getById(body.issuer.toString()))
        }catch (e:Exception){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }

    }
    @GetMapping("api/user/JWT")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun jwt(@CookieValue("jwt")jwt:String?):ResponseEntity<Any>{
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
        return ResponseEntity.ok(Message("success"))
    }
    //송금 시 비밀번호 인증
    @PostMapping("api/user/password")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun password(@CookieValue("jwt")jwt:String?,@RequestBody certificationRequestBody:CertificationRequestBody):ResponseEntity<Any>{
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
        val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        val user = this.userService.getById(body.issuer.toString()).get()
        var email = user.user_email

        if(!user.comparePassword(certificationRequestBody.user_password)){
            println("wrong password")
            return ResponseEntity.badRequest().body(Message("invalid pasword!"))
        }

        return ResponseEntity.ok(Message("Ok"))
    }

    @PostMapping("api/user/makefriend")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    fun makefriend(@CookieValue("jwt")jwt:String?,@RequestBody makeFriendRequestBody: MakeFriendRequestBody):ResponseEntity<Any>{
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
        var body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        var user = this.userService.getById(body.issuer.toString()).get()

        this.userService.makeFriend(user, makeFriendRequestBody);
        return ResponseEntity.ok(Message("Ok"))
    }
}

