import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/swiper-bundle.css";

import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'

import SwiperCore, {
  EffectCoverflow,
  EffectFade,
  Thumbs,
  Pagination,
  Navigation,
  Autoplay,

} from "swiper/core";

SwiperCore.use([EffectCoverflow, EffectFade, Thumbs, Pagination, Autoplay, Navigation]);

Vue.use(VueAwesomeSwiper)

Vue.component(Swiper)
Vue.component(SwiperSlide)
