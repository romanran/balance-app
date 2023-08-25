
<script setup lang="ts">
import type { MonthBalance } from '@/models/BalanceData';
import type { QTableColumn } from 'quasar';
import { ref } from 'vue'

interface Props {
    months: MonthBalance[],
    loading: boolean
}

const props = defineProps<Props>()

const pagination = ref({
    rowsPerPage: 25,
    sortBy: 'date',
    descending: true,
})
function dateSort(a: MonthBalance['date'], b: MonthBalance['date']) {
    return a.year + a.month - b.year + b.month
}

const columns: QTableColumn[] = [
    { name: 'date', field: 'date', label: 'Date', sort: dateSort, align: 'left' },
    { name: 'balance', field: 'balance', label: 'Balance', align: 'right' },
]

function formatDate(month: number) {
    return new Date(`${month}`).toLocaleString('en-US', { month: 'long' })
}

</script>
<template>
    <q-table :rows="props.months" :columns="columns" :loading="loading" v-model:pagination="pagination">
        <template v-slot:body-cell-date="props">
            <q-td>
                {{ formatDate(props.row.date.month) }} {{ props.row.date.year }}
            </q-td>
        </template>
        <template v-slot:body-cell-balance="props">
            <q-td :align="'right'" v-balance="props.row.balance"></q-td>
        </template>
    </q-table>
</template>

<style scoped></style>