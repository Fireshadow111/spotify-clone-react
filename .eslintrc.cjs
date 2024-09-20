module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Customize rules

    // JSX-specific rules
    'react/jsx-no-target-blank': 'warn', // Warn for links opening in a new tab without "rel=noopener noreferrer"
    'react/jsx-key': 'warn', // Warn if keys are not provided in lists
    'react/jsx-no-undef': 'warn', // Warn when using undefined variables in JSX
    'react/jsx-uses-react': 'warn', // Warn about missing React import in JSX (not needed for React 17+)
    'react/jsx-uses-vars': 'warn', // Warn if variables used in JSX are not being used elsewhere

    // React-specific rules
    'react/react-in-jsx-scope': 'warn', // Warn about missing React import in JSX (not needed for React 17+)
    'react/prop-types': 'warn', // Warn about missing prop types validation
    'react/display-name': 'warn', // Warn about missing display names for components
    'react/no-unknown-property': 'warn', // Warn if an unknown DOM property is used
    'react/no-danger': 'warn', // Warn when using dangerous code like `dangerouslySetInnerHTML`
    'react/no-direct-mutation-state': 'warn', // Warn if state is mutated directly
    'react/no-deprecated': 'warn', // Warn when using deprecated methods in React
    'react/no-find-dom-node': 'warn', // Warn against using findDOMNode, which is considered an anti-pattern
    'react/no-is-mounted': 'warn', // Warn against using `isMounted`, which is deprecated
    'react/no-render-return-value': 'warn', // Warn when using the return value of `ReactDOM.render`
    'react/no-string-refs': 'warn', // Warn against using string refs in React
    'react/no-unescaped-entities': 'warn', // Warn about unescaped entities like ">" in JSX
    'react/no-children-prop': 'warn', // Warn against passing children as a prop

    // General rules
    'no-unused-vars': 'warn', // Warn about unused variables
    'no-console': 'warn', // Warn about console statements
    'no-debugger': 'warn', // Warn about debugger statements
    'no-undef': 'warn', // Warn when using undefined variables
    'no-unused-expressions': 'warn', // Warn if expressions are unused
    'no-redeclare': 'warn', // Warn if a variable is redeclared
    'no-dupe-keys': 'warn', // Warn if duplicate keys exist in an object
    'no-duplicate-case': 'warn', // Warn if duplicate cases exist in a switch statement
    'no-empty': 'warn', // Warn when empty blocks are used
    'no-ex-assign': 'warn', // Warn against assignment in `catch` block
    'no-extra-boolean-cast': 'warn', // Warn against unnecessary boolean casting
    'no-extra-semi': 'warn', // Warn against unnecessary semicolons
    'no-func-assign': 'warn', // Warn if function declarations are overwritten
    'no-invalid-regexp': 'warn', // Warn if a regular expression is invalid
    'no-irregular-whitespace': 'warn', // Warn if irregular whitespace is used
    'no-sparse-arrays': 'warn', // Warn against sparse arrays
    'no-unreachable': 'warn', // Warn if code is unreachable
    'use-isnan': 'warn', // Warn against comparisons with NaN
    'valid-typeof': 'warn', // Warn if an invalid typeof comparison is made
    'eqeqeq': 'warn', // Warn if `==` or `!=` is used instead of `===` or `!==`

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'warn', // Warn if Hooks are not used correctly
    'react-hooks/exhaustive-deps': 'warn', // Warn if dependencies are not specified correctly in Hooks
  },
}
