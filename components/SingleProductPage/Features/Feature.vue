<template>
  <div class="feature">
    <v-row>
      <v-col cols="3">
        <base-img :img="src" :alt="title" />
      </v-col>
      <v-col cols="9">
        <div class="feature-content">
          <div class="feature-title">{{ title }}</div>
          <div class="feature-title muted--text font-weight-light text-body-2">
            {{ body }}
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BaseImg from '~/components/UI/BaseImg.vue'
export default {
  components: { BaseImg },
  props: ['src', 'title', 'body'],
}
</script>

<style>
</style>
