<template>
  <nav>
    <v-app-bar absolute color="transparent" elevation="0">
      <v-toolbar-title>
        <levenr-logo v-if="!navDrawer" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <nav-list-items :listItems="listItems" v-if="!checkBreakpoints" />

      <v-spacer></v-spacer>

      <div class="nav-icons">
        <v-btn dark icon>
          <i class="las la-search"></i>
        </v-btn>

        <v-btn dark icon @click="cartDrawer = true">
          <i class="las la-shopping-bag"></i>
        </v-btn>

        <v-btn
          small
          dark
          icon
          v-if="checkBreakpoints"
          @click="navDrawer = true"
        >
          <i class="las la-bars"></i>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="navDrawer"
      absolute
      right
      color="black"
      width="350px"
    >
      <nav-drawer :listItems="listItems" @closeDrawer="navDrawer = false" />
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="cartDrawer"
      absolute
      right
      color="black"
      width="auto"
    >
      <cart-drawer @closeDrawer="cartDrawer = false" />
    </v-navigation-drawer>
  </nav>
</template>
<script>
import CartDrawer from '../Cart/CartDrawer.vue'
import LevenrLogo from '../UI/LevenrLogo.vue'
import NavDrawer from './NavDrawer.vue'
import NavListItems from './NavListItems.vue'
export default {
  components: { LevenrLogo, NavListItems, NavDrawer, CartDrawer },
  data() {
    return {
      listItems: [],
      navDrawer: false,
      cartDrawer: false,
    }
  },
  async fetch() {
    this.listItems = [
      {
        title: 'home',
        name: 'index',
        imgSrc: 'home',
      },
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
  },
  computed: {
    checkBreakpoints() {
      if (this.$vuetify.breakpoint.lg) {
        return false
      }
      return true
    },
  },
  updated() {
    if (this.navDrawer || this.cartDrawer)
      document.documentElement.style.overflowY = 'hidden'
    else document.documentElement.style.overflowY = 'auto'
  },
}
</script>

<style lang="scss" >
nav {
  z-index: 5555;
  .list-items {
    list-style: none;
    gap: 16px;
    .nuxt-link-exact-active {
      color: $primary-color !important;
    }
  }
  .drawer-list-items {
    .item-link {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .nav-icons {
    i {
      font-size: 25px;
      &.la-search {
        transform: rotate(270deg);
      }
    }
  }
}
</style>
