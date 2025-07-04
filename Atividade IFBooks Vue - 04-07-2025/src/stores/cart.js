import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({
    items: [],
    total: 0,
  })

  function addBook(book) {
    console.log(book)
  }

  return { cart, addBook }
})

