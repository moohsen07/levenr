<template>
  <div class="order-list">
    <v-container>
      <v-row>
        <v-col v-for="i in 5" :key="i" cols="12" sm="6" lg="4">
          <order-card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrderCard from './OrderCard.vue'
export default {
  components: { OrderCard },
}
</script>

<style>
</style>
