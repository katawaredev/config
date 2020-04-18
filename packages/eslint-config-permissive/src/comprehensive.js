module.exports = {
  rules: {
    // Forbid a module from importing a module with a dependency path back to itself
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    "import/no-cycle": "error",
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      rules: {
        // Disallows awaiting a value that is not a Thenable [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
        "@typescript-eslint/await-thenable": "warn",

        // Enforces naming conventions for everything across a codebase [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        // "@typescript-eslint/naming-convention": "off",

        // Requires that .toString() is only called on objects which provide useful information when stringified [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
        "@typescript-eslint/no-base-to-string": "warn",

        // Requires Promise-like values to be handled appropriately [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
        // "@typescript-eslint/no-floating-promises": "off"

        // Disallow iterating over an array with a for-in loop [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
        // "@typescript-eslint/no-for-in-array": "warn",

        // Disallow the use of eval()-like methods [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
        "@typescript-eslint/no-implied-eval": "warn",

        // Avoid using promises in places not designed to handle them [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
        "@typescript-eslint/no-misused-promises": "warn",

        // Disallow throwing literals as exceptions [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
        "@typescript-eslint/no-throw-literal": "warn",

        // Flags unnecessary equality comparisons against boolean literals [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",

        // Prevents conditionals where the type is always truthy or always falsy [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
        "@typescript-eslint/no-unnecessary-condition": "warn",

        // Warns when a namespace qualifier is unnecessary [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        "@typescript-eslint/no-unnecessary-qualifier": "warn",

        // Enforces that type arguments will not be used if not required [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",

        // Warns if a type assertion does not change the type of an expression [recommended] [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",

        // Disallows assigning any to variables and properties [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        // "@typescript-eslint/no-unsafe-assignment": "off",

        // Disallows calling an any type value [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        "@typescript-eslint/no-unsafe-call": "warn",

        // Disallows member access on any typed variables [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        "@typescript-eslint/no-unsafe-member-access": "warn",

        // Disallows returning any from a function [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
        "@typescript-eslint/no-unsafe-return": "warn",

        // Disallow unused variables and arguments [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
        "@typescript-eslint/no-unused-vars-experimental": "warn",

        // Enforce includes method over indexOf method [recommended] [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
        "@typescript-eslint/prefer-includes": "warn",

        // Enforce the usage of the nullish coalescing operator instead of logical chaining [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
        "@typescript-eslint/prefer-nullish-coalescing": "warn",

        // Requires that private members are marked as readonly if they're never modified outside of the constructor [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
        "@typescript-eslint/prefer-readonly": "warn",

        // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
        // "@typescript-eslint/prefer-readonly-parameter-types": "warn",

        // Prefer using type parameter when calling Array#reduce instead of casting [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",

        // Enforce that RegExp#exec is used instead of String#match if no global flag is provided [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
        // "@typescript-eslint/prefer-regexp-exec": "warn",

        // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings [recommended] [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",

        // Requires any function or method that returns a Promise to be marked async [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
        // "@typescript-eslint/promise-function-async": "off",

        // Requires Array#sort calls to always provide a compareFunction [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
        // "@typescript-eslint/require-array-sort-compare": "off",

        // When adding two variables, operands must both be of type number or of type string [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
        "@typescript-eslint/restrict-plus-operands": [
          "warn",
          { checkCompoundAssignments: true },
        ],

        // Enforce template literal expressions to be of string type [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
        "@typescript-eslint/restrict-template-expressions": "warn",

        // Restricts the types allowed in boolean expressions [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
        // "@typescript-eslint/strict-boolean-expressions": "off",

        // Exhaustiveness checking in switch with union type [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
        // "@typescript-eslint/switch-exhaustiveness-check": "off",

        // Enforces unbound methods are called with their expected scope [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
        "@typescript-eslint/unbound-method": "warn",

        // Disallow async functions which have no await expression [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
        "require-await": "off",
        "@typescript-eslint/require-await": "warn",
      },
    },
  ],
};
