<template>
  <div class="checkout">
    <v-container>
      <div class="checkout-breadcrumps d-flex align-center">
        <div class="text-h5 text-uppercase">Checkout</div>
        <v-divider vertical class="mx-4"></v-divider>
        <v-breadcrumbs>
          <v-breadcrumbs-item to="/" class="text-h6">
            <i class="las la-home la-large"></i>
          </v-breadcrumbs-item>
          <v-breadcrumbs-divider>
            <i class="las la-angle-right"></i>
          </v-breadcrumbs-divider>
          <v-breadcrumbs-item class="text-body-1" disabled>
            checkout
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </div>

      <nav class="checkout-nav ma-4">
        <v-breadcrumbs :items="listItems">
          <template v-slot:divider>
            <v-icon color="muted">las la-angle-right</v-icon>
          </template>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :to="item.url">
              <div class="checkout-nav-item d-flex align-center">
                <v-icon color="primary" size="23px">{{ item.icon }}</v-icon>
                <span class="overline pl-2 muted--text">{{ item.name }}</span>
              </div>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </nav>
      <nuxt-child></nuxt-child>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'secondary',
  middleware: 'checkout',
  asyncData({ route, redirect }) {
    const listItems = [
      {
        name: 'cart',
        icon: 'las la-shopping-cart',
        url: 'cart',
      },
      {
        name: 'address',
        icon: 'las la-home',
        url: 'address',
      },
      {
        name: 'payment',
        icon: 'las la-credit-card',
        url: 'payment',
      },
    ]

    return {
      listItems,
    }
  },
  mounted() {
    document.documentElement.style.overflowY = 'auto'
  },
}
</script>

<style lang="scss">
.checkout-nav {
  li {
    margin-bottom: 5px;
  }
  .checkout-nav-item {
    .v-icon {
      padding: 4px;
      background: rgba($color: $primary-color, $alpha: 0.1);
      border-radius: 4px;
    }
  }
  .v-breadcrumbs__item--disabled {
    .checkout-nav-item {
      .v-icon {
        background: $primary-color;
        color: black !important;
        box-shadow: 0px 0px 5px 0px $primary-color;
      }
      span {
        color: $primary-color !important;
      }
    }
  }
}
</style>
