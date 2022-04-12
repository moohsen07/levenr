<template>
  <div class="categories-page">
    <v-container>
      <page-title class="mb-5">Categories</page-title>
      <v-row>
        <v-col
          data-aos="fade-up"
          cols="6"
          lg="4"
          v-for="(item, i) in listItems"
          :key="i"
        >
          <nuxt-link
            class="text-decoration-none"
            :to="{ name: 'category-cat', params: { cat: item.title } }"
          >
            <div class="category-card text-center">
              <base-img
                :img="item.imgSrc + '.jpg'"
                :alt="item.title"
              ></base-img>
              <div class="category-item-title">{{ item.title }}</div>
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
    <app-panel-footer></app-panel-footer>
  </div>
</template>

<script>
import PageTitle from '~/components/Account/PageTitle.vue'
import AppPanelFooter from '~/components/UI/AppPanelFooter.vue'
import BaseImg from '~/components/UI/BaseImg.vue'
export default {
  components: { AppPanelFooter, PageTitle, BaseImg },
  asyncData({}) {
    const listItems = [
      {
        title: 'Hair Straighteners',
        name: 'category-cat',
        imgSrc: 'hair_stran',
      },
      {
        title: 'Hot Brushes',
        name: 'category-cat',
        imgSrc: 'hot_brushes',
      },
      {
        title: 'Hair Drayers',
        name: 'category-cat',
        imgSrc: 'hair_dryers',
      },
      {
        title: 'Hair Curlers',
        name: 'category-cat',
        imgSrc: 'all_curve',
      },
      {
        title: 'Hair Styling Products',
        name: 'category-cat',
        imgSrc: 'hair_products',
      },
      {
        title: 'Hair Brushes',
        name: 'category-cat',
        imgSrc: 'hair_brushes',
      },
    ]
    return { listItems }
  },
}
</script>


<style lang="scss">
.categories-page {
  padding-top: 50px;

  .category-card {
    border-radius: 10px;
    overflow: hidden;
    background: rgba($color: $primary-color, $alpha: 0.05);
    transition: 0.5s ease-in-out;
    &:hover {
      background: $primary-color;
      img {
        transform: scale(1.1);
      }
      .category-item-title {
        color: black;
      }
    }
    img {
      transition: 0.5s ease-in-out;
    }
    .category-item-title {
      transition: 0.5s ease-in-out;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 10px 0;
      font-size: 14px;
    }
  }
}
</style>
