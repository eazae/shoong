package com.ssafy.a103.shoong.service

import com.ssafy.a103.shoong.model.Friend
import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.repository.UserRepository
import com.ssafy.a103.shoong.repository.UserRepositorySupport
import com.ssafy.a103.shoong.requestBody.*
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.CookieValue
import java.util.*
import javax.jws.soap.SOAPBinding.Use
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

@Service
class UserService(val userRepository: UserRepository, val userRepositorySupport: UserRepositorySupport) {
    fun getAll(): List<User> = userRepository.findAll()

    fun getByEmail(email: String): Optional<User> {
        val user = userRepositorySupport.getByEmail(email)
        if(user!= Optional.empty<User>()){
            return user
        }
        return Optional.empty<User>()
    }

    fun getById(id:String): Optional<User> {
        val user = userRepositorySupport.getById(id)
        if(user!= Optional.empty<User>()){
            return user
        }
        return Optional.empty<User>()
    }

    fun getByPhone(phone_number:String): Optional<User> {
        val user = userRepositorySupport.getByPhone(phone_number)
        if(user!= Optional.empty<User>()){
            return user
        }
        return Optional.empty<User>()
    }

    fun getByNickName(nickname:String): Optional<User> {
        val user = userRepositorySupport.getByNickName(nickname)
        if(user!= Optional.empty<User>()){
            return user
        }
        return Optional.empty<User>()
    }
    fun join(userJoinRequestBody: UserJoinRequestBody): User {
        val user = User()
        user.user_phone_number = userJoinRequestBody.user_phone_number
        user.user_email = userJoinRequestBody.user_email
        user.user_password = userJoinRequestBody.user_password
        user.user_nickname = userJoinRequestBody.user_nickname
        return userRepository.save(user)
    }

    fun update(user:User, userUpdateRequestBody: UserUpdateRequestBody): User {
        user.user_phone_number = userUpdateRequestBody.user_phone_number
        user.user_nickname = userUpdateRequestBody.user_nickname
        user.user_profile_image = userUpdateRequestBody.user_profile_image
        return userRepository.save(user)
    }

    fun updatepassword(user:User, userUpdatePasswordRequestBody: UserUpdatePasswordRequestBody): User {
        user.user_password = userUpdatePasswordRequestBody.user_password
        return userRepository.save(user)
    }

    fun signout(user_id: String) {
        return this.userRepository.deleteById(user_id)
    }

    fun logout(response:HttpServletResponse) {
        val cookie = Cookie("jwt", "")
        cookie.maxAge = 0
        response.addCookie(cookie)
    }
    fun makeFriend(user:User, makeFriendRequestBody: MakeFriendRequestBody):User{
        val friend = Friend()
        if(makeFriendRequestBody.user_nickname != "") {
            val user2 = this.getByNickName(makeFriendRequestBody.user_nickname)
            if(user2 != Optional.empty<User>()) {
                friend.friend_id = user2.get().id
                user.friends+=friend
                return userRepository.save(user)
            }
        }
        if(makeFriendRequestBody.user_email != "") {
            val user2 = this.getByEmail(makeFriendRequestBody.user_email)
            if(user2 != Optional.empty<User>()) {
                friend.friend_id = user2.get().id
                user.friends+=friend
                return userRepository.save(user)
            }
        }
        if(makeFriendRequestBody.user_phone_number != "") {
            val user2 = this.getByPhone(makeFriendRequestBody.user_phone_number)
            if(user2 != Optional.empty<User>()) {
                friend.friend_id = user2.get().id
                user.friends+=friend
                return userRepository.save(user)
            }
        }
        return userRepository.save(user)
        //친구가 없을 때 알림이 없음
    }

    fun deleteFriend(user:User, deleteFriendRequestBody: DeleteFriendRequestBody):User{
        val tmp_user = this.getByNickName(deleteFriendRequestBody.user_nickname).get() //삭제할 친구
        for(friend in user.friends){
            if(friend.friend_id.equals(tmp_user.id)){
                user.friends-=friend
                break
            }
        }
        return userRepository.save(user)
    }
    fun checkJWT(@CookieValue("jwt")jwt:String?):Boolean{
        if(jwt==null){
            return false
        }
        return true
    }
}

