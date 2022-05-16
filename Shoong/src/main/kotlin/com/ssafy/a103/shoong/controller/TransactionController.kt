package com.ssafy.a103.shoong.controller

import com.ssafy.a103.shoong.model.Transaction
import com.ssafy.a103.shoong.requestBody.TransactionCancelRequestBody
import com.ssafy.a103.shoong.requestBody.TransactionSaveRequestBody
import com.ssafy.a103.shoong.service.TransactionService
import com.ssafy.a103.shoong.service.UserService
import io.jsonwebtoken.Jwts
import io.swagger.annotations.Api
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@Api(value = "송금 API", tags = [ "Transaction" ])
@RestController
private class TransactionController(val transactionService: TransactionService, val userService: UserService) {

    @Operation(summary = "get all transactions", description = "get all transactions")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "401", description = "unauthenticated REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @GetMapping("/api/transaction/getAll")
    fun getAll(@CookieValue("jwt")jwt:String?): ResponseEntity<List<Transaction>> {
        println("/api/transaction/getAll")
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(null)
        }
        val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        val user = this.userService.getById(body.issuer.toString()).get()
        return ResponseEntity.ok().body(transactionService.getAllByUserId(user))
    }

    @Operation(summary = "get transaction by Coin", description = "get transaction by Coin")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @GetMapping("/api/transaction/getByCoin")
    fun getByCoin(@CookieValue("jwt")jwt:String?, @RequestParam coin_id: String): ResponseEntity<List<Transaction>> {
        println("/api/transaction/getByCoin")
        if(!this.userService.checkJWT(jwt)){
            return ResponseEntity.status(401).body(null)
        }
        val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
        val user = this.userService.getById(body.issuer.toString()).get()
        return ResponseEntity.ok().body(transactionService.getByCoin(coin_id, user))
    }

    @Operation(summary = "cancel transaction", description = "cancel transaction")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @PostMapping("/api/transaction/cancel")
    fun cancel(@RequestBody transactionCancelRequestBody: TransactionCancelRequestBody): ResponseEntity<Any> {
        println("/api/transaction/cancel")
        return ResponseEntity.ok().body(transactionService.cancel(transactionCancelRequestBody))
    }

    @Operation(summary = "save transaction", description = "save transaction")
    @ApiResponses(value=[
        ApiResponse(responseCode = "200", description = "OK !!"),
        ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
        ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
        ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    ])
    @PostMapping("/api/transaction/save")
    fun save(@RequestBody transactionSaveRequestBody: TransactionSaveRequestBody): ResponseEntity<Any> {
        println("/api/transaction/save")
        return ResponseEntity.ok().body(transactionService.save(transactionSaveRequestBody))
    }
}