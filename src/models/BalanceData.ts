export interface Transaction {
    date: string
    amount: number
}

export interface MonthBalance {
    date: {
        year: number
        month: number
    }
    balance: number
}

export interface Balance {
    currentBalance: number
    monthlyBalance: MonthBalance[]
}
