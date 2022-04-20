package com.ssafy.a103.shoong.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class CorsConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
//        registry.addMapping("/**")
        registry.addMapping("/api/**")
//            .allowedOrigins("*")
            .allowedOrigins("http://localhost:8080", "http://localhost:3000")
//            .allowedMethods("GET", "POST", "PATCH", "DELETE", "PUT")
            .allowCredentials(true)
            .exposedHeaders("authorization")
    }
}