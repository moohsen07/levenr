<template>
  <v-app-bar v-if="$vuetify.breakpoint.xs" hide-on-scroll bottom rounded fixed>
    <v-tabs
      centered
      grow
      icons-and-text
      background-color="white"
      light
      color="black"
    >
      <v-tab to="/">
        Home
        <i class="las la-home la-2x"></i>
      </v-tab>

      <v-tab to="/category/hair drayer">
        Discover
        <i class="las la-compass la-2x"></i>
      </v-tab>

      <v-tab>
        Orders
        <i class="las la-archive la-2x"></i>
      </v-tab>
      <v-tab to="/account/login">
        Profile
        <i class="las la-user-alt la-2x"></i>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style>
</style>
