<template>
  <base-icon :name="name" :class="{ highlight: selected }" />
</template>

<script lang="ts">
import icons from '../../svgs'
import Vue from 'vue'

import BaseIcon from '@/components/base/BaseIcon.vue'

export default Vue.extend({
  components: {
    BaseIcon,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    selected: Boolean,
  },
})
</script>

<style>
.highlight > *,
.highlight > * > *,
.highlight > * > * > * {
  fill: #61bbff;
}
</style>
