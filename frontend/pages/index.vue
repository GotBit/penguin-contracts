<template>
  <main class="flex flex-col items-center w-full min-h-[100vh] relative bg">
    <h1 class="font-bold text-[100px] mb-[10px] mt-24 z-10">Genesis Penguins NFT</h1>
    <p class="text-[18px] text-blue-text max-w-[490px] text-center z-10">
      10,000 uniquely generated Genesis Penguins living on the Ethereum Blockchain, not
      one Penguin is the same!
    </p>
    <div class="text-6xl mt-12 font-bold">9.999 / 10.000</div>
    <span class="text-[18px] text-blue-text mt-4">
      Genesis Penguins have been claimed
    </span>
    <MintInput
      class="mt-[50px]"
      v-model="mintInput.mint"
      :min="mintInput.min"
      :max="mintInput.max"
    />
    <button class="mt-8 px-[70px] text-[18px] font-semibold py-5 rounded-md gradient">
      Mint
    </button>
    <span class="text-[18px] text-blue-text mt-5 mb-36">FREE (+gas fees)</span>
    <UtilityBlock />
  </main>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    mintInput: {
      mint: 1,
      min: 0,
      max: 20,
    },
  }),
})
</script>

<style scoped>
.bg {
  background-image: url('@/static/bg_s.png'), url('@/static/bg.png');
  background-repeat: no-repeat, no-repeat;
  background-position: top center, top center;
  background-size: cover, cover;
}
.gradient {
  background: linear-gradient(348.33deg, #0053be 8.56%, #009aec 91.44%);
}
</style>
