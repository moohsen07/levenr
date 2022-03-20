<template>
  <picture>
    <source :srcset="require(`~/assets/imgs/${img}`)" />
    <img
      class="img-fluid"
      :src="require(`~/assets/imgs/${img}`)"
      :alt="alt"
      style="object-fit: cover"
    />
  </picture>
</template>

<script>
export default {
  props: ['img', 'alt'],
}
</script>

<style>
</style>
