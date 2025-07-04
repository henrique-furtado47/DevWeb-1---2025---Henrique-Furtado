import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBooksStore = defineStore('books', () => {
  const books = ref([
    {
      id: 1,
      title: 'Comigo na livraria',
      cover: '/covers/comigo-na-livraria.png',
      price: 23.24,
      author: 'Martha Medeiros',
    },
    {
      id: 2,
      title: 'Quincas Borba',
      cover: '/covers/quincas-borba.png',
      price: 23.24,
      author: 'Machado de Assis',
    },
    {
      id: 3,
      title: 'A livraria',
      cover: '/covers/a-livraria.png',
      price: 13.94,
      author: 'Penelope Fitzgerald',
    },
    {
      id: 4,
      title: 'A hora da estrela',
      cover: '/covers/a-hora-da-estrela.png',
      price: 16.84,
      author: 'Clarice Lispector',
    },
    {
      id: 5,
      title: 'O alienista',
      cover: '/covers/o-alienista.png',
      price: 266.92,
      author: 'Machado de Assis',
    },
    {
      id: 6,
      title: 'Mar morto',
      cover: '/covers/mar-morto.png',
      price: 13.95,
      author: 'Jorge Amado',
    },
    {
      id: 7,
      title: 'Grande sertão',
      cover: '/covers/grande-sertao-veredas.png',
      price: 26.04,
      author: 'Guimarães Rosa',
    },
    {
      id: 8,
      title: 'Flor de poemas',
      cover: '/covers/flor-de-poema.png',
      price: 15.81,
      author: 'Cecília Meireles',
    },
    {
      id: 9,
      title: 'O Alcorão Sagrado',
      cover: '/covers/dois-mundos-um-heroi.png',
      price: 64.9,
      author: 'Rezendeevil',
    },
  ])

  return { books }
})
