// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["gsap"],
  },
  app: {
    baseURL: "/greensock"
  },
  modules: ['@nuxt/ui']
})
