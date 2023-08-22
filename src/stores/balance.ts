import { defineStore } from 'pinia'
import { type Balance, type Transaction } from '@/models/BalanceData'
import { FetchFactory } from '@/services/middleware/FetchFactory'

const Balance = new FetchFactory('http://api.net/')

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

            return response
        }
    }
})
