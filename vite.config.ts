import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~/style/theme.scss";`
      }
    }
  },
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: true,
    }),
    Components({
      dts: true,
    })],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/icon/index.ts'),
        name: 'show-ta',
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    server: {
      open: true
    }

})
