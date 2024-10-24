import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Mock the process object and add necessary environment variables
    'process': {
      env: {
        TEMPLATE_IMAGE_URL: 'https://mui.com',
         VITE_BACKEND_URL: 'http://localhost:5000',
      },
    },
  },
});