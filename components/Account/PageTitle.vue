<template>
  <div class="page-title">
    <v-btn icon text @click="$router.back(-1)" color="primary">
      <i class="las la-arrow-left la-2x"></i>
    </v-btn>
    <div class="text-left text-md-center text-h4 my-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
