import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
    {
        ignores: ['**/dist', '**/.eslintrc.cjs'],
    },
    js.configs.recommended,
    ...tsPlugin.configs['flat/recommended'],
    reactHooks.configs.flat['recommended-latest'],
    {
        plugins: {
            'react-refresh': reactRefresh,
        },
        files: ['src/**/*.ts', 'src/**/*.tsx'],

        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },

        rules: {
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                },
            ],
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
];
