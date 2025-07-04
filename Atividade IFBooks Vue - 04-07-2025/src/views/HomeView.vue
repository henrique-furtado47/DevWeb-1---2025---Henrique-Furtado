<script setup>
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <h2>Noc Ognia</h2>
        <p>
          Noc ognia é um romance de Erich-Emmanuel Schmitt, que narra a história de um homem que
          vive em um mundo onde as pessoas não podem mais sonhar. O livro é uma reflexão sobre a
          importância dos sonhos e da imaginação na vida humana. Erich-Emmanuel Schmitt é um autor
          francês conhecido por suas obras que exploram temas filosóficos e existenciais. Ele é um
          dos autores mais traduzidos da França e suas obras têm sido amplamente elogiadas pela
          crítica.
        </p>
        <button>Acessar página do livro</button>
      </div>
      <div class="hero-image">
        <img src="/hero.png" alt="Hero Image" />
      </div>
    </section>

    <section class="featured">
      <div>
        <span class="mdi mdi-truck"></span>
        <h2>Frete grátis para SC</h2>
      </div>
      <div>
        <span class="mdi mdi-star"></span>
        <h2>Livros recomendados</h2>
      </div>
      <div>
        <span class="mdi mdi-book-open-page-variant"></span>
        <h2>Mais vendidos</h2>
      </div>
    </section>

    <section class="books">
      <ul>
        <li class="book">
          <img src="/covers/comigo-na-livraria.png" alt="Comigo na livraria" />
          <h2 >Comigo na livraria</h2>
          <p  class="book-author">Martha Medeiros</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 23.24</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/quincas-borba.png" alt="Quincas Borba" />
          <h2 >Quincas Borba</h2>
          <p  class="book-author">Machado de Assis</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 23.24</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/a-livraria.png" alt="A livraria" />
          <h2 >A livraria</h2>
          <p  class="book-author">Penelope Fitzgerald</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 13.94</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/a-hora-da-estrela.png" alt="A hora da estrela" />
          <h2 >A hora da estrela</h2>
          <p  class="book-author">Clarice Lispector</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 16.84</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/o-alienista.png" alt="O alienista" />
          <h2 >O alienista</h2>
          <p  class="book-author">Machado de Assis</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 266.92</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/mar-morto.png" alt="Mar morto" />
          <h2 >Mar morto</h2>
          <p  class="book-author">Jorge Amado</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 13.95</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/grande-sertao-veredas.png" alt="Grande sertão" />
          <h2 >Grande sertão</h2>
          <p  class="book-author">Guimarães Rosa</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 26.04</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
        <li  class="book">
          <img  src="/covers/flor-de-poema.png" alt="Flor de poemas" />
          <h2 >Flor de poemas</h2>
          <p  class="book-author">Cecília Meireles</p>
          <span  class="price-and-like"
            ><p  class="book-price">R$ 15.81</p>
            <span  class="mdi mdi-heart-outline"></span></span
          ><button >
            <span  class="mdi mdi-cart"></span>Comprar
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>
<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 9vw;
  border-bottom: 2px solid #27ae6099;

  & h2 {
    color: #382c2c;
    font-size: 3rem;
    font-weight: 700;
  }

  & .hero-content {
    width: 50%;
    padding-right: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    & h3.outlined {
      background-color: transparent;
      color: #27ae60;
      border: 2px solid #27ae60;
      padding: 15px 20px;
      border-radius: 5px;
      font-size: 1rem;
    }

    & button {
      margin-top: 20px;
    }

    p {
      width: 70%;
    }
  }

  & .hero-image {
    width: 50%;
    text-align: right;
    padding-right: 4vw;

    & img {
      max-width: 100%;
      height: auto;
    }
  }
}

button {
  background-color: #27ae60;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  gap: 20px;
  display: flex;
  justify-content: center;

  &.outlined {
    background-color: transparent;
    color: #27ae60;
    border: 2px solid #27ae60;
  }

  &.plain {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
  }
}

.featured {
  display: flex;
  padding: 3vh 8vw;
  border-bottom: 2px solid #27ae6099;

  & div {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 10px;

    & span {
      font-size: 2rem;
    }

    & h2 {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  & article:nth-child(2) {
    border-left: 1px solid #27ae6099;
    border-right: 1px solid #27ae6099;
  }
}

.books ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5vh 8vw;

  & .book {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: calc(100% / 4 - 42px);
    margin: 20px;

    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    & .book-author {
      font-size: 1rem;
    }

    & .book-price {
      font-size: 1.2rem;
      font-weight: 700;
    }

    & .price-and-like {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      & .mdi-heart-outline {
        font-size: 1.3rem;
        color: #27ae60;
      }
    }
  }
}
</style>
