<template>
  <div class="quantity-box">
    <v-btn-toggle borderless color="primary" :dense="!size">
      <v-btn :large="size" @click="changeQuantity('dec')">
        <i class="las la-minus la-lg"></i>
      </v-btn>
      <span class="d-flex align-center px-5 text-body-1">{{ quantity }}</span>
      <v-btn :large="size" @click="changeQuantity('inc')">
        <i class="las la-plus la-lg"></i>
      </v-btn>
    </v-btn-toggle>
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
      if (type === 'inc') this.quantity++
      else {
        if (this.quantity != 1) this.quantity--
      }
    },
  },
}
</script>

<style>
</style>
