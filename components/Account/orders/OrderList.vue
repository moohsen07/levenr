<template>
  <div class="order-list">
    <v-container>
      <v-row>
        <v-col v-for="order in orders" :key="order" cols="12" sm="6" lg="4">
          <order-card :id="order" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrderCard from './OrderCard.vue'
export default {
  components: { OrderCard },
  data() {
    return {
      orders: 5,
    }
  },
}
</script>

<style>
</style>
