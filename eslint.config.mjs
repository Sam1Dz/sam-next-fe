import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  // Next.js configs
  ...nextVitals,
  ...nextTs,

  // Additional configs
  ...tseslint.configs.stylistic,
  prettier,

  // Custom rules
  {
    rules: {
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            'type',
            'builtin',
            'object',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: '@/**',
              position: 'after',
            },
          ],
        },
      ],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
      ],
      'react/jsx-curly-brace-presence': [
        'warn',
        { children: 'never', props: 'never' },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
    },
  },

  // Restrict imports
  {
    "rules": {
      "no-restricted-imports": [
        "error",
        {
          "patterns": [
            {
              "group": [
                "src/components/ui/core",
                "src/components/ui/core/*",
                "~/components/ui/core",
                "~/components/ui/core/*"
              ],
              "message": "Do not import from 'core' directly. Use the parent module."
            }
          ]
        }
      ]
    }
  },
  {
    "files": ["src/components/ui/*.tsx", "src/components/ui/*.ts"],
    "rules": {
      "no-restricted-imports": "off"
    }
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
