<template>
  <div class="product-page">
    <div class="banner relative">
      <div class="main-swiper">
        <swiper :options="mainSwiper" ref="mainSwiper">
          <swiper-slide v-for="i in 5" :key="i">
            <base-img :img="`product${i}.webp`" alt="hair-dryer" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="thumbs-slider">
        <swiper :options="thumbsSwiper" ref="swiperThumbs">
          <swiper-slide v-for="i in 5" :key="i">
            <base-img :img="`product${i}.webp`" alt="sdf" />
          </swiper-slide>
        </swiper>
      </div>
      <product-intro
        :colors="colors"
        :data-aos="$vuetify.breakpoint.xs ? 'fade-up' : ''"
        data-aos-once="true"
      />
    </div>

    <v-container>
      <div class="mt-8 description-expand text-center">
        <div
          class="description-content"
          :style="{ height: expand ? 'auto' : '65px' }"
        >
          <p>
            A beautiful blow dry by birth-right, harness the power of the new
            ghd helios™ - the latest innovation in styling control. Featuring
            bespoke Aeroprecis™ technology, combining advanced internal
            aerodynamics to focus the high power airflow with a contoured
            precision nozzle for even heat distribution, this professional ghd
            hair dryer is a hero for better styling control, 8/10 agree*. The
            lightweight, brushless motor creates a powerful airflow travelling
            at 120kmph to drastically speed up styling, so you have more time to
            conquer the world. Ergonomically balanced for a lighter styling
            experience and adorned in a deep rich plum hue with elegant golden
            accents, ghd helios™ champions salon-quality like never before.
            Engineered to streamline airflow for a powerful yet precise
            performance, take their breath away with 30% more shine** and
            smoother results, 9/10 agree**. Varying power and temperature
            controls ensure that no matter your desired style or natural
            texture, you can achieve a stunning blow dry and flawless finish.
            And for 24 hour volume hold*** pair the ghd helios™ with ghd body
            goals - total volume foam. All hail the power of the ghd helios™.
            *Consumer testing on 101 women vs. their regular hair dryer
            **Technical testing, 2019, vs. naturally dried hair ***Technical
            testing after 24h in controlled humidity environment (50% RH 23°C)
          </p>
        </div>
        <v-btn icon plain class="expantion-btn" @click="expand = !expand">
          <i
            class="las primary--text la-2x"
            :class="expand ? 'la-angle-up' : 'la-angle-down'"
          ></i>
        </v-btn>
      </div>
    </v-container>

    <tab-panels :features="features" :technologies="technologies" />

    <related-products />

    <comments />

    <expantion-footer :axisY="500">
      <div class="product-footer-expantion">
        <div class="prodcut-name text-uppercase font-weight-bold text-h6">
          GHD HELIOS™ PROFESSIONAL HAIR DRYER IN PLUM
        </div>
        <div class="d-flex align-center my-4">
          <!-- <quantity-box size /> -->
          <div class="product-price text-h4 font-weight-bold primary--text">
            200 <span class="text-caption"> EGP </span>
          </div>
        </div>
        <add-to-basket />
      </div>
    </expantion-footer>
  </div>
</template>

<script>
import ProductIntro from '~/components/SingleProductPage/ProductIntro.vue'
import FeatureList from '~/components/SingleProductPage/Features/FeatureList.vue'
import BaseImg from '~/components/UI/BaseImg.vue'
import TabPanels from '~/components/SingleProductPage/TabPanels.vue'
import RelatedProducts from '~/components/SingleProductPage/RelatedProducts.vue'
import Comments from '~/components/SingleProductPage/Comments/Comments.vue'
import AddToBasket from '~/components/UI/AddToBasket.vue'
import ExpantionFooter from '~/components/UI/ExpantionFooter.vue'
export default {
  components: {
    BaseImg,
    ProductIntro,
    FeatureList,
    TabPanels,
    RelatedProducts,
    Comments,
    AddToBasket,
    ExpantionFooter,
  },
  data() {
    return {
      mainSwiper: {
        autoplay: { delay: 4000 },
        speed: 800,
        effect: 'fade',
        loop: true,
      },
      thumbsSwiper: {
        speed: 800,
        loop: true,
        slidesPerView: 4.3,
        spaceBetween: 10,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        breakpoints: {
          992: {
            direction: 'vertical',
          },
        },
      },
      expand: false,
      colors: ['#742D33', '#000', '#fff', '#1F3753', '#9D8B8F'],
      features: [
        {
          id: 1,
          img: 'features/feature1.webp',
          title: 'Longer life, brushless motor',
          body: 'Delivers a 120kmph airflow for a quick salon-worthy blow dry.',
        },
        {
          id: 2,
          img: 'features/feature2.webp',
          title: 'Aeroprecis™ technology',
          body: 'Bespoke areodynamic technology for intuitive styling with more precise control.',
        },
        {
          id: 3,
          img: 'features/feature3.jpg',
          title: 'Bespoke contoured nozzle',
          body: 'Designed to focus the high-power airflow for precise styling control.',
        },
        {
          id: 4,
          img: 'features/feature4.webp',
          title: 'Power & temperature controls',
          body: 'Variable contols including cool shot for drying, styling and setting your look.',
        },
        {
          id: 5,
          img: 'features/feature5.webp',
          title: 'Lightweight',
          body: 'Ergonomically balanced design and lightweight for comfortable use.',
        },
        {
          id: 6,
          img: 'features/feature6.jpg',
          title: 'Bespoke acoustic system technology',
          body: 'Ensuring low sound levels whilst you style.',
        },
        {
          id: 7,
          img: 'features/feature7.webp',
          title: 'Drastically cuts blowdry time',
          body: 'Faster styling so you have more time to take over the world.',
        },
        {
          id: 8,
          img: 'features/feature8.jpg',
          title: 'Longer life, brushless motor',
          body: 'Professional length cable for comfortable use.',
        },
      ],
      technologies: [
        {
          id: 1,
          src: 'technologies/banner1.webp',
          title: 'PRECISE STYLING CONTROL',
          body: 'Designed by ghds leading physicists, engineers and styling professionals for precision styling and 30% more shine*.',
        },
        {
          id: 2,
          src: 'technologies/banner2.webp',
          title: 'AEROPRECIS TECHNOLOGY',
          body: 'With a longer-life, brushless motor and advanced internal aerodynamics, the ghd helios™ creates a powerful airflow travelling at 120kmph.',
        },
        {
          id: 3,
          src: 'technologies/banner3.webp',
          title: 'POWER & TEMPERATURE CONTROLS',
          body: 'Take control with variable power and temperature settings, including a cool shot, for a professional quality blow dry.',
        },
        {
          id: 4,
          src: 'technologies/techno_video.mp4',
          title: 'ULTIMATE STYLING CONTROL',
          body: 'Combining power, speed and control, the innovative technology of the ghd helios™ delivers a smooth, shiny blow dry and drastically cuts blowdry time*.',
        },
        {
          id: 5,
          src: 'technologies/banner1.webp',
          title: 'POWER COUPLES',
          body: 'Partner the ghd helios with our ghd body goals total volume foam for 24 hour volume hold** and a superior blow dry.',
        },
      ],
    }
  },
  loading: true,
}
</script>

<style lang="scss">
.product-page {
  .banner {
    overflow: hidden;
    img {
      height: 100vw;
    }
    @media (min-width: 992px) {
      height: 100vh;
      .main-swiper {
        img {
          height: 100vh;
        }
      }
    }
    .thumbs-slider {
      @media (min-width: 929px) {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        z-index: 5;
        .swiper-wrapper {
          height: calc((100px + 10px) * 4);
        }
      }
      .swiper-slide {
        width: 100px;
        height: 100px;
        cursor: pointer;
        &.swiper-slide-active {
          border: 2px solid $primary-color;
        }
        img {
          height: 100% !important;
        }
      }
    }
  }
  .description-expand {
    .description-content {
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(to top, #121212, transparent);
        height: 22px;
        width: 100%;
      }
    }
  }
}
</style>
