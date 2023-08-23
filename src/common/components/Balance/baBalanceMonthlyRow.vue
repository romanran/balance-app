
<script setup lang="ts">
import type { MonthBalance } from '@/models/BalanceData';

interface Props {
    month: MonthBalance
}

const props = defineProps<Props>()
</script>
<template>
    <div>
        <div>{{ props.month.date.year }}-{{ props.month.date.month }}</div>
        <div v-balance="props.month.balance"></div>
    </div>
</template>

<style scoped></style>