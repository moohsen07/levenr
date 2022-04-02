<template>
  <div class="cart-page">
    <v-row>
      <v-col cols="12" sm="7" lg="8" data-aos="fade-up">
        <cart-list />
      </v-col>
      <v-col class="d-none d-sm-block" sm="5" lg="4" data-aos="fade-up">
        <amount-card style="background: #1e1e1e !important" />
      </v-col>
    </v-row>
    <expantion-footer :axisY="0">
      <amount-card />
    </expantion-footer>
  </div>
</template>

<script>
import AmountCard from '~/components/Cart/AmountCard.vue'
import CartHeader from '~/components/Cart/CartHeader.vue'
import CartList from '~/components/Cart/CartList.vue'
import ExpantionFooter from '~/components/UI/ExpantionFooter.vue'
export default {
  components: { CartHeader, CartList, AmountCard, ExpantionFooter },
  layout: 'secondary',
  created() {},
}
</script>

<style lang="scss">
</style>
