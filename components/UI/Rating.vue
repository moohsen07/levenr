<template>
  <div class="app-rating d-flex align-center">
    <v-rating
      :value="value"
      color="primary"
      background-color="muted"
      length="5"
      dense
      half-increments
      readonly
      :size="size"
    ></v-rating>
    <div class="primary--text ml-1">{{ value }}/5</div>
  </div>
</template>

<script>
export default {
  props: ['value', 'size'],
}
</script>

<style>
</style>
