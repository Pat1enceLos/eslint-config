import { default as pluginComments } from 'eslint-plugin-eslint-comments'
import vue from './vue.js';
import ts from './ts.js';
import { pluginImport } from './plugins.js';

export default function trevortan(options = {}, ...userConfig) {
  const {
    componentExts = ['vue'],
    overrides = {},
  } = options;
  const stylisticOptions = options.stylistic === false
    ? false
    : typeof options.stylistic === 'object'
      ? options.stylistic
      : {}

  const configs = [
    [
      {
        // 忽略
        ignores: [
          '**/node_modules',
          '**/dist',
          '**/package-lock.json',
          '**/yarn.lock',
          '**/pnpm-lock.yaml',
          '**/bun.lockb',
  
          '**/output',
          '**/coverage',
          '**/temp',
          '**/.vitepress/cache',
          '**/.nuxt',
          '**/.next',
          '**/.vercel',
          '**/.changeset',
          '**/.idea',
          '**/.cache',
          '**/.output',
          '**/.vite-inspect',
  
          '**/CHANGELOG*.md',
          '**/*.min.*',
          '**/LICENSE*',
          '**/__snapshots__',
          '**/auto-import?(s).d.ts',
          '**/components.d.ts',
  
          '**/yalc.lock',
          '**/.yalc'
        ],
      }
    ],
    [
      {
        plugins: {
          'eslint-comments': pluginComments,
        },
      }
    ],
    [
      {
        plugins: {
          import: pluginImport,
        }
      }
    ],
    [
      {
        // 定义共享数据
        settings: {
          'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
          },
        },
      }
    ],
    [
      {
        rules: {
          /* -------------------------------------------------------------------------- */
          /*                                    basic                                   */
          /* -------------------------------------------------------------------------- */
          // import
          'import/order': 'error',
          'import/first': 'error',
          'import/no-mutable-exports': 'error',
          'import/no-unresolved': 'off',
          'import/no-absolute-path': 'off',
      
          // Common
          'curly': 'off',
          'quote-props': ['error', 'consistent-as-needed'],
          'no-param-reassign': 'off',
          'array-bracket-spacing': ['error', 'never'],
          'block-spacing': ['error', 'always'],
          'camelcase': 'off',
          'comma-style': ['error', 'last'],
          'no-constant-condition': 'warn',
          'no-debugger': 'error',
          'no-console': ['error', { allow: ['warn', 'error'] }],
          'no-cond-assign': ['error', 'always'],
          'func-call-spacing': ['off', 'never'],
          'key-spacing': ['error', { beforeColon: false, afterColon: true }],
          'no-restricted-syntax': [
            'error',
            'DebuggerStatement',
            'LabeledStatement',
            'WithStatement',
          ],
          'no-return-await': 'off',
          'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      
          // es6
          'no-var': 'error',
          'prefer-const': [
            'error',
            {
              destructuring: 'any',
              ignoreReadBeforeAssign: true,
            },
          ],
          'prefer-arrow-callback': [
            'error',
            {
              allowNamedFunctions: false,
              allowUnboundThis: true,
            },
          ],
          'object-shorthand': [
            'error',
            'always',
            {
              ignoreConstructors: false,
              avoidQuotes: true,
            },
          ],
          'prefer-exponentiation-operator': 'error',
          'prefer-rest-params': 'error',
          'prefer-spread': 'error',
          'prefer-template': 'error',
          'template-curly-spacing': 'error',
          'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
          'generator-star-spacing': 'off',
          'spaced-comment': ['error', 'always', {
            line: {
              markers: ['/'],
              exceptions: ['/', '#'],
            },
            block: {
              markers: ['!'],
              exceptions: ['*'],
              balanced: true,
            },
          }],
      
          // best-practice
          'array-callback-return': 'error',
          'block-scoped-var': 'error',
          'consistent-return': 'off',
          'complexity': ['off', 11],
          'eqeqeq': ['error', 'smart'],
          'no-alert': 'warn',
          'no-case-declarations': 'error',
          'no-multi-spaces': 'error',
          'no-multi-str': 'error',
          'no-with': 'error',
          'no-void': 'error',
          'no-useless-escape': 'off',
          'vars-on-top': 'error',
          'require-await': 'off',
          'no-return-assign': 'off',
          'operator-linebreak': ['error', 'before'],
      
          'eslint-comments/disable-enable-pair': 'off',
          'import/no-named-as-default-member': 'off',
          'import/no-named-as-default': 'off',
          'import/namespace': 'off',
          'n/no-callback-literal': 'off',
      
          'sort-imports': [
            'error',
            {
              ignoreCase: false,
              ignoreDeclarationSort: true,
              ignoreMemberSort: false,
              memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
              allowSeparatedGroups: false,
            },
          ],
        },
      },
    ]
  ];
  configs.push(ts({
    componentExts,
    overrides: overrides.typescript,
  }))
  configs.push(vue({
    overrides: overrides.vue,
    stylistic: stylisticOptions,
    typescript: true,
  }))

  configs.push(userConfig);

  return configs.flat();
}