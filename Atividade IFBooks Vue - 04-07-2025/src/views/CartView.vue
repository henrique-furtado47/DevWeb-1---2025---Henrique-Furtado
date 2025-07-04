<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <section class="cart">
      <h2>Carrinho</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cart-item">
              <img src="/covers/a-hora-da-estrela.png" alt="A hora da estrela" />
              <div class="cart-item-info">
                <p class="cart-item-title">A hora da estrela</p>
                <p class="cart-item-author">Clarice Lispector</p>
                <p class="cart-item-price">R$ 16.84</p>
              </div>
            </td>
            <td>
              <div class="cart-item-quantity">
                <button class="plain"><span class="mdi mdi-minus"></span></button> 1
                <button class="plain"><span class="mdi mdi-plus"></span></button>
              </div>
            </td>
            <td class="cart-item-subtotal">R$ 16.84</td>
          </tr>
          <tr>
            <td class="cart-item">
              <img src="/covers/a-livraria.png" alt="A livraria" />
              <div class="cart-item-info">
                <p class="cart-item-title">A livraria</p>
                <p class="cart-item-author">Penelope Fitzgerald</p>
                <p class="cart-item-price">R$ 13.94</p>
              </div>
            </td>
            <td>
              <div class="cart-item-quantity">
                <button class="plain"><span class="mdi mdi-minus"></span></button> 1
                <button class="plain"><span class="mdi mdi-plus"></span></button>
              </div>
            </td>
            <td class="cart-item-subtotal">R$ 13.94</td>
          </tr>
          <tr>
            <td class="cart-item">
              <img src="/covers/comigo-na-livraria.png" alt="Comigo na livraria" />
              <div class="cart-item-info">
                <p class="cart-item-title">Comigo na livraria</p>
                <p class="cart-item-author">Martha Medeiros</p>
                <p class="cart-item-price">R$ 23.24</p>
              </div>
            </td>
            <td>
              <div class="cart-item-quantity">
                <button class="plain"><span class="mdi mdi-minus"></span></button> 1
                <button class="plain"><span class="mdi mdi-plus"></span></button>
              </div>
            </td>
            <td class="cart-item-subtotal">R$ 23.24</td>
          </tr>
        </tbody>
      </table>
      <a href="/" class=""><button class="outlined">Voltar para loja</button></a>
      <div class="cart-summary">
        <div class="cupom">
          <input type="text" placeholder="Código do cupom" /><button>Inserir cupom</button>
        </div>
        <div class="summary">
          <h2>Total da Compra</h2>
          <div class="summary-items">
            <span>Produtos</span> <span>R$ 54.02</span><span>Frete</span> <span> Grátis</span>
            <span>Total</span><span>R$ 54.02</span>
          </div>
          <button>Ir para pagamento</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 8vw;
  border-bottom: 2px solid #27ae6099;

  & h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #27ae60;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    margin: 40px 0;

    & th,
    td {
      padding: 10px;
      text-align: left;
    }

    & th {
      border-bottom: 2px solid #27ae6099;
      font-size: 1.2rem;
      font-weight: 700;
    }

    & td {
      border-bottom: 1px solid rgb(128, 128, 128);
      font-size: 1rem;
    }

    & .cart-item-quantity {
      display: flex;
      align-items: center;
    }

    & .cart-item-subtotal {
      font-size: 1.1rem;
      font-weight: 700;
    }

    & .cart-item {
      display: flex;
      align-items: center;
      gap: 20px;

      & img {
        width: 80px;
        height: auto;
      }

      & .cart-item-info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & .cart-item-title {
          font-size: 1.2rem;
          font-weight: 700;
        }
        & .cart-item-author {
          font-size: 1rem;
        }
        & .cart-item-price {
          font-size: 1.1rem;
          font-weight: 600;
        }
      }
    }
  }

  & .cart-summary {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .cupom {
      display: flex;
      align-items: center;
      margin-top: 80px;
      gap: 10px;

      & input {
        width: 350px;
        height: 50px;
        border-radius: 5px;
        font-size: 1rem;
        border: 2px solid rgb(128, 128, 128);
        padding: 5px;
      }
    }

    & .summary {
      border: 1px solid rgb(128, 128, 128);
      padding: 1vw;

      & h2 {
        font-size: 1.2rem;
        font-weight: 700;
        color: black;
      }

      & .summary-items {
        display: grid;
        grid-template-columns: 3fr 1fr;

        & span {
          padding: 10px 0;
          border-bottom: 1px solid rgb(128, 128, 128);
        }
      }

      & button {
        margin-top: 20px;
      }
    }
  }
}
</style>
