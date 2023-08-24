<script setup lang="ts">
const props = defineProps({ balance: { type: Number, required: true } })
</script>

<template>
    <div>
        <span>Total balance:</span> <span v-balance="props.balance"></span>
    </div>
</template>


<style ></style>