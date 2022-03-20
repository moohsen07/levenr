<template>
  <div class="progrees">
    <div class="progress-name font-weight-light"><slot></slot></div>
    <div class="d-flex align-center">
      <v-progress-linear
        :value="100"
        color="primary"
        height="10"
        style="width: 100px"
      ></v-progress-linear>
      <span class="text-overline font-weight-thin ml-2">5/5</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
