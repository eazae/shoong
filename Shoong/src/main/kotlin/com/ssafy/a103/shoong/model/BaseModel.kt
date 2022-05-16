package com.ssafy.a103.shoong.model

import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Field
import java.time.LocalDateTime
import javax.persistence.Id
import javax.persistence.MappedSuperclass

// queryDSL에서 상속된 변수를 활용하기 위해서 @MappedSuperclass 어노테이션을 붙여야함
@MappedSuperclass
//@Where(clause = "deletedAt IS NULL")
class BaseModel {

    @Id
    var id: String? = ObjectId.get().toString()

    @Field("createdAt")
    var createdAt: LocalDateTime = LocalDateTime.now()

    @Field("updatedAt")
    var updatedAt: LocalDateTime? = null

    @Field("deletedAt")
    var deletedAt: LocalDateTime? = null

    fun delete() {
        deletedAt = LocalDateTime.now()
    }
}