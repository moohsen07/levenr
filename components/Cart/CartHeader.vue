<template>
  <header>
    <div class="text-center relative pb-5 pt-3">
      <div class="text-h5 font-weight-meduim text-capitalize">
        shopping Cart
      </div>
      <v-btn icon absolute top left @click="$emit('backBtn')">
        <i class="las la-arrow-left la-2x"></i>
      </v-btn>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
</style>
