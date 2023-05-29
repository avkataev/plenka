import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      tsconfigPaths(),
      EnvironmentPlugin('all', { prefix: 'VITE_'}),
      Components({
          version: 3,
          dts: './types/components.d.ts',
          extensions: ['vue'],
          include: [/\.vue$/, /\.vue\?vue/],
          dirs: [
              'src/widgets',
              'src/features',
              'src/shared',
          ],
          directoryAsNamespace: true,
      }),
      AutoImport({
          imports: [
              'vue',
              'vue-router',
          ],
          dts: './types/auto-imports.d.ts',
          vueTemplate: true,
          dirs: [
              'src/uses',
              'src/stores',
              'src/helpers',
          ],
      }),
  ],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `/src/`,
      },
    ]
  },

})
