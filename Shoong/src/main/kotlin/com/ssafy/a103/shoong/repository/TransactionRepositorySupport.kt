package com.ssafy.a103.shoong.repository

import com.ssafy.a103.shoong.model.QTransaction.transaction
import com.ssafy.a103.shoong.model.Transaction
import com.ssafy.a103.shoong.model.User
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.stereotype.Repository

@Repository
class TransactionRepositorySupport (
    private val transactionRepository: TransactionRepository,
    private val mongoTemplate: MongoTemplate // 지워도 될지 확실히 모르겠어요 아직
) {
    fun getAllByUserId(user: User): List<Transaction> {
        return transactionRepository
            .findAll(
                transaction.transaction_receiver_user_id.eq(user.id)
                    .or(transaction.transaction_sender_user_id.eq(user.id))
            ).toList()
    }

    fun getByCoin(coin_id: String, user: User): List<Transaction> {
        return transactionRepository
            .findAll(
                transaction.transaction_coin_id.eq(coin_id).and(transaction.deletedAt.isNull)
                    .and(transaction.transaction_receiver_user_id.eq(user.id)
                        .or(transaction.transaction_sender_user_id.eq(user.id)))
            )
            .toList()
    }

    fun getByCard(card_id: String): List<Transaction> {
        return transactionRepository
            .findAll(
                transaction.deletedAt.isNull
                    .and(transaction.transaction_sender_card_id.eq(card_id)
                        .or(transaction.transaction_sender_card_id.eq(card_id)))
            )
            .toList()
    }
}