<template>
  <v-card elevation="0" rounded="lg" color="transparent">
    <v-card-title class="py-0 pt-sm-2">orders summary</v-card-title>

    <v-list class="pt-0" color="transparent" dense>
      <v-list-item dense class="justify-space-between">
        <v-list-item-content>
          <v-list-item-title>Items Total</v-list-item-title>
        </v-list-item-content>
        <span class="muted--text overline">200 EGP</span>
      </v-list-item>

      <v-list-item class="justify-space-between">
        <v-list-item-content>
          <v-list-item-title>Delivery Fee</v-list-item-title>
        </v-list-item-content>
        <span class="muted--text overline">free Delivery</span>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item dense class="justify-space-between">
        <v-list-item-content>
          <v-list-item-title> Total </v-list-item-title>
        </v-list-item-content>
        <span class="muted--text overline">200 EGP</span>
      </v-list-item>
    </v-list>
    <v-btn
      large
      light
      block
      color="primary"
      class="font-weight-bold black--text"
      to="address"
      >Place Order</v-btn
    >
  </v-card>
</template>

<script>
export default {}
</script>

<style>
</style>
