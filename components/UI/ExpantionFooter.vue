<template>
  <div class="expantion-footer">
    <v-expand-transition>
      <v-footer
        v-if="$vuetify.breakpoint.xs && showFooter"
        fixed
        padless
        color="black"
        elevation="5"
        rounded="xl"
        class="rounded-b-0 pa-4 pt-0 d-block"
        v-touch="{ down: () => swipe('down'), up: () => swipe('up') }"
        ref="footer"
      >
        <div class="swipe-footer text-center muted--text">
          <i class="las la-minus la-3x"></i>
        </div>
        <slot></slot>
      </v-footer>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  props: ['axisY'],
  data() {
    return {
      showFooter: false,
    }
  },
  methods: {
    swipe(dir) {
      const footer = this.$refs.footer.$el
      const footerHeight = footer.offsetHeight
      if (dir == 'down')
        footer.style.transform = `translateY(${footerHeight - 48}px)`
      else if (dir == 'up') footer.style.transform = 'translateY(0px)'
    },
  },
  mounted() {
    if (this.$vuetify.breakpoint.xs) {
      if (this.axisY === 0) this.showFooter = true
      else {
        window.addEventListener('scroll', (e) => {
          if (window.scrollY >= this.axisY) {
            this.showFooter = true
          } else {
            this.showFooter = false
          }
        })
      }
    }
  },
}
</script>

<style lang="scss">
.expantion-footer {
  position: relative;
  z-index: 10;
  footer {
    transition: all 0.2s ease-in-out;
  }
}
</style>
