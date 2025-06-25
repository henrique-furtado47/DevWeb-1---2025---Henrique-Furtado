<script></script>
<template>
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Blog</a></li>
        <li><a href="ft-works.html">Works</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header ul li {
  text-align: center;
  padding: 10px 0 10px 0;
}
@media (min-width: 900px) {
  header ul {
    display: flex;
    justify-content: right;
  }

  header ul li {
    margin: 0px 20px 0px 20px;
  }
}
</style>
