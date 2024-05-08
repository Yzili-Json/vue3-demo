import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 解析.vue文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'192.168.1.162' , // 代理的目标地址
        secure: false,
        changeOrigin:true, // 是否跨域
        rewrite: (path: string) =>path.replace(/^\/api/,'')
      }
    },
    host:'0.0.0.0',
    port:9090
  }
})
