import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to all network interfaces
    port: 3000, // Or any other port you prefer
    strictPort: true, // If port is in use, don't try another one
    // Optional: Configure CORS if needed
    cors: true,
    // Optional: Configure HTTPS
    // https: true,
  },
})
