<template>
  <div class="w-full text-center bg-[#10184E] pb-11 relative">
    <SocialNetworks class="mx-auto" />
    <img class="pt-[180px] mx-auto" src="@/static/logo.png" />
    <div class="mt-20 mb-28 w-full max-w-[1920px] flex justify-around mx-auto">
      <div class="flex flex-col">
        <nuxt-link
          v-for="link in links"
          :key="link.name"
          :to="link.link"
          class="self-start text-[18px] leading-5 mb-8"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
      <div class="flex flex-col">
        <nuxt-link
          v-for="link in links2"
          :key="link.name"
          :to="link.link"
          class="self-start text-[18px] leading-5 mb-8"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
      <div class="flex">
        <img class="w-[100px] h-[100px] mr-6 mt-6" src="@/static/illuvium.png" />
        <div class="flex flex-col items-start">
          <span class="text-[22px] mb-7">ILV price</span>
          <span class="text-[18px] mb-4">$796.66</span>
          <div class="flex items-center">
            <img class="mr-[10px]" src="@/static/icons/arrow-down-red.svg" />
            <span class="mt-1 text-[18px] text-[#DB5063]">-6.49%</span>
          </div>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-left text-[22px]">Available on</h3>
        <div class="flex">
          <div class="flex mt-8 mr-10">
            <nuxt-link
              v-for="item in resourses"
              :key="item.name"
              :to="item.link"
              class="flex mb-8 mr-10"
            >
              <img class="w-5 h-5" :src="item.img" />
              <span class="text-[18px] ml-2">{{ item.name }}</span>
            </nuxt-link>
          </div>
        </div>
        <div class="flex">
          <div class="flex mt-5 mr-10">
            <nuxt-link
              v-for="item in resourses2"
              :key="item.name"
              :to="item.link"
              class="flex mb-8 mr-10"
            >
              <img class="w-5 h-5" :src="item.img" />
              <span class="text-[18px] ml-2">{{ item.name }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <span class="text-blue-text">Illuvium © 2022, All rights reserved</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialNetworks from './SocialNetworks.vue'
export default Vue.extend({
  components: { SocialNetworks },
  data: () => ({
    links: [
      { name: 'Staking', link: '#' },
      { name: 'Illuviary', link: '#' },
      { name: 'IlluviDex', link: '#' },
      { name: 'Whitepaper', link: '#' },
    ],
    links2: [
      { name: 'Governance', link: '#' },
      { name: 'FAQ', link: '#' },
      { name: 'Contributors', link: '#' },
      { name: 'Careers', link: '#' },
    ],
    resourses: [
      { name: 'Binance', img: '/icons/footer/binance.png', link: '#' },
      { name: 'Sushi', img: '/icons/footer/sushi.png', link: '#' },
      { name: 'KuCoin', img: '/icons/footer/kucoin.png', link: '#' },
    ],
    resourses2: [
      { name: 'linch', img: '/icons/footer/linch.png', link: '#' },
      { name: 'OKEx', img: '/icons/footer/okex.png', link: '#' },
      { name: 'CoinSpot', img: '/icons/footer/coinspot.png', link: '#' },
    ],
  }),
})
</script>
<style scoped></style>
