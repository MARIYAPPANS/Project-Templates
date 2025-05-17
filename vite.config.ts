import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './public/assets'),
<<<<<<< HEAD
=======
      '@services':path.resolve(__dirname,'./services')
>>>>>>> 193e003c3554b5e63e4f64f199c6d0adf108366e
    },
  },
})
