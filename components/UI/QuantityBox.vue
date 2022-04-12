<template>
  <div class="quantity-box d-flex">
    <v-btn small color="muted" outlined icon @click="changeQuantity('dec')">
      <i class="las la-minus la-lg"></i>
    </v-btn>
    <span class="d-flex align-center px-5 text-body-1">{{ quantity }}</span>
    <v-btn small color="muted" outlined icon @click="changeQuantity('inc')">
      <i class="las la-plus la-lg"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    changeQuantity(type) {
      if (type === 'inc') {
        this.quantity++
      } else {
        if (this.quantity != 1) this.quantity--
      }
      this.$store.dispatch('cart/changeQuantity', this.quantity)
    },
  },
}
</script>

<style>
</style>
