import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    base: '/Grafiska-verktyg-Designuppgift/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "../styles/partials/_variables.scss";',
            },
        },
    },
});
