import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,

    env: {
      JWT_SECRET: 'clave-secreta-solo-para-tests',
      DATABASE_URL:
        'postgresql://postgres:postgres@localhost:5432/libreria_test',
    },

    include: ['src/**/*.test.js'],
  },
})
