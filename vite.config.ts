import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import dts from 'vite-dts'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  alias: {
    '~/': `${path.resolve(__dirname, 'src')}/`,
  },
  plugins: [
    vue(),
    Unocss(),
    dts(),
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
    }

})
