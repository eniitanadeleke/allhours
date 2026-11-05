// Builds a single-file preview (used for the shareable preview link). Not needed for production.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  define: { 'import.meta.env.VITE_PREVIEW': JSON.stringify('1') },
  build: { outDir: 'preview-dist', assetsInlineLimit: 100000000, copyPublicDir: false },
})
