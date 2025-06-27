<script setup></script>
<template>
  <main>
    <section class="dashb">
      <h2>Featured Works</h2>
      <ul>
        <li>
          <h3>Designing Dashboards with usability in mind</h3>
          <p class="info"><span>2020</span> Dashboard, User Experience Design</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae corrupti,
            possimus, reiciendis accusamus, voluptatibus quod veritatis non eligendi repellendus
            accusantium quas. Voluptatem ipsa aperiam repellat corrupti praesentium sit vel.
          </p>
          <img src="/images/team.png" alt="Times" />
        </li>
        <li>
          <h3>Designing Dashboards with usability in mind</h3>
          <p class="info"><span>2021</span> Dashboard, User Experience Design</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae corrupti,
            possimus, reiciendis accusamus, voluptatibus quod veritatis non eligendi repellendus
            accusantium quas. Voluptatem ipsa aperiam repellat corrupti praesentium sit vel.
          </p>
          <img src="/images/carro.png" alt="Carro" />
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

@media (min-width: 900px) {
  section.dashb h2 {
    text-align: center;
  }
  section.dashb ul {
    display: flex;
    justify-content: space-around;
  }

  section.dashb ul li {
    text-align: center;
    width: 40%;
  }
}
</style>
