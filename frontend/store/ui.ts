import { defineStore } from 'pinia'
import { useRouter } from '@nuxtjs/composition-api'

export interface Page {
  tag: string
  name: string
  route: string
  img: string
  sticker: string
}

export type Type = 'info' | 'warning' | 'error'

export type Alert = {
  header: string
  body: string
  type: Type
  closed?: boolean
}

export const useUI = defineStore('ui', {
  state: () => {
    return {
      selectedPage: 'home',
      pages: [
        {
          tag: 'mint',
          name: 'Mint',
          route: '/',
        },
        {
          tag: 'utility',
          name: 'Utility',
          route: '/',
          img: 'bar',
          sticker: '29',
        },
        {
          tag: 'community',
          name: 'Community',
          route: '/',
        },
      ] as Page[],
      hasNewAlerts: false,
      alerts: [] as Alert[],
    }
  },
  actions: {
    /// NAVIGATION
    setSelectedPage(tag: string) {
      this.selectedPage = tag
    },
    goPage(tag: string) {
      const router = useRouter()
      const routes = this.pages.filter((e) => e.tag === tag)

      if (routes.length === 0) {
        throw Error('Wrong tag of page')
        return
      }

      router.push(tag)
    },
    createAlert(alert: Alert) {
      this.hasNewAlerts = true
      this.alerts.push({ ...alert, closed: false })
    },
  },
})
