<template>
  <div
    class="flex items-center justify-center card"
    @click="$emit('click')"
    :class="{
      inset,
      'text-light-gray bg-light-light-gray': !inverse,
      'inverse bg-light-blue text-white': inverse,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    inset: Boolean,
    inverse: Boolean,
  },
})
</script>

<style scoped>
.card {
  box-shadow: 5px 5px 10px rgba(209, 217, 230, 0.5), -5px -5px 10px #ffffff;
  border-radius: 16px;
}

.card.inset {
  box-shadow: inset -8px -8px 10px #ffffff, inset 8px 8px 10px #d1d9e6;
}

.card.inverse {
  box-shadow: 5px 5px 10px #c3dbf0, -5px -5px 10px rgba(255, 255, 255, 0.5);
}
</style>
