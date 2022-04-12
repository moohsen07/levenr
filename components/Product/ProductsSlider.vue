<template>
  <div class="products-slider">
    <swiper :options="options">
      <slot></slot>
      <div
        class="swiper-control swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-control swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 20,
        speed: 800,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          500: {
            slidesPerView: 2.5,
          },
          776: {
            slidesPerView: 3.5,
          },
          1200: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss">
.products-slider {
  .swiper-slide {
    &:not(.swiper-slide-active) {
      transition: 0.5s ease-in-out;
      opacity: 0.5;
      .slide-content {
        transition: 0.5s ease-in-out;
        opacity: 0.2;
      }
    }
    @media (min-width: 992px) {
      &:not(.swiper-slide-active, .swiper-slide-prev, .swiper-slide-next) {
        pointer-events: none;
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
