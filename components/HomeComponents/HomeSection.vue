<template>
  <section class="home-section">
    <v-row align="center" no-gutters>
      <v-col
        cols="12"
        md="8"
        :order-md="index % 2 == 0 ? '1' : ''"
        :data-aos="index % 2 == 0 ? 'fade-left' : 'fade-right'"
      >
        <video
          class="img-fluid"
          v-if="checkVideo"
          :src="require(`~/assets/videos/${section.bg}`)"
          loop
          muted
          autoplay
        ></video>
        <picture v-else>
          <source :src="require(`~/assets/imgs/${section.bg}`)" />

          <img
            class="img-fluid"
            :src="require(`~/assets/imgs/${section.bg}`)"
            :alt="section.title"
          />
        </picture>
      </v-col>
      <v-col cols="12" md="4">
        <v-container>
          <div class="px-md-3">
            <div class="text-h4 text-uppercase font-bold">
              {{ section.title }}
            </div>
            <p class="muted--text">
              {{ section.body }}
            </p>
            <app-btn
              class="text-uppercase text-center"
              :block="$vuetify.breakpoint.xs"
              >Shop Now</app-btn
            >
          </div>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import AppBtn from '~/components/UI/AppBtn.vue'

export default {
  props: {
    section: {
      required: true,
      type: Object,
    },
    index: {
      required: false,
    },
  },
  components: { AppBtn },
  computed: {
    checkVideo() {
      return this.section.bg.slice(-4) == 'webm' ? true : false
    },
  },
}
</script>

<style lang="scss">
.home-section {
  video {
    position: relative;
    z-index: 5;
  }

  @media (min-width: 992px) {
    img,
    video {
      max-height: 550px;
      object-fit: cover;
      margin-top: -50px;
    }
  }
}
</style>
