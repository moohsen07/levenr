<template>
  <div class="nav-drawer">
    <div class="pa-5 d-flex justify-space-between align-center">
      <levenr-logo />
      <v-btn icon @click="$emit('closeDrawer')">
        <i class="las la-times la-2x"></i>
      </v-btn>
    </div>

    <v-list class="drawer-list-items pl-5 pb-7">
      <v-list-item v-for="(link, i) in listItems" :key="i" class="">
        <nuxt-link
          class="white--text"
          style="overflow: hidden"
          :to="{
            name: link.name,
            params: { cat: link.title != 'home' ? link.title : '' },
          }"
        >
          <img :src="require(`~/assets/imgs/${link.imgSrc}.jpg`)" alt="" />

          <span
            class="
              item-link
              absolute
              font-weight-bold
              text-uppercase text-overline
            "
            >{{ link.title }}</span
          >
        </nuxt-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import LevenrLogo from '../UI/LevenrLogo.vue'
export default {
  components: { LevenrLogo },
  props: ['listItems'],
}
</script>

<style lang="scss" >
.drawer-list-items {
  height: calc(100vh - 50px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
