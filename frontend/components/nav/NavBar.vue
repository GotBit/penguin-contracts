<template>
  <div class="w-full h-28 bg-dark">
    <div
      class="flex max-w-[1920px] justify-between h-full items-center mx-auto px-8 lg:px-24 xl:px-[180px] 2xl:px-[315px]"
    >
      <div class="flex items-center">
        <nuxt-link to="/" class="mr-[112px]">
          <img class="min-w-[208px]" src="@/static/Penguin-logo.png" />
        </nuxt-link>
        <nuxt-link v-for="page of pages" :key="page.tag" :to="page.route">
          <span class="text-[18px] pr-8 font-semibold text-blue-text">
            {{ page.name }}
          </span>
        </nuxt-link>
      </div>
      <button class="px-4 py-3 rounded-md gradient">Connect Wallet</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { computed, ref } from '@nuxtjs/composition-api'

import { useUI } from '@/store/ui'
import BaseCard from '@/components/base/BaseCard.vue'

export default Vue.extend({
  components: { BaseCard },
  setup() {
    const ui = useUI()

    const pages = computed(() => ui.pages)
    const selectedPage = computed(() => ui.selectedPage)

    return {
      pages,
      selectedPage,
      setPage: ui.setSelectedPage,
    }
  },
})
</script>
<style scoped>
.gradient {
  background: linear-gradient(348.33deg, #0053be 8.56%, #009aec 91.44%);
}
</style>
