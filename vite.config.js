import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem';

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
                '@assets': resolve(__dirname, 'src/assets'),
                '@components': resolve(__dirname, 'src/components'),
                '@utils': resolve(__dirname, 'src/utils'),
            }
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: [
                            'Android 4.1',
                            'iOS 7.1',
                            'Chrome > 31',
                            'ff > 31',
                            'ie >= 8',
                            '> 1%',
                        ],
                        grid: true,
                    }),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'], // 需要转换的属性，默认转换所有属性
                        selectorBlackList: [],// CSS选择器黑名单，防止部分选择器被转换
                        exclude: /\/node_modules\//i, // 忽略包文件转换rem
                    })
                ]
            }
        }
    };
});
