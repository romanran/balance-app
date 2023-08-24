<script setup lang="ts">
import BalanceModule from './modules/Balance/BalanceModule.vue';
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="row justify-center">
          <div class="col-8">
            <BalanceModule></BalanceModule>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style ></style>
