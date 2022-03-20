<template>
  <v-card elevation="0" rounded="lg" color="transparent">
    <v-card-title class="py-0 pt-sm-2">Order Summary</v-card-title>

    <v-list class="pt-0" color="transparent" dense>
      <v-list-item dense class="justify-space-between">
        <v-list-item-content>
          <v-list-item-title>Items Total</v-list-item-title>
        </v-list-item-content>
        <span>200 EGP</span>
      </v-list-item>

      <v-list-item class="justify-space-between">
        <v-list-item-content>
          <v-list-item-title>Delivery Fee</v-list-item-title>
          <v-list-item-subtitle
            >shipping will calculated at checkout</v-list-item-subtitle
          >
        </v-list-item-content>
        <span>---- EGP</span>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item dense class="justify-space-between">
        <v-list-item-content>
          <v-list-item-title> Total </v-list-item-title>
        </v-list-item-content>
        <span>200 EGP</span>
      </v-list-item>
    </v-list>
    <v-btn large light block class="font-weight-bold">Go To Checkout</v-btn>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
</style>
