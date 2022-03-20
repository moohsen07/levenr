<template>
  <ul class="list-items d-flex">
    <li
      v-for="(link, i) in listItems"
      :key="i"
      class="text-uppercase text-overline"
    >
      <nuxt-link
        class="text-decoration-none white--text"
        :to="{
          name: link.name,
          params: { cat: link.title != 'home' ? link.title : '' },
        }"
        >{{ link.title }}</nuxt-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ['listItems'],
}
</script>

<style>
</style>
