<template>
  <div class="banner-video white--text">
    <video src="~assets/videos/hero-video.webm" autoplay muted loop></video>
    <div class="hero">
      <v-container>
        <div class="text-uppercase text-h4 text-sm-h2">A cult classic</div>
        <p>
          Reintroducing ghd's original professional styler that began the good
          hair day journey, for guaranteed sleek, smooth and shiny hair.
        </p>
        <app-btn class="text-uppercase white black--text">Shop Now</app-btn>
      </v-container>
    </div>
  </div>
</template>

<script>
import AppBtn from '../UI/AppBtn.vue'
export default {
  components: { AppBtn },
}
</script>

<style lang="scss" scoped>
.banner-video {
  position: relative;
  height: 100vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero {
    position: absolute;
    top: 50%;
    text-align: center;
    @media (min-width: 767px) {
      width: max-content;
      left: 50%;
      transform: translateX(-50%);
      p {
        max-width: 60%;
        margin: auto;
      }
    }
    div {
      font-weight: bold;
    }
    p {
      font-weight: lighter;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.7);
  }
}
</style>
