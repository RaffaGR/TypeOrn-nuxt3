/* import type { NuxtConfig } from '@nuxt/types'
// https://nuxt.com/docs/api/configuration/nuxt-config
const config: NuxtConfig = {
  buildModules: [
    '@nuxt/typescript-build'
  ]
} */
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})