<template>
  <v-tabs
    class="tab-panel mt-8"
    background-color="transparent"
    color="primary"
    grow
    centered
  >
    <v-tab class="text-h6 text-md-h5" :ripple="false"> Technology </v-tab>
    <v-tab class="text-h6 text-md-h5" :ripple="false"> Features </v-tab>
    <v-tab-item
      transition="fade-tansition"
      style="background: transparent !important"
    >
      <technologies-list :technologies="technologies" />
    </v-tab-item>
    <v-tab-item
      transition="fade-tansition"
      style="background: transparent !important"
    >
      <feature-list :features="features" />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import BaseImg from '../UI/BaseImg.vue'
import FeatureList from './Features/FeatureList.vue'
import technologiesList from './Technologies/TechnologiesList.vue'
export default {
  components: { FeatureList, technologiesList, BaseImg },
  props: ['features', 'technologies'],
}
</script>

<style lang="scss">
.tab-panel {
  .v-tabs-bar__content {
    @media (min-width: 992px) {
      max-width: max-content;
      margin: auto;
      .v-tabs-slider-wrapper {
        bottom: 4px;
      }
    }
    .v-tab {
      @media (min-width: 992px) {
        padding: 10px 60px;
        margin: 0 10px;
      }
    }
  }
  .theme--dark.v-tabs-items {
    background: transparent !important;
    .v-window__container {
      margin-top: 20px;
    }
  }
}
</style>
