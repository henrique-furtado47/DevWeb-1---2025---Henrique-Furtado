<script setup></script>
<template>
  <main>
    <h1>Contato</h1>
    <ul class="info">
      <li>
        <p>
          <span class="fa-regular fa-envelope"></span> Email:
          <span>henrique.furtadoifc@gmail.com</span>
        </p>
      </li>
      <li>
        <p><span class="fa-solid fa-phone"></span> Telefone: <span>+55 47 984223428</span></p>
      </li>
      <li>
        <p>
          <a href="https://www.github.com/henrique-furtado47"
            ><span class="fa-brands fa-github"></span> Github</a
          >
        </p>
      </li>
    </ul>
    <section class="josh">
      <a href="https://www.youtube.com/watch?v=BbeeuzU5Qc8"
        ><img src="/images/josh.png" alt="Josh Huthcerson"
      /></a>
    </section>
  </main>
</template>
<style scoped>
main {
  text-align: center;
  margin: 3rem 0 5vw 0;
}
h1 {
  font-size: 2rem;
  margin: 0 0 5vw 0;
}
p {
  font-size: 1.3rem;
}
li {
  margin: 10px 0;
}
img {
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  transition: 0.25s;
}

img:hover {
  transform: scale(1.1);
}
img:active {
  transform: scale(0.8);
}
</style>
