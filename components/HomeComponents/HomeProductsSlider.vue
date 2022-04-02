<template>
  <section class="mt-10">
    <div class="text-h4 text-uppercase font-bold text-center">
      Power Couples
    </div>
    <div class="power-slider mt-4">
      <products-slider>
        <swiper-slide v-for="(img, i) in sliderImgs" :key="i">
          <picture>
            <source :srcset="require(`~/assets/imgs/${img}`)" />
            <img
              class="img-fluid"
              :src="require(`~/assets/imgs/${img}`)"
              alt=""
            />
          </picture>
          <div class="slide-title text-h6 text-uppercase font-bold text-center">
            GHD Platinum+ & Rehab
          </div>
          <p class="caption text-center muted--text">
            Define and contour with the new ghd curve thin wand, a 14mm barrel
            creating tight curls from 3 seconds paired with ghd curly ever after
            for ultimate hold.
          </p>
        </swiper-slide>
      </products-slider>
    </div>
  </section>
</template>

<script>
import ProductsSlider from '../Product/ProductsSlider.vue'
export default {
  components: { ProductsSlider },
  data() {
    return {
      sliderImgs: [
        'slider-1.webp',
        'slider-2.webp',
        'slider-3.webp',
        'slider-4.webp',
        'slider-5.webp',
        'slider-6.webp',
        'slider-7.webp',
      ],
    }
  },
}
</script>

<style lang="scss" >
.power-slider {
  @media (min-width: 992px) {
    margin-bottom: 75px;
  }
  .swiper-slide {
    &:not(.swiper-slide-active) {
      transition: 0.5s ease-in-out;
      opacity: 0.2;
      .slide-content {
        transition: 0.5s ease-in-out;
        opacity: 0.2;
      }
    }
    @media (min-width: 992px) {
      &:not(.swiper-slide-active, .swiper-slide-prev, .swiper-slide-next) {
        transition: 0.5s ease-in-out;
        opacity: 0.2;
        .slide-content {
          transition: 0.5s ease-in-out;
          opacity: 0.2;
        }
      }
      &.swiper-slide-prev,
      &.swiper-slide-next {
        opacity: 1;
        .slide-content {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
  .swiper-control {
    color: #ccc;
    top: 40%;
    padding: 0 20px;
    @media (min-width: 992px) {
      &.swiper-button-next {
        right: 60px;
      }
      &.swiper-button-prev {
        left: 60px;
      }
    }
  }
}
</style>
