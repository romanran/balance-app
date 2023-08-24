
<script setup lang="ts">
import type { MonthBalance } from '@/models/BalanceData';

interface Props {
    month: MonthBalance
}
function monthNumberToText(month: number) {
    return new Date(`${month}`).toLocaleString('en-US', { month: 'long' })
}
const props = defineProps<Props>()
</script>
<template>
    <p>
        <span>{{ monthNumberToText(props.month.date.month) }} {{ props.month.date.year }}</span>
        <span v-balance="props.month.balance"></span>
    </p>
</template>

<style scoped></style>