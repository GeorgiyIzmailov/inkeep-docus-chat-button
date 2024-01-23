
import type { ModuleOptions } from './module.js'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['inkeep']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['inkeep']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['inkeep']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['inkeep']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module.js'
