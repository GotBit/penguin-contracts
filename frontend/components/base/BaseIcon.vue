<template>
  <div v-html="path"></div>
</template>

<script lang="ts">
import icons from '../../svgs'
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    path(): string {
      return (icons as { [key: string]: string })[this.name]
    },
  },
})
</script>
