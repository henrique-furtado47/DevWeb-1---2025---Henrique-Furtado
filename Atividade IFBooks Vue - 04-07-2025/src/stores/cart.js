import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({
    items: [],
    total: 0,
  })

  function addBook(book) {
    let items = cart.value.items
    if (!items.includes(book)) {
      items.push(book)
      cart.value.total += book.price
      console.log(cart.value)
    }
  }

  return { cart, addBook }
})
