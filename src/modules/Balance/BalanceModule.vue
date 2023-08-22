<script setup lang="ts">
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
        <baBalance v-if="currentBalance"></baBalance>
        <baBalanceMonthly :months="monthlyBalance"></baBalanceMonthly>
    </div>
    <div v-if="loading">loading...</div>
</template>

<style lang="scss">
.balance-module {
    padding: $spacer;
}
</style>P
