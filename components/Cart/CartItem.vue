<template>
  <v-card rounded="lg" class="cart-item d-flex align-center pa-2 mb-3">
    <div class="remove-product absolute">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon small v-bind="attrs" v-on="on">
            <i class="las la-times"></i>
          </v-btn>
        </template>
        <span>Delete</span>
      </v-tooltip>
    </div>
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
      <div class="d-flex align-stretch flex-wrap">
        <quantity-box />
        <div
          class="
            text-h6
            product-price
            primary--text
            ml-2
            flex-grow-1
            rounded-lg
            d-flex
            justify-center
            align-center
          "
        >
          200
          <span class="pl-1 overline align-self-end">EGP</span>
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
    background: #333;
  }
  .remove-product {
    top: 5px !important;
    right: 5px !important;
  }
}
</style>
