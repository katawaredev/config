module.exports = {
  rules: {
    // disallow comparing against -0 [recommended]
    // https://eslint.org/docs/rules/no-compare-neg-zero
    "no-compare-neg-zero": "warn",

    // enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": [
      "warn",
      {
        exceptMethods: [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentDidMount",
          "shouldComponentUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "componentDidCatch",
          "getSnapshotBeforeUpdate",
        ],
      },
    ],

    // require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "warn",

    // enforce a maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: "warn",

    // enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    "default-case-last": "warn",

    // require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    "grouped-accessor-pairs": "warn",

    // require error handling in callbacks
    // https://eslint.org/docs/rules/handle-callback-err
    "handle-callback-err": ["warn", "^.*(e|E)rr"],

    // enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    "func-style": ["warn", "declaration"],

    // enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    "max-depth": "warn",

    // enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    "max-nested-callbacks": "warn",

    // disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    "no-duplicate-imports": "warn",

    // disallow empty block statements [recommended]
    // https://eslint.org/docs/rules/no-empty
    "no-empty": "warn",

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    "no-empty-function": "warn",

    // disallow shorthand type conversions [autofix]
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": ["warn", { disallowTemplateShorthand: true }],

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "warn",

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": "warn",

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    "no-return-await": "warn",

    // disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    "no-useless-backreference": "warn",

    // disallow unnecessary `catch` clauses [recommended]
    // https://eslint.org/docs/rules/no-useless-catch
    "no-useless-catch": "warn",

    // disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "warn",

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "warn",

    // require `const` declarations for variables that are never reassigned after declared [autofix]
    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": ["warn", { destructuring: "all" }],

    // disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    "prefer-regex-literals": "warn",

    // require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    "prefer-rest-params": "warn",

    // require spread operators instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "warn",

    // Enforce ES5 or ES6 class for React Components
    // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": "warn",

    // Enforce stateless components to be written as a pure function
    // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "warn",

    // require include descriptions in ESLint directive-comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
    "eslint-comments/require-description": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      rules: {
        // Require that member overloads be consecutive [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        "@typescript-eslint/adjacent-overload-signatures": "warn",

        // Bans // @ts-<directive> comments from being used [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
        "@typescript-eslint/ban-ts-comment": [
          "warn",
          {
            "ts-check": false,
            "ts-nocheck": true,
            "ts-ignore": true,
            "ts-expect-error": "allow-with-description",
            // https://github.com/microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
            minimumDescriptionLength: 4, // Enough to fit typescript error code TSXXXX
          },
        ],

        // Enforces consistent usage of type assertions [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        "@typescript-eslint/consistent-type-assertions": "warn",

        // Require explicit return types on functions and class methods [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-function-return-type": "warn",

        // Require a consistent member declaration order
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
        "@typescript-eslint/member-ordering": "warn",

        // Disallow duplicate imports
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
        "@typescript-eslint/no-duplicate-imports": "warn",

        // Disallow empty functions [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
        "@typescript-eslint/no-empty-function": "warn",

        // Disallow the declaration of empty interfaces [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        "@typescript-eslint/no-empty-interface": "warn",

        // Disallow unnecessary constructors
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        "@typescript-eslint/no-useless-constructor": "warn",

        // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
        "@typescript-eslint/prefer-for-of": "warn",

        // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
        "@typescript-eslint/unified-signatures": "warn",

        // Disallows usage of void type outside of generic or return types
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
        "@typescript-eslint/no-invalid-void-type": [
          "warn",
          { allowInGenericTypeArguments: false },
        ],

        // Disallows non-null assertions using the ! postfix operator [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        "@typescript-eslint/no-non-null-assertion": "warn",
      },
    },
    {
      files: [
        "*.test.ts",
        "*.test.tsx",
        "*.test.js",
        "*.test.jsx",
        "test.ts",
        "test.tsx",
        "test.js",
        "test.jsx",
        "*.spec.ts",
        "*.spec.tsx",
        "*.spec.js",
        "*.spec.jsx",
        "spec.ts",
        "spec.tsx",
        "spec.js",
        "spec.jsx",
      ],
      // https://github.com/jest-community/eslint-plugin-jest#rules
      rules: {
        // Disallow commented out tests [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
        "jest/no-commented-out-tests": "warn",

        // Disallow using expect().resolves
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
        "jest/no-expect-resolves": "warn",

        // Disallow conditional logic
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
        "jest/no-if": "warn",

        // Suggest using toBeCalledWith() OR toHaveBeenCalledWith()
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
        "jest/prefer-called-with": "warn",

        // Suggest using expect.assertions() OR expect.hasAssertions()
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
        "jest/prefer-expect-assertions": "warn",

        // Suggest to have all hooks at top-level before tests
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
        "jest/prefer-hooks-on-top": "warn",

        // Enforce valid titles for jest blocks
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
        "jest/valid-title": "warn",

        // Suggest using explicit assertions rather than just getBy* queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-explicit-assert.md
        "testing-library/prefer-explicit-assert": "warn",

        // Suggest using userEvent library instead of fireEvent for simulating user interaction
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
        "testing-library/prefer-user-event": "warn",

        // Enforce a valid naming for return value from render
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
        "testing-library/render-result-naming-convention": "warn",
      },
    },
  ],
};
