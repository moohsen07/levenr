<template>
  <div class="technologies-wrapper">
    <technology
      v-for="(tech, i) in technologies"
      :key="tech.id"
      :index="i"
      :src="tech.src"
      :title="tech.title"
      :body="tech.body"
    ></technology>
  </div>
</template>

<script>
import Technology from './Technology.vue'
export default {
  components: { Technology },
  props: ['technologies'],
}
</script>

<style>
</style>
