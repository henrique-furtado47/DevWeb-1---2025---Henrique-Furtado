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

<style scoped>
/* ============================================================================================
FOOTER E HEADER   
============================================================================================                            
*/

header ul li {
  text-align: center;
  padding: 10px 0 10px 0;
}

footer {
  text-align: center;
}

footer a {
  font-size: 2.3rem;
  margin: 20px 15px;
}

footer p {
  margin: 15px 0 15px;
}
/* ============================================================================================
ESPECÍFICO   
============================================================================================                            
*/
section.banner {
  text-align: center;
  padding: 0 5% 0 5%;
}

section.banner h1 {
  font-weight: bold;
  font-size: 2rem;
  margin: 10px 0 10px 0;
}

section.banner p button {
  background: #ff6464;
  border: none;
  color: #ffffff;
  display: inline-block;
  margin: 10px 0 50px;
  padding: 5px 10px 5px 10px;
  font-size: 1.5rem;
}

section.posts {
  background: #edf7fa;
  padding: 10px;
}

section.posts ul li {
  background: white;
  padding: 15px;
  margin: 12px 0px 12px 0px;
}

section.posts ul li h3 {
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0 0 15px;
}

section.posts ul li p {
  font-size: 1rem;
  margin: 15px 0px 15px 0px;
}

section.works {
  padding: 20px 10px 20px 10px;
}

section.works ul li {
  margin: 10px 0px 10px 0px;
}

section.works ul li h3 {
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 130%;
}

section.works ul li p.info {
  color: #8695a4;
}

section.works ul li p {
  margin: 10px 0;
}

section.works ul li p.info span {
  color: white;
  background: #142850;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 16px;
}

section.works ul {
  border-bottom: 1px solid #e0e0e0;
}

/* ============================================================================================
PAGINA FT-WORKS   
============================================================================================                            
*/
section.dashb {
  padding: 20px 10px 20px 10px;
}
section.dashb h2 {
  font-size: 2rem;
  text-align: left;
  margin: 20px 0 40px;
}
section.dashb ul li {
  margin: 20px 0 20px 0;
}
section.dashb ul li h3 {
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 130%;
  margin: 0 0 15px 0;
}

section.dashb ul li p {
  margin: 15px 0;
  color: black;
}

section.dashb ul li p.info {
  color: #21243d;
}

section.dashb ul li p.info span {
  background: #ff7c7c;
  color: white;
  border-radius: 16px;
  padding: 5px 10px;
  font-weight: bold;
}

/* ============================================================================================
        TELA PC
============================================================================================                            
*/
@media (min-width: 900px) {
  header ul {
    display: flex;
    justify-content: right;
  }

  header ul li {
    margin: 0px 20px 0px 20px;
  }

  section h2 {
    text-align: left;
    font-size: 1.5rem;
    margin: 10px;
  }

  section.banner {
    display: flex;
    flex-direction: row-reverse;
    text-align: left;
    padding: 5vw 10vw 5vw 10vw;
  }

  section.banner .texto {
    margin-right: 7vw;
  }

  section.posts,
  section.works {
    padding: 5vw 10vw 5vw 10vw;
  }

  section.posts ul,
  section.works ul {
    display: flex;
    justify-content: space-between;
  }
  section.posts ul li {
    padding: 2%;
  }
  section.posts ul li,
  section.works ul li {
    width: 45%;
  }

  section.posts ul li p.data {
    margin: 20px 0 20px;
  }

  section.works ul {
    border-bottom: none;
  }
}
</style>
