<template>
  <div class="orders-history">
    <div class="orders-banner relative">
      <v-container>
        <header>
          <div
            class="back-home text-uppercase muted--text"
            @click="$router.push('/')"
          >
            <i class="las la-arrow-left"></i>
            <span class="overline">Back to home</span>
          </div>
          <div class="text-h4 font-weight-bold">Orders History</div>
          <p class="muted--text">
            You can search or track your order by order number
          </p>
        </header>
      </v-container>
    </div>

    <div class="track-order-container">
      <v-container>
        <div class="track-order-search">
          <v-text-field
            v-model="search"
            outlined
            label="Track your order"
            type="text"
            prepend-inner-icon="las la-search"
          ></v-text-field>
        </div>
        <div class="filter-orders">
          <v-select
            class="d-inline-block mr-2"
            v-model="itemsByStatus.selected"
            :items="itemsByStatus.items"
            dense
            outlined
            hide-details="auto"
            background-color="#121212"
            style="width: 120px"
          ></v-select>

          <v-select
            class="d-inline-block"
            v-model="itemsByDate.selected"
            :items="itemsByDate.items"
            dense
            outlined
            hide-details="auto"
            background-color="#121212"
            style="width: 120px"
          ></v-select>
        </div>
      </v-container>
    </div>
    <!-- orders list -->
    <order-list />
    <app-panel-footer />
  </div>
</template>

<script>
import OrderList from '~/components/Account/orders/OrderList.vue'
import AppPanelFooter from '~/components/UI/AppPanelFooter.vue'
export default {
  components: { AppPanelFooter, OrderList },
  data() {
    return {
      search: '',
      itemsByStatus: {
        selected: 'All',
        items: ['All', 'Pending', 'On the way', 'Delivered'],
      },
      itemsByDate: {
        selected: 'Date',
        items: ['Date', 'Last Week', 'Last Month', 'Last Year'],
      },
    }
  },
}
</script>

<style lang="scss">
.orders-history {
  .orders-banner {
    background-image: url('~/assets/imgs/women.webp');
    height: 25vh;
    background-position: top;
    background-size: cover;
    header {
      position: absolute;
      bottom: -10px;
      .back-home {
        cursor: pointer;
      }
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: calc(100% + 10px);
      background: linear-gradient(
        to top,
        #121212,
        rgba($color: #121212, $alpha: 0.7)
      );
    }
  }
}
</style>
