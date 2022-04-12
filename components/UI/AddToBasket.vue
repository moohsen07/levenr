<template>
  <div class="add-cart-btn text-uppercase mt-4">
    <v-btn
      class="overflow-hidden ralative px-0 black--text"
      large
      color="primary"
      block
      :loading="loading"
      :disabled="loading"
      @click="addToCart()"
    >
      Add to Basket
    </v-btn>

    <div class="alert">
      <v-alert
        v-model="alert"
        :color="alertData.success ? 'success' : 'error'"
        dense
        prominent
        :type="alertData.success ? 'success' : 'info'"
        transition="scroll-y-transition"
      >
        {{ alertData.msg }}
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      alert: false,
      alertData: {},
    }
  },
  methods: {
    async addToCart() {
      this.loading = true
      const res = await this.$store.dispatch('cart/addToCart', {
        name: 'ahmed',
        id: 5,
        quantity: 1,
      })
      this.alertData = await res
      setTimeout(() => {
        this.alert = true
        this.loading = false
      }, 1000)
      setTimeout(() => {
        this.alert = false
      }, 3000)
    },
  },
}
</script>

<style lang="scss">
.alert {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  z-index: 11111;
  width: 90%;
  @media (min-width: 776px) {
    width: auto;
  }
}
</style>
