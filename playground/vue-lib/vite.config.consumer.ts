import { defineConfig } from '@voidzero-dev/vite-plus'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: 'dist/consumer',
  },
  plugins: [vue()],
})
