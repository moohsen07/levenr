<template>
  <div class="tech-banner relative">
    <base-img v-if="src.slice(-4) === 'webp'" :img="src" :alt="title" />
    <video
      v-else
      :src="require(`~/assets/imgs/${src}`)"
      controls
      muted
      width="100%"
      height="500"
      style="object-fit: cover"
    ></video>
    <v-container class="py-0">
      <div
        class="tech-banner-content text-md-center"
        :data-aos="index % 2 == 0 ? 'fade-left' : 'fade-right'"
        data-aos-anchor-placement="bottom"
        :class="
          src.slice(-4) === 'webp' &&
          ($vuetify.breakpoint.md || $vuetify.breakpoint.lg)
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
}
</style>
