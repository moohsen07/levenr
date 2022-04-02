<template>
  <div class="add-cart-btn text-uppercase mt-4">
    <v-btn
      class="overflow-hidden ralative px-0 black--text"
      large
      color="primary"
      block
      :loading="loading"
      :disabled="loading"
      @click="loader()"
    >
      Add to Basket
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    loader() {
      this.loading = true
      setTimeout(() => (this.loading = false), 3000)
    },
  },
}
</script>

<style>
</style>
