<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" v-for="feature in features" :key="feature.id">
          <feature
            :src="feature.img"
            :title="feature.title"
            :body="feature.body"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Feature from './Feature.vue'
export default {
  components: { Feature },
  props: ['features'],
}
</script>

<style>
</style>
