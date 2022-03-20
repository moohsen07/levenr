<template>
  <div class="product-looks">
    <div class="text-h4 text-uppercase font-bold text-center">Get The Look</div>
    <div class="looks-slider mt-4">
      <swiper :options="options">
        <swiper-slide v-for="look in productLooks" :key="look.id">
          <base-img :img="look.img" :alt="look.caption" />
          <div
            class="
              swiper-caption
              text-h6 text-center text-uppercase
              font-weight-bold
            "
          >
            {{ look.caption }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import BaseImg from '../UI/BaseImg.vue'
export default {
  components: { BaseImg },
  data() {
    return {
      options: {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 3000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      },
      productLooks: [
        {
          id: 1,
          img: 'straight.jpg',
          caption: 'Levenr Srtraight',
        },
        {
          id: 2,
          img: 'undone_waves.jpg',
          caption: 'undone waves',
        },
        {
          id: 3,
          img: 'beach_waves.jpg',
          caption: 'beach waves',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.looks-slider {
  .swiper-container {
    max-width: 500px;
    margin: auto;
    .swiper-slide {
      * {
        transition: 0.5s ease-in-out;
      }
      &:not(.swiper-slide-active) {
        opacity: 0.5;
        .swiper-caption {
          opacity: 0;
        }
      }
    }
  }
}
</style>
