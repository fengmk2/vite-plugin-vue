import { defineConfig } from 'vite-plus'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // to make tests faster
    minify: false,
  },
})
