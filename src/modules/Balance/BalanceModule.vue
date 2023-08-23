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
    <div class="balance-module">
        <BaBalance v-if="currentBalance" :balance=currentBalance></BaBalance>
        <BaBalanceMonthly :months="monthlyBalance"></BaBalanceMonthly>
    </div>
    <div v-if="loading">loading...</div>
</template>

<style lang="scss">
.balance-module {}
</style>P
