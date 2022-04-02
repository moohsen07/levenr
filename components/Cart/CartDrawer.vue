<template>
  <div class="cart-drawer px-5">
    <cart-header @backBtn="$emit('closeDrawer')" />
    <main class="">
      <cart-list />
    </main>
    <footer class="my-5">
      <v-btn large light block class="font-weight-bold" to="/checkout/address"
        >Go To Checkout</v-btn
      >
    </footer>
  </div>
</template>

<script>
import CartHeader from './CartHeader.vue'
import CartList from './CartList.vue'
export default {
  components: { CartList, CartHeader },
}
</script>

<style lang="scss">
.cart-drawer {
  main {
    height: calc(100vh - 145px);
    overflow-y: auto;
    @media (min-width: 992px) {
      padding-right: 10px;
    }
  }
}
</style>
