<template>
  <v-card class="order-card" outlined rounded="lg">
    <div class="order-details pa-3">
      <ul>
        <li>
          <span class="muted--text">Order No. : </span>
          <v-chip
            label
            small
            color="primary"
            text-color="black"
            class="font-weight-bold"
            >#445</v-chip
          >
        </li>
        <li>
          <span class="muted--text">Order status : </span>
          <span class="primary--text font-weight-bold">On the Way</span>
        </li>
        <li>
          <span class="muted--text">Delivery to : </span>
          <span class="white--text">Maddi str. 35, Andrya street</span>
        </li>
        <li>
          <span class="muted--text">Purchase Date : </span>
          <span class="white--text">Jan 25/22</span>
        </li>
        <li>
          <span class="muted--text">Total Payment : </span>
          <span class="white--text font-weight-bold">500 EGP</span>
        </li>
      </ul>
    </div>
    <div class="order-products black pa-3">
      <swiper :options="options" class="py-2">
        <swiper-slide v-for="i in 4" :key="i">
          <order-product />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <v-btn
      block
      color="primary"
      class="black--text"
      :to="$route.fullPath + '/order/' + id"
      >Track The order</v-btn
    >
  </v-card>
</template>

<script>
import OrderProduct from './OrderProduct.vue'
export default {
  props: ['id'],
  components: {
    OrderProduct,
  },
  data() {
    return {
      options: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 10,
        speed: 800,
      },
    }
  },
}
</script>

<style lang="scss">
.order-products {
  .order-product {
    img {
      border-radius: 10px;
    }
  }
}
</style>
