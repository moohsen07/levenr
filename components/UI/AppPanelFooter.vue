<template>
  <v-app-bar
    v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
    bottom
    fixed
  >
    <v-tabs grow icons-and-text background-color="black" dark color="white">
      <v-tab to="/" class="text-capitalize">
        <!-- Home -->
        <i class="las la-home la-2x"></i>
      </v-tab>

      <v-tab to="/category" class="text-capitalize">
        <!-- Discover -->
        <i class="las la-compass la-2x"></i>
      </v-tab>

      <v-tab class="text-capitalize" to="/account/orders">
        <!-- Orders -->
        <i class="las la-archive la-2x"></i>
      </v-tab>
      <v-tab to="/account/login" class="text-capitalize">
        <!-- Profile -->
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
