<script setup>
const projects = [
  { name: 'Atividade AirBnB - 21-05-2025', href: '../Atividade AirBnB - 21-05-2025/index.html' },
  {
    name: 'Atividade Animaneco - 02-04-2025',
    href: '../Atividade Animaneco - 02-04-2025/index.html',
  },
  { name: 'Atividade Bullet - 28-03-2025', href: '../Atividade Bullet - 28-03-2025/index.html' },
  { name: 'Atividade Duna - 19-03-2025', href: '../Atividade Duna - 19-03-2025/index.html' },
  { name: 'Atividade Forms - 28-03-2025', href: '../Atividade Forms - 28-03-2025/index.html' },
  {
    name: 'Atividade IFBooks Vue - 04-07-2025',
    href: '../Atividade IFBooks Vue - 04-07-2025/index.html',
  },
  { name: 'Atividade IFC - 26-03-2025', href: '../Atividade IFC - 26-03-2025/index.html' },
  {
    name: 'Atividade Portfolio CSS - 04-04-2025',
    href: '../Atividade Portfolio CSS - 04-04-2025/index.html',
  },
  {
    name: 'Atividade Right Numbers - 28-05-2025',
    href: '../Atividade Right Numbers - 28-05-2025/index.html',
  },
  { name: 'Atividade SoundMy - 23-04-2025', href: '../Atividade SoundMy - 23-04-2025/index.html' },
  { name: 'Atividade Taxi - 30-04-2025', href: '../Atividade Taxi - 30-04-2025/index.html' },
  {
    name: 'Atividade ToDoList - 30-05-2025',
    href: '../Atividade ToDoList - 30-05-2025/index.html',
  },
  {
    name: 'Atividade WhatIsTheFlag - 06-06-2025',
    href: '../Atividade WhatIsTheFlag - 06-06-2025/index.html',
  },
  { name: 'Prova DevWeb 1 - 16-05-2025', href: '../Prova DevWeb 1 - 16-05-2025/index.html' },
]
</script>
<template>
  <main>
    <section class="dashb">
      <h2>Portfolio de Sites</h2>
      <ul class="portfolio-list">
        <li v-for="project in projects" :key="project.name">
          <a :href="project.href" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
        </li>
      </ul>
    </section>
  </main>
</template>
<style scoped>
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

section.dashb ul.portfolio-list {
  display: grid;
  gap: 12px;
}

section.dashb ul.portfolio-list li {
  margin: 0;
}

section.dashb ul.portfolio-list li a {
  display: block;
  padding: 12px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: #21243d;
}

section.dashb ul.portfolio-list li a:hover {
  border-color: #ff7c7c;
  color: #ff7c7c;
}

@media (min-width: 900px) {
  section.dashb h2 {
    text-align: center;
  }
  section.dashb ul.portfolio-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
