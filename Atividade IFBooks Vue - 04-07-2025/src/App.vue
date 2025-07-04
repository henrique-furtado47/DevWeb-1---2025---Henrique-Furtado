<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <header-component></header-component>
  <RouterView />
  <footer-component></footer-component>
</template>

<style scoped>

</style>
