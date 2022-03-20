<template>
  <div class="product-item">
    <v-card outlined class="product-card">
      <div class="product-images relative">
        <v-img
          :src="require(`~/assets/imgs/${product.img}`)"
          :alt="product.name"
        ></v-img>

        <v-img
          v-if="product.hoverdImg"
          :src="require(`~/assets/imgs/${product.hoverdImg}`)"
          class="hoverd-img"
        ></v-img>
      </div>

      <div class="card-body pa-2">
        <v-card-title
          class="
            product-card-title
            text-subtitle-1 text-uppercase
            font-weight-medium
            px-0
            pt-2
            pb-0
          "
          >{{ product.name }}</v-card-title
        >
        <v-card-text class="mx-0 pa-0">
          <rating :value="product.rating" :size="12" />
        </v-card-text>

        <div
          class="
            product-price
            d-flex
            justify-space-between
            align-center
            flex-wrap flex-sm-no-wrap
            mt-2
          "
        >
          <div class="price d-flex flex-column">
            <span
              v-if="product.discount"
              class="muted--text text-caption text-decoration-line-through"
              >{{ product.price }}.00 EGP</span
            >
            <span class="font-weight-medium text-uppercase text-body-2"
              >{{ product.discount ? afterDiscount : product.price }}.00
              Egp</span
            >
          </div>
          <div v-if="product.discount" class="offer">
            <v-chip
              class="font-weight-bold text-caption"
              label
              :light="$vuetify.theme.dark"
              small
              >{{ product.discount }}% OFF</v-chip
            >
          </div>
        </div>
        <add-to-basket />
      </div>
    </v-card>
  </div>
</template>

<script>
import AddToBasket from '../UI/AddToBasket.vue'
import Rating from '../UI/Rating.vue'
export default {
  components: { AddToBasket, Rating },
  props: ['product'],
  computed: {
    afterDiscount() {
      const pro = this.product
      const total = pro.price - pro.price / pro.discount
      return total
    },
  },
}
</script>

<style lang="scss">
.product-card {
  background-color: transparent !important;
  .product-card-title {
    word-break: normal;
  }
  .product-images {
    overflow: hidden;
    .hoverd-img {
      position: absolute !important;
      top: 0;
      left: 0;
      transition: 0.5s ease-in-out;
      opacity: 0;
    }
    &:hover {
      .hoverd-img {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
}
</style>
