import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 상대 경로를 사용하여 GitHub Pages 등 서브 디렉토리 배포 지원
  resolve: {
    alias: {
      '@': '.', // 루트 디렉토리를 @로 매핑
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})