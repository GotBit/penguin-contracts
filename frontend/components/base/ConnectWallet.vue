<template>
  <div class="relative flex flex-col bg-dark rounded-[12px] min-w-[500px] max-w-min">
    <div
      class="absolute w-full flex justify-between items-center bg-red rounded-t-[12px] min-h-[70px] max-h-min px-[20px]"
    >
      <base-icon name="logo" />
      <div class="cursor-pointer text-violet" @click="$emit('close')">
        <mdicon name="close" size="16" />
      </div>
    </div>
    <div class="flex flex-col mt-[55px] px-[15px] py-[25px]">
      <div class="mt-[35px] text-white text-[28px] text-center">Connect wallet</div>
      <div class="mt-[35px] flex justify-between">
        <div
          class="cursor-pointer rounded-[8px] bg-gray flex justify-center items-center min-h-[75px] min-w-[230px]"
          @click="
            () => {
              connectMetamask()
              $emit('close')
            }
          "
        >
          <base-icon name="metamask" />
          Metamask
        </div>
        <div
          class="cursor-pointer ml-[12px] rounded-[8px] bg-gray flex justify-center items-center min-h-[75px] min-w-[230px]"
          @click="
            () => {
              connectWalletconnect()
              $emit('close')
            }
          "
        >
          <base-icon name="walletconnect" />
          Walletconnect
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed, ref } from '@nuxtjs/composition-api'
import { mapActions } from 'pinia'

import BaseIcon from '@/components/base/BaseIcon.vue'

import { useUser } from '@/store/user'
import { getChainRpc } from '@/utils'

export default Vue.extend({
  props: {
    showPopup: { type: Boolean, default: false },
  },
  components: {
    BaseIcon,
  },
  methods: {
    ...mapActions(useUser, ['connectMetamask', 'connectWalletconnect']),
  },
  setup(props, { emit }) {},
})
</script>
