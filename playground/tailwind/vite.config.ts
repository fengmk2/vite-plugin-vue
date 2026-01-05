import { defineConfig } from '@voidzero-dev/vite-plus'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwind()],
  build: {
    // to make tests faster
    minify: false,
  },
})
