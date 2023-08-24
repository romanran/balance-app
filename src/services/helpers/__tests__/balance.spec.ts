import { describe, it, expect } from 'vitest'

import type { Balance, Transaction } from '@/models/BalanceData'
import { transformTransactions } from '../balance'

describe('Transactions', () => {
    const transactions: Transaction[] = [
        { date: '2022-10-12T06:06:22.118Z', amount: 400.1 },
        { date: '2022-10-24T06:06:22.118Z', amount: -400.1 },
        { date: '2022-11-24T06:06:22.118Z', amount: 100.42 },
        { date: '2022-12-24T06:06:22.118Z', amount: -100.42 }
    ]
    const resultBalance: Balance = {
        currentBalance: 0,
        monthlyBalance: [
            { date: { year: 2022, month: 10 }, balance: 0 },
            { date: { year: 2022, month: 11 }, balance: 100.42 },
            { date: { year: 2022, month: 12 }, balance: -100.42 }
        ]
    }

    it('should transform transactions to monthly balance', async () => {
        const months = transformTransactions(transactions)
        expect(months).toEqual(resultBalance)
    })
})
