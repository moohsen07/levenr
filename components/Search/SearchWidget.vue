<template>
  <v-fade-transition>
    <div
      v-show="value"
      class="search-widget"
      v-bind="$attrs"
      @click="$emit('updateValue', false)"
    >
      <div class="search-input relative mt-5 mt-md-10">
        <v-container>
          <div class="d-flex justify-space-between align-senter">
            <label class="muted--text text-md-h5 caption text-uppercase mb-4"
              >What are you looking for ?</label
            >
            <v-btn icon small @click="$emit('closeSearch')">
              <v-icon>las la-times</v-icon>
            </v-btn>
          </div>
          <v-slide-y-transition>
            <v-text-field
              v-show="value"
              prepend-inner-icon="las la-search la-2x"
              label="search for any product"
              outlined
              shaped
              hide-details="auto"
              :autofocus="value"
            />
          </v-slide-y-transition>
        </v-container>
      </div>
      <!-- result -->

      <div class="result-wrapper">
        <v-container>
          <div class="products-wrapper" v-if="product">
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" sm="6" md="4">
                <product-card
                  :product="{
                    ...product,
                    id: i,
                    img: `cat${i}.webp`,
                    hoverdImg: `cat${i == 12 || i == 11 ? i - 2 : i + 2}.webp`,
                  }"
                />
              </v-col>
            </v-row>
          </div>
          <div class="no-result">
            <div class="text-h5 text-center">
              <v-icon x-large color="red">las la-exclamation-circle</v-icon>
              <div class="mt-2">We can't find this product</div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </v-fade-transition>
</template>

<script>
import ProductCard from '../Product/ProductCard.vue'
export default {
  components: { ProductCard },
  props: ['value'],
  data() {
    return {
      product: null,
      //  {
      //   name: 'Professional Hair Dryer in plum',
      //   discount: 10,
      //   price: 200,
      //   rating: 3.5,
      // },
    }
  },
}
</script>

<style lang="scss">
.search-widget {
  position: fixed;
  background: rgba($color: #000000, $alpha: 0.9);
  width: 100%;
  height: 100%;
  z-index: 100000;
}
</style>
