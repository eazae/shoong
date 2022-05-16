package com.ssafy.a103.shoong.repository

import com.ssafy.a103.shoong.model.Transaction
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor

interface TransactionRepository: MongoRepository<Transaction, String>
    , QuerydslPredicateExecutor<Transaction>
