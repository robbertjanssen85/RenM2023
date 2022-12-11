import { createApp, h } from 'vue'

const routes = {
  '/': 'Home',
  '/program': 'Program',
  '/location': 'Location',
  '/rsvp': 'RSVP',
  '/thanks': 'Thanks',
  '/404': '404'
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
    query: Object.fromEntries(new URLSearchParams(window.location.search).entries())
  }),

  computed: {
    CurrentComponent() {
      const route = routes[this.currentRoute] || '/'
      return require(`./routes/${route}.vue`).default
    }
  },

  render() {
    return h(this.CurrentComponent)
  },

  created () {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname
    })
  }
}

createApp(SimpleRouter).mount('#app')
