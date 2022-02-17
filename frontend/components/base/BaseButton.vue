<template>
  <base-card
    class="h-[60px] px-[42px] py-[22px] text-[14px] select-none"
    @click="!(disable || pressed || notInteractive) ? $emit('click') : null"
    :inset="pressed"
    :inverse="inverse"
    :class="{
      'cursor-pointer hover:opacity-75': !(disable || pressed || notInteractive),
      'opacity-30': disable,
    }"
  >
    <slot />
  </base-card>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseCard from './BaseCard.vue'

export default Vue.extend({
  components: { BaseCard },
  props: {
    disable: Boolean,
    pressed: Boolean,
    inverse: Boolean,
    notInteractive: Boolean,
  },
})
</script>
