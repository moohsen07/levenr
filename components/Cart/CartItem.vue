<template>
  <v-card rounded="lg" class="cart-item d-flex align-center pa-2 mb-3">
    <v-btn class="remove-product" icon absolute right top small>
      <i class="las la-times"></i>
    </v-btn>
    <div class="cart-item-img">
      <base-img img="cat4.webp" alt="Hair Dryer in plum" />
    </div>
    <div class="item-details ml-4">
      <v-card-title class="text-body-1 pt-0 px-0"
        >Hair Dryer in plum</v-card-title
      >
      <v-card-subtitle class="text-caption px-0 pb-1 muted--text"
        >Give into desire with our 3-piece gift set featuring
      </v-card-subtitle>
      <div class="d-flex align-center flex-wrap">
        <quantity-box />
        <div
          class="
            product-price
            primary
            text-body-2
            font-weight-medium
            black--text
            ml-2
            px-2
            rounded-lg
          "
        >
          200 <span>EGP</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import BaseImg from '../UI/BaseImg.vue'
import QuantityBox from '../UI/QuantityBox.vue'
export default {
  components: { BaseImg, QuantityBox },
}
</script>

<style lang="scss">
.cart-item {
  .cart-item-img {
    width: 75px;
    img {
      border-radius: 20px;
    }
  }
  .product-price {
    span {
      font-size: 10px;
    }
  }
  .remove-product {
    top: 5px !important;
    right: 5px !important;
  }
}
</style>
