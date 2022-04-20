package com.ssafy.a103.shoong.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket

@Configuration
@EnableWebMvc
class SwaggerConfig {

    @Bean
    fun api(): Docket {
        return Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.ssafy.a103.shoong.controller"))
            .paths(PathSelectors.any())
//            .paths(PathSelectors.regex("/.*"))
            .build()
            .apiInfo(apiInfo())
    }

    private fun apiInfo(): ApiInfo {
        return ApiInfoBuilder().apply {
            title("Shoong API")
            description("Welcome to Shoong")
//            contact(Contact("Pyxis", "https://uzuki.live", "pyxis@uzuki.live"))
//            license("MIT License")
//            licenseUrl("https://github.com/WindSekirun/UploadFileBoot/blob/master/LICENSE")
            .version("1.0")
        }.build()
    }
}