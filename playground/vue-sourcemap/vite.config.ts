import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      less: {
        additionalData: '@color: red;',
      },
    },
  },
  plugins: [vuePlugin()],
  build: {
    sourcemap: true,
  },
})
