<script setup>
import {  RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import HeaderPortfolio from './components/HeaderPortfolio.vue'
import FooterPortfolio from './components/FooterPortfolio.vue'
</script>

<template>
  <body>
    <HeaderPortfolio />
    <RouterView />
    <FooterPortfolio />
  </body>
</template>

