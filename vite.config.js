import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const project = process.env.PROJECT;
    if (!project) {
        throw new Error("Please specify a project with PROJECT environment variable");
    }

    return {
        plugins: [react()],
        root: resolve(__dirname, `src/modules/${project}`),
        build: {
            outDir: resolve(__dirname, `dist/${project}`),
            rollupOptions: {
                input: {
                    main: resolve(__dirname, `src/modules/${project}/index.html`)
                }
            }
        },
        resolve: {
            alias: {
                '@components': resolve(__dirname, 'src/components'),
                '@utils': resolve(__dirname, 'src/utils'),
            }
        }
    };
});
