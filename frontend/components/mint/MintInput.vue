<template>
  <div class="flex flex-col relative">
    <input
      v-model="mainVal"
      class="w-[313px] h-[100px] rounded-full text-center text-[#303030] text-[60px] font-bold bg focus:border-0"
      type="number"
      min="0"
      max="100"
      @input="onChange"
    />
    <div
      class="cursor-pointer absolute top-[14px] left-4 bg-button rounded-full w-[70px] h-[70px] flex justify-center items-center"
      @click="dicrease"
    >
      <img src="@/static/icons/-.svg" />
    </div>
    <div
      class="ursor-pointer absolute top-[14px] right-4 bg-button rounded-full w-[70px] h-[70px] flex justify-center items-center"
      @click="increase"
    >
      <img src="@/static/icons/+.svg" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
  },
  data() {
    return {
      mainVal: this.value,
    }
  },
  watch: {
    value() {
      this.mainVal = this.value
    },
  },
  methods: {
    onChange(event: { target: { value: string } }) {
      this.$emit('input', Number(event.target.value))
    },
    increase() {
      if (this.mainVal < this.max) {
        this.mainVal++
      } else {
        this.mainVal = this.max
      }
    },
    dicrease() {
      if (this.mainVal > this.min) {
        this.mainVal--
      }
    },
  },
})
</script>
<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}
.bg {
  background: linear-gradient(180deg, #cdcdcd 0%, #ffffff 100%);
  box-shadow: 9.79717e-16px 16px 32px rgba(47, 47, 47, 0.1735),
    inset -2.63435e-16px -4.30222px 4.30222px #c6c6c6,
    inset 2.63435e-16px 4.30222px 4.30222px #ffffff;
}
.bg-button {
  background: linear-gradient(348.33deg, #0053be 8.56%, #009aec 91.44%);
}
</style>
