<template>
  <div class="tech-banner relative">
    <base-img v-if="src.slice(-4) === 'webp'" :img="src" :alt="title" />
    <div v-else class="video-wrapper relative">
      <video
        @click="togglePlayVideo()"
        :src="require(`~/assets/imgs/${src}`)"
        :poster="require(`~/assets/imgs/product1.webp`)"
        muted
        width="100%"
        height="500"
        style="object-fit: cover; cursor: pointer"
      ></video>
      <v-overlay absolute v-if="!videoPlayed" color="black"></v-overlay>
      <v-btn
        v-if="!videoPlayed"
        class="play-btn"
        absolute
        fab
        large
        color="red"
        @click="togglePlayVideo()"
      >
        <v-icon x-large>las la-play</v-icon>
      </v-btn>
    </div>
    <v-container class="py-0">
      <div
        class="tech-banner-content text-md-center"
        :data-aos="index % 2 == 0 ? 'fade-left' : 'fade-right'"
        data-aos-anchor-placement="bottom"
        :class="
          src.slice(-4) === 'webp' && $vuetify.breakpoint.mdAndUp
            ? 'absolute-content'
            : 'py-5'
        "
        :style="index % 2 == 0 ? 'right : 50px' : 'left : 100px'"
      >
        <div
          class="
            banner-content-title
            text-uppercase
            font-weight-bold
            text-h5 text-sm-h4
          "
        >
          {{ title }}
        </div>
        <p class="muted--text font-weight-light">
          {{ body }}
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import BaseImg from '~/components/UI/BaseImg.vue'
export default {
  components: { BaseImg },
  props: ['index', 'src', 'title', 'body'],
  data() {
    return {
      videoPlayed: false,
    }
  },
  methods: {
    togglePlayVideo() {
      const video = document.querySelector('video')
      if (this.videoPlayed) {
        this.videoPlayed = false
        video.pause()
      } else {
        this.videoPlayed = true
        video.play()
      }
    },
  },
}
</script>

<style lang="scss">
.tech-banner {
  .tech-banner-content {
    &.absolute-content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      max-width: 500px;
      text-align: initial !important;
    }
  }
  .play-btn {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
}
</style>
