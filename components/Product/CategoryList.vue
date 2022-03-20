<template>
  <div class="product-list">
    <v-container fluid>
      <v-row dense>
        <v-col cols="6" md="4" lg="3" v-for="i in 2" :key="i">
          <product-card
            :product="{
              ...product,
              id: i,
              img: `cat${i}.webp`,
              hoverdImg: `cat${i == 12 || i == 11 ? i - 2 : i + 2}.webp`,
            }"
          />
        </v-col>
        <v-col cols="12" md="4" lg="6">
          <video
            class="img-fluid"
            src="~/assets/videos/catVideo.webm"
            autoplay
            muted
            loop
          ></video>
        </v-col>
        <v-col cols="6" md="4" lg="3" v-for="i in 10" :key="i">
          <product-card
            :product="{
              ...product,
              id: i + 2,
              img: `cat${i}.webp`,
              hoverdImg: `cat${i == 12 || i == 11 ? i - 2 : i + 2}.webp`,
            }"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  data() {
    return {
      product: null,
    }
  },
  async fetch() {
    this.product = {
      name: 'Professional Hair Dryer in plum',
      discount: 10,
      price: 200,
      rating: 3.5,
    }
  },
}
</script>

<style>
</style>
