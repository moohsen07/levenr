<template>
  <v-btn class="app-btn my-2 px-8 py-5" outlined :block="block"
    ><slot></slot
  ></v-btn>
</template>

<script>
export default {
  props: {
    block: {
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
