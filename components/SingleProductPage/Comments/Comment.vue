<template>
  <div class="comment-wrapper">
    <v-divider class="my-6"></v-divider>
    <v-row no-gutters>
      <v-col cols="12" sm="3" md="2" order="1" order-sm="0">
        <!-- <div class="comment-info">
          <div class="name text-h6">Alsh31</div>
          <div class="country text-body-2 font-weight-light muted--text">
            Manchester
          </div>
          <div class="comment-rating my-3">
            <rating :value="5" :size="15" />
          </div>
          <ul>
            <li class="pb-1 text-body-2">
              Age : <span class="muted--text font-weight-light"> 25</span>
            </li>
            <li class="pb-1 text-body-2">
              Gender :
              <span class="muted--text font-weight-light"> Female</span>
            </li>
            <li class="pb-1 text-body-2">
              Hair Length :
              <span class="muted--text font-weight-light"> Long</span>
            </li>
            <li class="pb-1 text-body-2">
              Hair type :
              <span class="muted--text font-weight-light"> Wavy, Curly</span>
            </li>
          </ul>
        </div> -->
      </v-col>
      <v-col cols="12">
        <div class="comment">
          <div class="comment-title text-uppercase font-weight-bold text-h6">
            Powerful But Gentle
          </div>
          <div class="comment-rating">
            <rating :value="5" :size="15" />
          </div>

          <div class="comment-body my-3">
            <p class="font-weight-light muted--text">
              I bought this to replace my existing GHD hairdryer of 7 years ,
              you can definitely feel the difference with this one it’s powerful
              but yet it is a light feel on you head . Hair is very soft
              ,manageable and shiny after use , although I do feel the body work
              is not as robust as my original. However overall i am very pleased
              eith this purchase and would highly recommend it .
            </p>
          </div>

          <div class="reviewer-name">
            BY <span class="muted--text">Alsh31</span>
          </div>
          <div class="comment-date text-caption font-weight-light muted--text">
            16 March 2022
          </div>

          <!-- <div class="progress-wrapper d-flex justify-space-between flex-wrap">
            <app-progress v-for="(prog, i) in progress" :key="i">
              {{ prog }}
            </app-progress>
          </div> -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import Rating from '~/components/UI/Rating.vue'
import AppProgress from './AppProgress.vue'
export default {
  components: { Rating, AppProgress },
  data() {
    return {
      progress: ['Features', 'Performance', 'Quality'],
    }
  },
}
</script>

<style>
</style>
