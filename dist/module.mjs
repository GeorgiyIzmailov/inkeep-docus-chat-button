import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "inkeep-chat-button",
    configKey: "inkeep"
  },
  defaults: {},
  setup() {
    const { resolve } = createResolver(import.meta.url);
    addPlugin({
      src: resolve("./runtime/chat-button-plugin"),
      name: "ChatButton"
    });
  }
});

export { module as default };
