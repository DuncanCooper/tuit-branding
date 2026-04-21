import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'playground',
  plugins: [react()],
  resolve: {
    alias: {
      '@duncancooper/brand': path.resolve(__dirname, 'src/index.ts'),
    },
  },
});
