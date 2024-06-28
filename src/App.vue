<script setup>
import Header from './components/Header.vue';
import BarOptions from './components/BarOptions.vue';
import { useRoute } from "vue-router"

const route = useRoute();

</script>

<template>
  <div>
    <Header v-if="route.path != '/login'"></Header>
    <BarOptions v-if="route.path !== '/login'"></BarOptions>
    <div class="bg-white absolute z-30 top-20 bottom-0 left-72 right-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
