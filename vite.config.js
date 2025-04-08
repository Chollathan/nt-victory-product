import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({

  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // ระบุไฟล์ที่ต้องการใช้ tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'], // ใช้ฟอนต์ Kanit สำหรับฟอนต์หลัก
      },
    },
  },
  plugins: [react(),
    tailwindcss()
  ],
})
