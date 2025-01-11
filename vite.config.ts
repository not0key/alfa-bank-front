import * as path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{
      find: '@', replacement: path.resolve(__dirname, 'src')
    },
  ],
  },
  server: {
    host: true,
    port: 5173
  },
  preview: {
    port: 5173 // Для продакшн-режима
  }
})
