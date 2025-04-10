import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // 서버 프록시 설정
    proxy: {
      '/api': {
        // 로컬 서버
        target: 'http://localhost:3000',

        // 외부(Glitch) 서버로 target 변경

        // target: 'https://kb6-12-server.glitch.me',

        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
