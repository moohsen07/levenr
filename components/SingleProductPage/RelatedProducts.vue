<template>
  <section class="related-products">
    <div
      class="
        primary--text
        text-h5 text-uppercase
        font-weight-bold
        text-center
        my-8
      "
    >
      <i class="las la-eye"></i> You May Also Like
    </div>
    <products-slider :imgs="relatedProducts">
      <swiper-slide v-for="(product, i) in relatedProducts" :key="i">
        <product-card
          :product="{
            img: product,
            hoverdImg: `cat${i == 8 || i == 7 ? i - 2 : i + 2}.webp`,
            name: 'GHD Professional Hair Dryer Diffuser',
            price: 200,
            rating: 4.5,
          }"
        >
        </product-card>
      </swiper-slide>
    </products-slider>
  </section>
</template>

<script>
import ProductCard from '../Product/ProductCard.vue'
import ProductsSlider from '../Product/ProductsSlider.vue'
export default {
  components: { ProductsSlider, ProductCard },
  data() {
    return {
      relatedProducts: null,
    }
  },
  async fetch() {
    return (this.relatedProducts = [
      'cat4.webp',
      'cat5.webp',
      'cat6.webp',
      'cat7.webp',
      'cat8.webp',
      'cat9.webp',
      'cat10.webp',
      'cat11.webp',
      'cat12.webp',
    ])
  },
}
</script>

<style>
</style>
