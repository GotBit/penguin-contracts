<template>
  <div
    class="bg-card w-[300px] h-[350px] relative rounded-[32px] pt-[117px] mr-[30px]"
    :class="{ 'mt-11': even }"
  >
    <img :src="card.img" class="absolute -top-12" />
    <h2 class="font-bold text-[32px]">{{ card.name }}</h2>
    <p class="text-[18px] leading-8 text-blue-text">
      {{ card.body }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['card', 'idx'],
  computed: {
    even(): boolean {
      return (this.idx + 1) % 2 === 0 ? true : false
    },
  },
})
</script>
<style scoped>
.bg-card {
  background: radial-gradient(61.44% 61.44% at 50% 0%, #022a6e 0%, #10184e 100%);

  /* shadow */
  box-shadow: 2.75903e-15px 45.0583px 90.1167px rgba(3, 12, 61, 0.541);
}
</style>
