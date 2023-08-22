export interface Transaction {
    date: Date
    amount: number
}

export interface MonthBalance {
    month: Date
    amount: number
}

export interface Balance {
    currentBalance: number
    monthlyBalance: MonthBalance[]
}
