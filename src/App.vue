<script setup lang="ts">
import BalanceModule from './modules/Balance/BalanceModule.vue';
</script>

<template>
  <q-layout class="ba-app">
    <q-page-container>
      <q-page padding class="ba-app__page">
        <div class="row justify-center">
          <div class="col-8">
            <BalanceModule></BalanceModule>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.ba-app__page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
