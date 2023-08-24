import { defineStore } from 'pinia'
import { type Balance, type Transaction } from '@/models/BalanceData'
import { FetchFactory } from '@/services/middleware/FetchFactory'
import { transformTransactions } from '@/services/helpers/balance'

const Balance = new FetchFactory('http://someapi.net/transactions')

export interface BalanceState extends Balance {
    loading: Boolean
    transactions: Transaction[]
}

export const useBalanceStore = defineStore('balance', {
    state: (): BalanceState => ({
        currentBalance: 0,
        monthlyBalance: [],
        transactions: [],
        loading: false
    }),
    actions: {
        async fetchTransactions() {
            this.loading = true
            const response = await Balance.get<Transaction[]>()
            this.transactions = response
            this.loading = false
            if (!Array.isArray(response)) {
                return false
            }
            const balance = transformTransactions(this.transactions)
            this.currentBalance = balance.currentBalance
            this.monthlyBalance = balance.monthlyBalance

            return response
        }
    }
})
