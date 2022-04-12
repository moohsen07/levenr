<template>
  <div class="product-intro">
    <div class="product-name text-uppercase font-weight-bold text-h5">
      GHD Helios Professional Hair Dryer in plum
    </div>
    <div class="d-flex justify-space-between align-center d-md-block">
      <div class="product-rating d-flex mb-2">
        <rating :value="4.5" :size="14" />
      </div>
      <div class="product-offer">
        <div class="badges d-flex items-center flex-wrap">
          <v-chip
            class="text-uppercase font-weight-bold text-caption mr-2 mt-2"
            label
            color="red"
            small
            >free shipping</v-chip
          >

          <div>
            <v-chip
              class="font-weight-bold text-caption mt-2"
              label
              :light="$vuetify.theme.dark"
              small
              >20% OFF</v-chip
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        product-summary
        font-weight-light
        muted--text
        text-body-2
        mt-md-5
        mb-md-3
      "
    >
      Give into desire with our 3-piece gift set featuring our award-winning
      SMART styler
    </div>
    <div class="product-colors">
      <span class="text-caption text-capitalize muted--text">color : plum</span>
      <div class="colors d-flex my-2">
        <div
          class="color"
          v-for="(color, i) in colors"
          :key="i"
          :style="{ background: color }"
          :class="{ active: i === 0 }"
        ></div>
      </div>
      <div class="product-price d-flex flex-column">
        <span
          class="
            muted--text
            text-overline text-decoration-line-through text-uppercase
          "
          >200 egp</span
        >
        <span class="text-h5 font-weight-light text-uppercase mt-n2"
          >180 egp</span
        >
      </div>
    </div>
    <div class="add-cart my-4">
      <add-to-basket />
    </div>
    <div class="warranty-returns muted--text text-body-2 font-weight-light">
      <span class="d-block">21 day no quibble returns policy</span>
      <span class="d-block">2 year warranty</span>
    </div>
  </div>
</template>

<script>
import AddToBasket from '../UI/AddToBasket.vue'
import AppBtn from '../UI/AppBtn.vue'
import Rating from '../UI/Rating.vue'
export default {
  components: { AppBtn, Rating, AddToBasket },
  props: ['colors'],
}
</script>

<style lang="scss">
.product-intro {
  padding: 0 10px;
  margin-top: 16px;
  // text-align: center;
  @media (min-width: 992px) {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    z-index: 5;
    max-width: 300px;
    margin-right: 15px;
    text-align: initial;
  }
  .product-colors {
    .colors {
      gap: 8px;
      .color {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #fff;
        cursor: pointer;
        &.active {
          border-color: $primary-color;
        }
      }
    }
  }
}
</style>
