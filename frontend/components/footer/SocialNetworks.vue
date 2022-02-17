<template>
  <div
    class="bg-socials w-[690px] flex justify-between pt-[62px] pb-[52px] px-[60px] rounded-3xl"
  >
    <nuxt-link
      v-for="item in socials"
      :key="item.name"
      :to="item.link"
      class="max-w-[48px]"
    >
      <img :src="item.ico" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    socials: [
      { name: 'discord', ico: '/icons/footer/socials/discord.svg', link: '#' },
      { name: 'reddit', ico: '/icons/footer/socials/reddit.svg', link: '#' },
      { name: 'twitter', ico: '/icons/footer/socials/twitter.svg', link: '#' },
      { name: 'facebook', ico: '/icons/footer/socials/facebook.svg', link: '#' },
      { name: 'instagram', ico: '/icons/footer/socials/instagram.svg', link: '#' },
      { name: 'youtube', ico: '/icons/footer/socials/youtube.svg', link: '#' },
    ],
  }),
})
</script>
<style scoped>
.bg-socials {
  background: linear-gradient(348.33deg, #0053be 8.56%, #009aec 91.44%);
}
</style>
