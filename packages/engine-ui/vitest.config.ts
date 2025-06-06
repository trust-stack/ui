import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        include: ['src/**/*.spec.ts'],
        disableConsoleIntercept: true,
    },
    plugins: [swc.vite() as any],
});
