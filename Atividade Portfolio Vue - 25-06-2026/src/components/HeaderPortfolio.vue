<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Blog</RouterLink></li>
        <li><RouterLink to="/works">Works</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header ul li {
  text-align: center;
  padding: 10px 0 10px 0;
  margin: 0px 20px 0px 20px;
}
@media (min-width: 900px) {
  header ul {
    display: flex;
    justify-content: right;
  }

  header ul li {
    padding: 20px 0 20px 0;
  }
}
</style>
