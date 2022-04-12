<template>
  <div class="main">
    <banner-video />
    <home-section
      v-for="(section, i) in sections"
      :key="section.id"
      :section="section"
      :index="i"
    ></home-section>

    <home-products-slider></home-products-slider>

    <home-section
      :section="{
        bg: 'Professional_Global.jpg',
        title: 'Recommended By Professionals',
        body: '“The ghd original story started back in 2001 and the classic styler has been loved by both the consumer and professional ever since. Now with a 21st century upgrade and equipped with single-zone technology, ghd original is the perfect tool for those starting out on their ghd journey and wanting to create beautiful simple styles with shine and smoothness.”',
      }"
    />
    <v-divider class="my-4"></v-divider>

    <products-looks />
    <app-panel-footer />
  </div>
</template>

<script>
import BannerVideo from '~/components/HomeComponents/BannerVideo.vue'
import HomeSection from '~/components/HomeComponents/HomeSection.vue'
import ProductsLooks from '~/components/HomeComponents/ProductsLooks.vue'
import HomeProductsSlider from '~/components/HomeComponents/HomeProductsSlider.vue'
import AppPanelFooter from '~/components/UI/AppPanelFooter.vue'
export default {
  name: 'IndexPage',
  components: {
    BannerVideo,
    HomeSection,
    HomeProductsSlider,
    ProductsLooks,
    AppPanelFooter,
  },
  asyncData() {
    return {
      sections: [
        {
          id: 1,
          bg: 'brush.webp',
          title: 'Exclusive Offer',
          body: 'Use code BRUSH to receive a free ghd Oval Dressing Brush (worth £23) with selected hair straighteners, hair dryers, hot brushes and curlers.',
        },
        {
          id: 2,
          bg: 'WhitePlatPers.webp',
          title: 'Free Personalisation',
          body: 'Make your mark with FREE personalisation (worth £10) on selected ghd hair straighteners and hair dryers',
        },
        {
          id: 3,
          bg: 'hairIron.webp',
          title: 'The Cilt Classic Is Back',
          body: 'Changing the face, and hair, of styling, the new and improved ghd original is recommended by professionals.',
        },
        {
          id: 4,
          bg: 'Campaign_Video.webm',
          title: 'The Original Styler',
          body: 'The perfect tool for quick, effortless straightening and easy curls and waves, the ghd original styler is suitable for all hair types and lengths.',
        },
        {
          id: 5,
          bg: 'machines.webp',
          title: 'The Stylers Range',
          body: 'ghd has a range of styling tools for all hair types and lengths, all featuring the optimum styling temperature of 185ºC for looks that last.',
        },
        {
          id: 6,
          bg: 'women.webp',
          title: 'GHD. It Means Good Hair Day',
          body: 'Good Hair Day is coming, celebrate with our award-winning styling essentials.',
        },
      ],
    }
  },

  created() {},
}
</script>



