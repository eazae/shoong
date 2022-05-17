package com.ssafy.a103.shoong.service

import com.ssafy.a103.shoong.model.Card
import com.ssafy.a103.shoong.model.Friend
import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.repository.UserRepository
import com.ssafy.a103.shoong.repository.UserRepositorySupport
import com.ssafy.a103.shoong.requestBody.*
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.CookieValue
import java.util.*
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse
import javax.xml.ws.Response

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
    fun loadFriend(user:User): List<User> {
        val tmp_users : MutableList<User> = mutableListOf<User>().toMutableList()
        for(friend in user.friends){
            val tmp_user = friend.friend_id?.let { getById(it) }?.get()
            if (tmp_user != null) {
                tmp_users += tmp_user
            }
        }
        return tmp_users
    }
    fun deleteFriend(user:User, deleteFriendRequestBody: DeleteFriendRequestBody):User{
        val tmp_user = getByNickName(deleteFriendRequestBody.user_nickname).get()//삭제할 친구
        for(friend in user.friends){
            if(friend.friend_id.equals(tmp_user.id)){
                user.friends-=friend
                break
            }
        }
        return userRepository.save(user)
    }

    fun checkMakeCardRequestBody(makeCardRequestBody: MakeCardRequestBody):Boolean{
        if(makeCardRequestBody.card_name =="" || makeCardRequestBody.card_address ==""){
            return false
        }
        return true
    }

    fun makeCard(user:User, makeCardRequestBody: MakeCardRequestBody):User{
        if(!checkMakeCardRequestBody(makeCardRequestBody)){
            return userRepository.save(user)
        }
        val card = Card()
        card.card_address = makeCardRequestBody.card_address
        card.card_name = makeCardRequestBody.card_name
        card.card_profile_image = makeCardRequestBody.card_profile_image
        user.cards += card
        return userRepository.save(user)
    }
    fun deleteCard(user:User, makeCardRequestBody: MakeCardRequestBody):User{
        for(card in user.cards){
            if(card.card_address == makeCardRequestBody.card_address && card.card_name == makeCardRequestBody.card_name){
                user.cards -= card
                break;
            }
        }
        return userRepository.save(user)
    }
    fun updateCard(user:User, updateCardRequestBody: UpdateCardRequestBody):User{
        for(card in user.cards){
            if(card.id==updateCardRequestBody.card_id){
                card.card_name = updateCardRequestBody.card_name
                card.card_profile_image = updateCardRequestBody.card_profile_image
                break;
            }
        }
        return userRepository.save(user)
    }

    fun loadCard(user:User): List<Card> {
        return user.cards
    }

    fun checkJWT(@CookieValue("jwt")jwt:String?):Boolean{
        if(jwt==null){
            return false
        }
        return true
    }
}

