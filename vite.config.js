import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: '/Frontify/',
  base: 'https://literate-adventure-9pg8rnn.pages.github.io/',
})
