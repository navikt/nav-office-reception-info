import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ['src'] })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['es'],
            fileName: 'main',
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', '@navikt/ds-react', 'dayjs'],
            output: {
                assetFileNames: (assetInfo) => {
                    const name = assetInfo.names?.[0] || assetInfo.originalFileNames?.[0] || '';
                    if (name.includes('.css') || (assetInfo.type === 'asset' && name.endsWith('.css'))) {
                        return 'style.css';
                    }
                    return name;
                },
            },
        },
    },
});
