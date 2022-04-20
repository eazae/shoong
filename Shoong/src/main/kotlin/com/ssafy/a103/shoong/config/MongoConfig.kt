package com.ssafy.a103.shoong.config

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@Configuration
@EnableMongoRepositories(basePackages = ["com.ssafy.a103.shoong.repository"])
class MongoConfig : AbstractMongoClientConfiguration() {

    // DB 이름 설정
    override fun getDatabaseName(): String = "S06P31A103"

    override fun mongoClient(): MongoClient {
        // db 경로 설정
        val connectionString = ConnectionString("mongodb+srv://S06P31A103:RJjq6ju2HR@ssafy.ngivl.mongodb.net/S06P31A103?authSource=admin")
        val mongoClientSettings = MongoClientSettings
            .builder()
            .applyConnectionString(connectionString)
            .build()

        return MongoClients.create(mongoClientSettings)
    }
}