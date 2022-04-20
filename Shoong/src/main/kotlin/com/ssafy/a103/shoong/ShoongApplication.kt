package com.ssafy.a103.shoong

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [DataSourceAutoConfiguration::class])
class ShoongApplication

fun main(args: Array<String>) {
    runApplication<ShoongApplication>(*args)
}
