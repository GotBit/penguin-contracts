<template>
  <div class="w-full bg-dark text-center pb-[290px] pt-[136px]">
    <h1 class="text-[60px] font-bold bg-dark">Utility</h1>
    <span class="text-[#BDC4CE] text-[22px]">
      As our community grows, more utility will be added
    </span>
    <div class="flex justify-center mt-32">
      <UtilityCard
        v-for="(card, idx) in cards"
        :key="card.name"
        :idx="idx"
        :card="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    cards: [
      {
        name: 'Early Access',
        img: 'icons/utility/EarlyAccess.svg',
        body: 'Earn $PGK during the closed beta of our P2E game Penguin Karts before anyone else.',
      },
      {
        name: 'Airdrops',
        img: 'icons/utility/Airdrops.svg',
        body: 'Get free NFTs when we hold our airdrops.',
      },
      {
        name: 'Staking',
        img: 'icons/utility/Staking.svg',
        body: 'Stake your NFT to get rewards.',
      },
      {
        name: 'Whitelists',
        img: 'icons/utility/Whitelists.svg',
        body: 'Get prioity access for our future 3D drops that may require WL.',
      },
    ],
  }),
})
</script>
