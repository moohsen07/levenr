<template>
  <div class="order-product pb-2">
    <v-row dense>
      <v-col cols="4">
        <base-img img="cat10.webp" alt="order.name" />
      </v-col>
      <v-col cols="7">
        <div class="product-name font-weight-bold">Levener Hair Dryer</div>
        <p class="muted--text mb-1 body-2">The fatest, most powerful dryer</p>
        <div class="product-price">
          <span class="muted--text">Item price : </span>
          <span class="white--text font-weight-bold">500 EGP</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BaseImg from '~/components/UI/BaseImg.vue'
export default {
  components: { BaseImg },
}
</script>

<style>
</style>
