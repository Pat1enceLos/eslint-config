import { default as pluginVue } from 'eslint-plugin-vue'
import * as pluginImport from 'eslint-plugin-i'
import { default as pluginComments } from 'eslint-plugin-eslint-comments'
import { default as pluginTs } from '@typescript-eslint/eslint-plugin'

export default function trevortan(...userConfig) {
  return [
    {
      plugins: {
        import: pluginImport,
        'eslint-comments': pluginComments,
        ts: pluginTs,
      },
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
      ],
      // 定义共享数据
      settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
        },
      },
      rules: {
        /* -------------------------------------------------------------------------- */
        /*                                    vue3                                    */
        /* -------------------------------------------------------------------------- */
        ...pluginVue.config.base.rules,
        ...pluginVue.configs['vue3-essential'].rules,
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        ...pluginVue.configs['vue3-recommended'].rules,



        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/prefer-import-from-vue': 'off',
        'vue/v-on-event-hyphenation': 'off',
    
        // reactivity transform
        'vue/no-setup-props-destructure': 'off',
    
        'vue/component-tags-order': ['error', {
          order: ['script', 'template', 'style'],
        }],
        'vue/block-tag-newline': ['error', {
          singleline: 'always',
          multiline: 'always',
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': ['error', {
          order: ['defineProps', 'defineEmits'],
        }],
        'vue/html-comment-content-spacing': ['error', 'always', {
          exceptions: ['-'],
        }],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',
    
        // extensions
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error', { before: true, after: true }],
        'vue/block-spacing': ['error', 'always'],
        'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': ['error', { before: false, after: true }],
        'vue/comma-style': ['error', 'last'],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        // 'vue/func-call-spacing': ['off', 'never'],
        'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'vue/keyword-spacing': ['error', { before: true, after: true }],
        'vue/no-constant-condition': 'warn',
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'functions'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'vue/no-sparse-arrays': 'error',
        'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'vue/object-shorthand': [
          'error',
          'always',
          {
            ignoreConstructors: false,
            avoidQuotes: true,
          },
        ],
        'vue/operator-linebreak': ['error', 'before'],
        'vue/prefer-template': 'error',
        'vue/quote-props': ['error', 'consistent-as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
        'vue/template-curly-spacing': 'error',
    
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
    
        /* -------------------------------------------------------------------------- */
        /*                                 typescript                                 */
        /* -------------------------------------------------------------------------- */
        'import/named': 'off',
    
        // TS
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
    
        // Override JS
        'no-useless-constructor': 'off',
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 2, {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
          ],
          offsetTernaryExpressions: true,
        }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'semi': 'off',
        '@typescript-eslint/semi': 'off',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': ['error', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'functions'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        // The following rule overrides require a parser service, aka. require a `typescript.json` path.
        // This needs to be done individually for each project, and it slows down linting significantly.
        // 'no-throw-literal': 'off',
        // '@typescript-eslint/no-throw-literal': 'error',
        // 'no-implied-eval': 'off',
        // '@typescript-eslint/no-implied-eval': 'error',
        // 'dot-notation': 'off',
        // '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
    
        // off
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    ...userConfig,
  ]
}