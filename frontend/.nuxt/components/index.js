export { default as BaseButton } from '../../components/base/BaseButton.vue'
export { default as BaseCard } from '../../components/base/BaseCard.vue'
export { default as BaseIcon } from '../../components/base/BaseIcon.vue'
export { default as BaseConnectWallet } from '../../components/base/ConnectWallet.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as FooterSocialNetworks } from '../../components/footer/SocialNetworks.vue'
export { default as MintInput } from '../../components/mint/MintInput.vue'
export { default as NavBar } from '../../components/nav/NavBar.vue'
export { default as NavIcon } from '../../components/nav/NavIcon.vue'
export { default as UtilityBlock } from '../../components/utility/UtilityBlock.vue'
export { default as UtilityCard } from '../../components/utility/UtilityCard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
