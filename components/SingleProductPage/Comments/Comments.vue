<template>
  <section class="comments mt-12">
    <v-container>
      <div
        class="
          primary--text
          text-h5 text-uppercase
          font-weight-bold
          text-center
          my-8
        "
      >
        <i class="las la-star"></i> Product Reviews
      </div>
      <header class="d-flex flex-column align-center text-center">
        <rating :value="4.5" :size="25" />
        <div class="product-name">
          GHD HELIOS™ PROFESSIONAL HAIR DRYER IN PLUM
          <span class="text-body-2">rating review</span>
        </div>
      </header>

      <v-row>
        <v-col cols="12" md="6" v-for="i in 6" :key="i">
          <comment />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Rating from '~/components/UI/Rating.vue'
import AppProgress from './AppProgress.vue'
import Comment from './Comment.vue'
export default {
  components: { Rating, AppProgress, Comment },
}
</script>

<style>
</style>
