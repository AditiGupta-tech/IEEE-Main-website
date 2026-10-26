import { defineConfig } from 'vite'
import react from '@react-eslint/plugin-react' // or your standard react plugin

export default defineConfig({
  base: '/IEEE-Main-website/', 
  plugins: [react()],
})
