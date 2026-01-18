import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base :'/clone-Apple2/',
  plugins: [react()],
})
