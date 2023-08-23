
<script setup lang="ts">
import type { MonthBalance } from '@/models/BalanceData';
import BaBalanceMonthlyRow from './baBalanceMonthlyRow.vue';

interface Props {
    months: MonthBalance[]
}
const props = defineProps<Props>()

</script>
<template>
    <div>
        <div v-for="month in props.months" :key="`${month.date.year}${month.date.month}`">
            <BaBalanceMonthlyRow :month=month></BaBalanceMonthlyRow>
        </div>
    </div>
</template>

<style scoped></style>