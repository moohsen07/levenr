<template>
  <div class="cart-list">
    <cart-item v-for="i in 7" :key="i" />
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
  components: { CartItem },
}
</script>

<style>
</style>
