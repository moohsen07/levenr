<template>
  <div class="product-item">
    <v-card outlined class="product-card">
      <nuxt-link class="text-decoration-none" :to="`/product/${product.id}`">
        <div class="product-images relative">
          <picture>
            <source :srcset="require(`~/assets/imgs/${product.img}`)" />
            <img
              class="img-fluid"
              :src="require(`~/assets/imgs/${product.img}`)"
              alt=""
            />
          </picture>
          <picture>
            <source :srcset="require(`~/assets/imgs/${product.hoverdImg}`)" />
            <img
              class="img-fluid hoverd-img"
              :src="require(`~/assets/imgs/${product.hoverdImg}`)"
              alt=""
            />
          </picture>
        </div>
      </nuxt-link>

      <div class="card-body pa-2">
        <nuxt-link
          class="text-decoration-none white--text"
          :to="`/product/${product.id}`"
        >
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
        </nuxt-link>
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
          <div class="price d-flex align-center flex-wrap">
            <span
              v-if="product.discount"
              class="muted--text text-caption text-decoration-line-through mr-2"
              >{{ product.price }}.00 EGP</span
            >
            <span class="font-weight-medium text-uppercase text-body-1"
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
      transform: scale(0.9);
    }
    &:hover {
      .hoverd-img {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>
