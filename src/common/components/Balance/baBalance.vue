<script setup lang="ts">
const props = defineProps({ balance: { type: Number, required: true } })
</script>

<template>
    <div class="text-h6" data-test="balance">
        <span class="text-weight-thin">Total balance:</span> <span v-balance="props.balance"></span>
    </div>
</template>


<style ></style>