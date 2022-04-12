<template>
  <nav>
    <v-app-bar
      :absolute="!fixedNav"
      :fixed="fixedNav"
      :color="fixedNav ? 'black' : 'transparent'"
      :elevation="fixedNav ? 24 : 0"
    >
      <v-toolbar-title>
        <levenr-logo v-if="!navDrawer" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <nav-list-items :listItems="listItems" v-if="!checkBreakpoints" />

      <v-spacer></v-spacer>

      <div class="nav-icons">
        <v-btn dark icon @click="searchWidget = true">
          <i class="las la-search"></i>
        </v-btn>
        <v-menu
          v-if="$vuetify.breakpoint.mdAndUp"
          open-on-hover
          transition="slide-y-transition"
          attach
          left
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" icon>
              <i class="las la-user-alt"></i>
            </v-btn>
          </template>

          <v-list class="py-0">
            <v-list-item
              class="px-3 py-1"
              dense
              color="muted"
              to="/account/login"
            >
              <v-icon class="pr-1" dense>las la-user-alt</v-icon>
              <v-list-item-title>Your Profile</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="px-3 py-1"
              dense
              color="muted"
              to="/account/orders"
            >
              <v-icon class="pr-1" dense>las la-archive</v-icon>
              <v-list-item-title>Your Orders</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn dark icon @click="cartDrawer = true">
          <v-badge
            :content="$store.getters['cart/cartLength']"
            :value="$store.getters['cart/cartLength']"
            color="red"
            overlap
          >
            <v-icon> las la-shopping-bag </v-icon>
          </v-badge>
        </v-btn>

        <v-btn dark icon v-if="checkBreakpoints" @click="navDrawer = true">
          <i class="las la-bars"></i>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="navDrawer"
      fixed
      right
      color="black"
      width="350px"
      height="auto"
    >
      <nav-drawer :listItems="listItems" @closeDrawer="navDrawer = false" />
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="cartDrawer"
      fixed
      right
      color="black"
      width="auto"
      height="auto"
    >
      <cart-drawer @closeDrawer="cartDrawer = false" />
    </v-navigation-drawer>

    <search-widget v-model="searchWidget" @closeSearch="searchWidget = false" />
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
      searchWidget: false,
      fixedNav: false,
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
    if (this.navDrawer || this.cartDrawer || this.searchWidget)
      document.documentElement.style.overflowY = 'hidden'
    else document.documentElement.style.overflowY = 'auto'
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 300) this.fixedNav = true
      else this.fixedNav = false
    }
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
