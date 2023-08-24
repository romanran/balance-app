
<script setup lang="ts">
import type { MonthBalance } from '@/models/BalanceData';
import { formatBalance } from '@/services/helpers/balance';
import type { QTableColumn } from 'quasar';

interface Props {
    months: MonthBalance[]
}

const props = defineProps<Props>()

const columns: QTableColumn[] = [
    { name: 'date', field: 'date', label: 'Date', sortOrder: "da", align: 'left' },
    { name: 'balance', field: 'balance', label: 'Balance', align: 'right' },
]

function formatDate(month: number) {
    return new Date(`${month}`).toLocaleString('en-US', { month: 'long' })
}

</script>
<template>
    <q-table :rows="props.months" :columns="columns">
        <template v-slot:body-cell-date="props">
            <q-td>
                {{ formatDate(props.row.date.month) }} {{ props.row.date.year }}
            </q-td>
        </template>
        <template v-slot:body-cell-balance="props">
            <q-td :align="'right'">
                {{ formatBalance(props.row.balance) }}
            </q-td>
        </template>
    </q-table>
    <!-- <div v-for="month in props.months" :key="`${month.date.year}${month.date.month}`">
        <BaBalanceMonthlyRow :month=month></BaBalanceMonthlyRow>
    </div> -->
</template>

<style scoped></style>