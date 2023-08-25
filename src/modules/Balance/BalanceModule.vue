<script setup lang="ts">
import BaBalance from '@/common/components/Balance/baBalance.vue'
import BaBalanceMonthly from '@/common/components/Balance/baBalanceMonthly.vue'

import { storeToRefs } from 'pinia'
import { useBalanceStore } from '@/stores/balance'

const balanceStore = useBalanceStore()
const { currentBalance, monthlyBalance, loading } = storeToRefs(balanceStore)
const fetchData = async () => {
    await balanceStore.fetchTransactions()
}

fetchData()
</script>

<template>
    <q-card class="balance-module" flat bordered data-test="monthly-balance">
        <q-card-section>
            <BaBalance v-if="currentBalance" :balance="currentBalance"></BaBalance>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <BaBalanceMonthly :months="monthlyBalance" :loading="loading.valueOf()"></BaBalanceMonthly>
        </q-card-section>
    </q-card>
</template>

<style lang="scss">
.balance-module {}
</style>P
