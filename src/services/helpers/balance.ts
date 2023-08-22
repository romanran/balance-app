import type { Balance, Transaction } from '@/models/BalanceData'

export function transformTransactions(transactions: Transaction[]): Balance {
    return {
        currentBalance: 0,
        monthlyBalance: []
    }
}
