<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="index.html">Blog</a></li>
          <li><a href="ft-works.html">Works</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="banner">
        <div class="imagem">
          <img src="../public/images/john.png" alt="Foto do John" />
        </div>
        <div class="texto">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p><button>Download Resume</button></p>
        </div>
      </section>
      <section class="posts">
        <h2>Recent posts</h2>
        <ul>
          <li>
            <h3>Making a design system from scratch</h3>
            <p class="data">12 Feb 2020 | Design, Pattern</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </li>
          <li>
            <h3>Creating pixel perfect icons in Figma</h3>
            <p class="data">12 Feb 2020 | Design, Pattern</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </li>
        </ul>
      </section>
      <section class="works">
        <h2>Featured works</h2>
        <ul>
          <li>
            <p>
              <img src="../public/images/dashboard.png" alt="Imagem de um dashboard" />
            </p>
            <h3>Designing Dashboards</h3>
            <p class="info"><span>2020</span> Dashboards</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </li>
          <li>
            <p>
              <img src="../public/images/mulher-rosa.png" alt="Vibrant Portraits" />
            </p>
            <h3>Vibrant Portraits of 2020</h3>
            <p class="info"><span>2018</span> Illustration</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <p>
        <a href="#"><span class="fa-brands fa-square-facebook"></span></a>
        <a href="#"><span class="fa-brands fa-instagram"></span></a>
        <a href="#"><span class="fa-brands fa-twitter"></span></a>
        <a href="#"><span class="fa-brands fa-linkedin"></span></a>
      </p>
      <p>Copyright ©2020 All rights reserved</p>
    </footer>
  </body>
</template>

<style scoped></style>
