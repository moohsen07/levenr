<template>
  <v-card rounded="lg" class="cart-item d-flex pa-2 mb-3">
    <div class="remove-product absolute">
      <v-btn
        color="red lighten-2"
        icon
        rounded
        @click="deleteFromCart({ name: 'adkl', id: 5 })"
      >
        <v-icon>las la-trash </v-icon>
      </v-btn>
    </div>
    <div class="cart-item-img">
      <base-img img="cat4.webp" alt="Hair Dryer in plum" />
    </div>
    <div class="item-details ml-4">
      <v-card-title class="text-body-1 py-0 px-0"
        >Hair Dryer in plum</v-card-title
      >

      <div class="text-h6 product-price muted--text">
        200
        <span class="overline">EGP</span>
      </div>
      <div class="d-flex align-stretch flex-wrap">
        <quantity-box :size="$vuetify.breakpoint.mobile" />
      </div>
    </div>
  </v-card>
</template>

<script>
import BaseImg from '../UI/BaseImg.vue'
import QuantityBox from '../UI/QuantityBox.vue'
export default {
  components: { BaseImg, QuantityBox },
  data() {
    return {}
  },
  methods: {
    deleteFromCart(product) {
      this.$store.dispatch('cart/deleteFromCart', product)
    },
  },
  created() {},
}
</script>

<style lang="scss">
.cart-item {
  min-width: 320px;
  .cart-item-img {
    width: 100px;
  }

  .remove-product {
    top: 3px !important;
    right: 5px !important;
  }
}
</style>
