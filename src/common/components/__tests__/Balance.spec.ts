import { describe, it, expect } from 'vitest'

import { DOMWrapper, mount } from '@vue/test-utils'
import BaBalance from '@/common/components/Balance/baBalance.vue'
import BaBalanceMonthly from '@/common/components/Balance/baBalanceMonthly.vue'
import type { Balance } from '@/models/BalanceData'
import { formatBalance } from '@/services/helpers/balance'
import { formatCurrency } from '@/common/directives/format'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
installQuasarPlugin()

describe('Balance components', () => {
    const balance: Balance = {
        currentBalance: 30.31,
        monthlyBalance: [
            {
                date: {
                    year: 2022,
                    month: 1
                },
                balance: 100.1
            },
            {
                date: {
                    year: 2022,
                    month: 2
                },
                balance: 61.36
            }
        ]
    }
    const global = {
        directives: {
            balance: formatCurrency
        }
    }

    it('should show correct current total balance', () => {
        const BalanceWrapper = mount(BaBalance, {
            props: { balance: balance.currentBalance },
            global
        })

        expect(BalanceWrapper.text()).toContain(formatBalance(30.31))
    })
    it('should show correct monthly balance in right order', () => {
        const BalanceMonthlyWrapper = mount(BaBalanceMonthly, {
            props: {
                months: balance.monthlyBalance,
                loading: false
            },
            global
        })

        const rows: DOMWrapper<HTMLTableRowElement>[] = BalanceMonthlyWrapper.findAll('tr')
        expect(rows[1].text()).toContain('February')
        expect(rows[1].text()).toContain(formatBalance(balance.monthlyBalance[1].balance))
        expect(rows[2].text()).toContain('January')
        expect(rows[2].text()).toContain(formatBalance(balance.monthlyBalance[0].balance))
    })
})
