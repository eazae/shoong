package com.ssafy.a103.shoong.service

import com.ssafy.a103.shoong.model.Transaction
import com.ssafy.a103.shoong.model.User
import com.ssafy.a103.shoong.repository.TransactionRepository
import com.ssafy.a103.shoong.repository.TransactionRepositorySupport
import com.ssafy.a103.shoong.requestBody.TransactionCancelRequestBody
import com.ssafy.a103.shoong.requestBody.TransactionSaveRequestBody
import org.springframework.stereotype.Service
import java.util.*

@Service
class TransactionService(val transactionRepository: TransactionRepository, val transactionRepositorySupport: TransactionRepositorySupport) {
    fun getAllByUserId(user: User): List<Transaction> {
        return transactionRepositorySupport.getAllByUserId(user)
    }

    fun getByCoin(coin_id: String, user: User): List<Transaction> = transactionRepositorySupport.getByCoin(coin_id, user)

    fun getByCard(card_id: String): List<Transaction> = transactionRepositorySupport.getByCard(card_id)

    fun cancel(transactionCancelRequestBody: TransactionCancelRequestBody): Boolean {
        val transaction = transactionRepository.findById(transactionCancelRequestBody.transaction_id)
        return if(transaction != Optional.empty<Transaction>() && transaction.get().deletedAt == null){
            transaction.get().delete()
            transactionRepository.save(transaction.get())
            true
        } else
            false
    }

    fun save(transactionSaveRequestBody: TransactionSaveRequestBody): Transaction {
        val transaction = Transaction()
        transaction.transaction_gasprice = transactionSaveRequestBody.transaction_gasprice
        transaction.transaction_gas = transactionSaveRequestBody.transaction_gas
        transaction.transaction_sender_user_id = transactionSaveRequestBody.transaction_sender_user_id
        transaction.transaction_sender_card_id = transactionSaveRequestBody.transaction_sender_card_id
        transaction.transaction_receiver_user_id = transactionSaveRequestBody.transaction_receiver_user_id
        transaction.transaction_receiver_card_id = transactionSaveRequestBody.transaction_receiver_card_id
        transaction.transaction_value = transactionSaveRequestBody.transaction_value
        transaction.transaction_memo = transactionSaveRequestBody.transaction_memo
        transaction.transaction_coin_id = transactionSaveRequestBody.transaction_coin_id
        return transactionRepository.save(transaction)
    }
}