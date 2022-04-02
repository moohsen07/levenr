<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <levenr-logo />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LevenrLogo from '~/components/UI/LevenrLogo.vue'
export default {
  components: { LevenrLogo },
}
</script>

<style>
</style>
