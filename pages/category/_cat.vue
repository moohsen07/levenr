<template>
  <div class="category-page">
    <div class="category-banner"></div>
    <v-breadcrumbs :items="items" class="justify-center text-capitalize">
      <template v-slot:divider>
        <i class="las la-long-arrow-alt-right"></i>
      </template>
    </v-breadcrumbs>
    <v-container>
      <div class="category-info text-center mb-8" data-aos="fade-up">
        <div class="text-h3 font-weight-bold text-uppercase">Hair Dryers</div>
        <p class="muted--text">
          Make every day a good hair day with the professional ghd hair dryer
          range. Each product in the collection is designed to achieve beautiful
          hairstyles that stand out
        </p>
      </div>
    </v-container>
    <v-select
      v-model="select"
      :items="filter"
      outlined
      label="Sort by"
      class="text-uppercase pl-3"
      style="width: 250px"
    ></v-select>

    <product-list />

    <app-panel-footer />
  </div>
</template>

<script>
import ProductList from '~/components/Product/CategoryList.vue'
import AppPanelFooter from '~/components/UI/AppPanelFooter.vue'
export default {
  components: { ProductList, AppPanelFooter },
  asyncData({ route }) {
    return {
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Category',
          href: '/category',
        },
        {
          text: route.params.cat,
          disabled: true,
        },
      ],
      filter: ['relevence', 'price - low to high', 'price - high to low'],
      select: 'relevence',
    }
  },
  computed: {},
}
</script>

<style lang="scss">
.category-page {
  .category-banner {
    background-image: url('~/assets/imgs/hair_dryers.webp');
    height: 50vh;
    background-size: cover;
    background-position: center;
  }
  .category-info {
    p {
      max-width: 500px;
      margin: auto;
    }
  }
}
</style>
