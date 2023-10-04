import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@router': path.resolve(__dirname, './src/router/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@libs': path.resolve(__dirname, './src/libs'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@icon': path.resolve(__dirname, './src/icon'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
    },
  },
  plugins: [react()],
})
