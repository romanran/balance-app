<script setup lang="ts">
const props = defineProps({ balance: { type: Number, required: true } })
</script>

<template>
    <div>
        {{ props.balance }}
    </div>
</template>


<style ></style>