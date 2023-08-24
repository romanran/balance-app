import { describe, it, expect } from 'vitest'

import type { Balance, Transaction } from '@/models/BalanceData'
import { transformTransactions } from '../balance'

describe('Transactions', () => {
    const transactions: Transaction[] = [
        { date: '2022-10-02T06:02:22.000Z', amount: 400.1 },
        { date: '2022-10-13T14:10:12.000Z', amount: -400.1 },
        { date: '2022-11-24T06:06:22.000Z', amount: 100.42 },
        { date: '2022-12-12T08:42:10.000Z', amount: -100.42 }
    ]
    const resultBalance: Balance = {
        currentBalance: 0,
        monthlyBalance: [
            { date: { year: 2022, month: 10 }, balance: 0 },
            { date: { year: 2022, month: 11 }, balance: 100.42 },
            { date: { year: 2022, month: 12 }, balance: -100.42 }
        ]
    }

    const balance = transformTransactions(transactions)

    it('should transform transactions to monthly balance', async () => {
        expect(balance.monthlyBalance).toEqual(resultBalance.monthlyBalance)
    })

    it('should calculate the total current balance correctly', () => {
        expect(balance.currentBalance).toBe(resultBalance.currentBalance)
    })

    it('should calculate multiple transactions in single month correctly', () => {
        const transactions: Transaction[] = [
            { date: '2022-10-02T06:02:22.000Z', amount: 400.1 },
            { date: '2022-10-13T14:10:12.000Z', amount: -400.1 },
            { date: '2022-10-24T16:23:42.000Z', amount: 100.42 },
            { date: '2022-10-29T10:14:17.000Z', amount: 0.58 }
        ]
        const balance = transformTransactions(transactions)

        const monthBalance = [{ date: { year: 2022, month: 10 }, balance: 101.0 }]
        expect(balance.monthlyBalance).toEqual(monthBalance)
    })
})
