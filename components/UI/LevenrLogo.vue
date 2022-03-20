<template>
  <nuxt-link to="/">
    <img
      class="Levenr-logo"
      alt="Levenr Logo"
      :src="require(`~/assets/imgs/logos/${logoSrc}.png`)"
      width="150"
    />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    logoSrc() {
      return this.dark ? 'logo-black' : 'logo-white'
    },
  },
}
</script>
<style lang="scss">
</style>
