import type { Balance, MonthBalance, Transaction } from '@/models/BalanceData'

/* Transform transactions to monthly balance */
export function transformTransactions(transactions: Transaction[]): Balance {
    let currentBalance = 0
    let monthIterator = -1

    function reduceTransactions(months: MonthBalance[], currentTransaction: Transaction, currentIndex: number) {
        const previousTransaction = transactions[currentIndex - 1] || false

        const currentTransactionDate = new Date(currentTransaction.date)
        const previousTransactionDate = previousTransaction ? new Date(previousTransaction.date) : null

        const transactionMonth = {
            previous: previousTransactionDate?.getMonth(),
            current: currentTransactionDate.getMonth()
        }

        if (transactionMonth.previous === transactionMonth.current) {
            months[monthIterator].balance += currentTransaction.amount
        } else {
            monthIterator++
            months[monthIterator] = {
                date: {
                    year: currentTransactionDate.getFullYear(),
                    month: transactionMonth.current + 1
                },
                balance: currentTransaction.amount
            }
        }

        currentBalance += currentTransaction.amount

        return months
    }

    const monthlyBalance = transactions.reduce(reduceTransactions, [])

    return {
        currentBalance,
        monthlyBalance
    }
}

export function formatBalance(amount: number) {
    return new Intl.NumberFormat('uk-GB', { style: 'currency', currency: 'GBP' }).format(amount)
}
