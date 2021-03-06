module.exports = {
  extends: ["plugin:import/typescript"],
  plugins: ["@typescript-eslint"],

  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "warn",
      {
        "ts-check": false,
        "ts-nocheck": true,
        "ts-ignore": true,
        "ts-expect-error": false,
      },
    ],
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },

      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      rules: {
        "import/no-unresolved": "off", // TypeScript already handles it

        // Require that member overloads be consecutive [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        // "@typescript-eslint/adjacent-overload-signatures": "warn",

        // Requires using either T[] or Array<T> for arrays [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
        "@typescript-eslint/array-type": "warn",

        // Disallows awaiting a value that is not a Thenable [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
        // "@typescript-eslint/await-thenable": "warn",

        // Bans // @ts-<directive> comments from being used [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
        "@typescript-eslint/ban-ts-comment": [
          "warn",
          {
            "ts-check": false,
            "ts-nocheck": true,
            "ts-ignore": true,
            "ts-expect-error": false,
          },
        ],

        // Bans // tslint:<rule-flag> comments from being used [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
        // "@typescript-eslint/ban-tslint-comment": "off",

        // Bans specific types from being used [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
        "@typescript-eslint/ban-types": "warn",

        // Ensures that literals on classes are exposed in a consistent style [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
        "@typescript-eslint/class-literal-property-style": "warn",

        // Enforce or disallow the use of the record type [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
        "@typescript-eslint/consistent-indexed-object-style": "warn",

        // Enforces consistent usage of type assertions
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        // "@typescript-eslint/consistent-type-assertions": "warn",

        // Consistent with type definition either interface or type [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        "@typescript-eslint/consistent-type-definitions": "warn",

        // Enforces consistent usage of type imports [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { prefer: "no-type-imports" },
        ],

        // Require explicit return types on functions and class methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        // "@typescript-eslint/explicit-function-return-type": "warn",

        // Require explicit accessibility modifiers on class properties and methods [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        "@typescript-eslint/explicit-member-accessibility": [
          "warn",
          { accessibility: "no-public" },
        ],

        // Require explicit return and argument types on exported functions' and classes' public class methods [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        // See: explicit-function-return-type
        // "@typescript-eslint/explicit-module-boundary-types": "off",

        // Require a specific member delimiter style for interfaces and type literals [recommended] [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        "@typescript-eslint/member-delimiter-style": "off",

        // Require a consistent member declaration order
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
        // "@typescript-eslint/member-ordering": "off",

        // Enforces using a particular method signature syntax. [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
        "@typescript-eslint/method-signature-style": "warn",

        // Enforces naming conventions for everything across a codebase [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        // "@typescript-eslint/naming-convention": "off",

        // Requires that .toString() is only called on objects which provide useful information when stringified [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
        // "@typescript-eslint/no-base-to-string": "warn",

        // Disallow non-null assertion in locations that may be confusing [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",

        // Requires expressions of type void to appear in statement position [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
        // "@typescript-eslint/no-confusing-void-expression": "off",

        // Disallow the delete operator with computed key expressions [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
        "@typescript-eslint/no-dynamic-delete": "warn",

        // Disallow the declaration of empty interfaces [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        // "@typescript-eslint/no-empty-interface": "warn",

        // Disallow usage of the any type [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        "@typescript-eslint/no-explicit-any": "warn",

        // Disallow extra non-null assertion [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
        "@typescript-eslint/no-extra-non-null-assertion": "warn",

        // Forbids the use of classes as namespaces
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
        "@typescript-eslint/no-extraneous-class": "warn",

        // Requires Promise-like values to be handled appropriately [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
        // "@typescript-eslint/no-floating-promises": "off",

        // Disallow iterating over an array with a for-in loop [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
        // "@typescript-eslint/no-for-in-array": "warn",

        // Disallow usage of the implicit any type in catch clauses [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
        "@typescript-eslint/no-implicit-any-catch": "warn",

        // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        "@typescript-eslint/no-inferrable-types": "warn",

        // Disallows usage of void type outside of generic or return types
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
        // "@typescript-eslint/no-invalid-void-type": ["warn", { allowInGenericTypeArguments: false }],

        // Enforce valid definition of new and constructor [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
        "@typescript-eslint/no-misused-new": "warn",

        // Avoid using promises in places not designed to handle them [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
        // "@typescript-eslint/no-misused-promises": "warn",

        // Disallow the use of custom TypeScript modules and namespaces [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
        "@typescript-eslint/no-namespace": "warn",

        // Disallows using a non-null assertion after an optional chain expression [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
        // "@typescript-eslint/no-non-null-asserted-optional-chain": "off",

        // Disallows non-null assertions using the ! postfix operator [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        // "@typescript-eslint/no-non-null-assertion": "warn",

        // Disallow the use of parameter properties in class constructors
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
        "@typescript-eslint/no-parameter-properties": "warn",

        // Disallows invocation of require()
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
        // "@typescript-eslint/no-require-imports": "off",

        // Disallow aliasing this [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
        // "@typescript-eslint/no-this-alias": "off",

        // Disallow the use of type aliases
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
        // "@typescript-eslint/no-type-alias": "off",

        // Flags unnecessary equality comparisons against boolean literals [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        // "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",

        // Prevents conditionals where the type is always truthy or always falsy [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
        // "@typescript-eslint/no-unnecessary-condition": "warn",

        // Warns when a namespace qualifier is unnecessary [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        // "@typescript-eslint/no-unnecessary-qualifier": "warn",

        // Enforces that type arguments will not be used if not required [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
        // "@typescript-eslint/no-unnecessary-type-arguments": "warn",

        // Warns if a type assertion does not change the type of an expression [recommended] [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
        // "@typescript-eslint/no-unnecessary-type-assertion": "warn",

        // Disallows unnecessary constraints on generic types [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
        "@typescript-eslint/no-unnecessary-type-constraint": "warn",

        // Disallows calling an function with an any type value [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
        // "@typescript-eslint/no-unsafe-argument": "warn",

        // Disallows assigning any to variables and properties [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        // "@typescript-eslint/no-unsafe-assignment": "off",

        // Disallows calling an any type value [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        // "@typescript-eslint/no-unsafe-call": "warn",

        // Disallows member access on any typed variables [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        // "@typescript-eslint/no-unsafe-member-access": "warn",

        // Disallows returning any from a function [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
        // "@typescript-eslint/no-unsafe-return": "warn",

        // Disallow unused variables and arguments
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
        "@typescript-eslint/no-unused-vars-experimental": "warn",

        // Disallows the use of require statements except in import statements [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
        "@typescript-eslint/no-var-requires": "off",

        // Prefers a non-null assertion over explicit type cast when possible [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
        // "@typescript-eslint/non-nullable-type-assertion-style": "warn",

        // Prefer usage of as const over literal type [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
        // "@typescript-eslint/prefer-as-const": "off",

        // Prefer initializing each enums member value
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
        // "@typescript-eslint/prefer-enum-initializers": "off",

        // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
        // "@typescript-eslint/prefer-for-of": "warn",

        // Use function types instead of interfaces with call signatures [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
        "@typescript-eslint/prefer-function-type": "warn",

        // Enforce includes method over indexOf method [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
        // "@typescript-eslint/prefer-includes": "warn",

        // Require that all enum members be literal values to prevent unintended enum member name shadow issues
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
        "@typescript-eslint/prefer-literal-enum-member": "warn",

        // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
        "@typescript-eslint/prefer-namespace-keyword": "warn",

        // Enforce the usage of the nullish coalescing operator instead of logical chaining [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
        // "@typescript-eslint/prefer-nullish-coalescing": "off",

        // Prefer using concise optional chain expressions instead of chained logical ands
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        // "@typescript-eslint/prefer-optional-chain": "off",

        // Requires that private members are marked as readonly if they're never modified outside of the constructor [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
        // "@typescript-eslint/prefer-readonly": "warn",

        // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
        // "@typescript-eslint/prefer-readonly-parameter-types": "off",

        // Prefer using type parameter when calling Array#reduce instead of casting [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
        // "@typescript-eslint/prefer-reduce-type-parameter": "warn",

        // Enforce that RegExp#exec is used instead of String#match if no global flag is provided [recommended] [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
        // "@typescript-eslint/prefer-regexp-exec": "warn",

        // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
        // "@typescript-eslint/prefer-string-starts-ends-with": "warn",

        // Recommends using // @ts-expect-error over // @ts-ignore [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
        "@typescript-eslint/prefer-ts-expect-error": "warn",

        // Requires any function or method that returns a Promise to be marked async [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
        // "@typescript-eslint/promise-function-async": "off",

        // Requires Array#sort calls to always provide a compareFunction [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
        // "@typescript-eslint/require-array-sort-compare": "off",

        // When adding two variables, operands must both be of type number or of type string [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
        // "@typescript-eslint/restrict-plus-operands": ["warn", { checkCompoundAssignments: true }],

        // Enforce template literal expressions to be of string type [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
        // "@typescript-eslint/restrict-template-expressions": "warn",

        // Enforces that members of a type union/intersection are sorted alphabetically [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
        // "@typescript-eslint/sort-type-union-intersection-members": "off",

        // Restricts the types allowed in boolean expressions [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
        // "@typescript-eslint/strict-boolean-expressions": "warn",

        // Exhaustiveness checking in switch with union type [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
        // "@typescript-eslint/switch-exhaustiveness-check": "off",

        // Sets preference level for triple slash directives versus ES6-style import declarations [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
        "@typescript-eslint/triple-slash-reference": "warn",

        // Require consistent spacing around type annotations [recommended] [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        "@typescript-eslint/type-annotation-spacing": "off",

        // Requires type annotations to exist
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
        // "@typescript-eslint/typedef": "off",

        // Enforces unbound methods are called with their expected scope [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
        // "@typescript-eslint/unbound-method": "warn",

        // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
        // "@typescript-eslint/unified-signatures": "warn",

        // #region Extension Rules
        // In some cases, ESLint provides a rule itself, but it doesn't support TypeScript syntax.
        // In these cases, we create what we call an extension rule that also supports TypeScript, while disabling the original rule.

        // Enforce consistent brace style for blocks [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
        "brace-style": "off",
        "@typescript-eslint/brace-style": "off",

        // Require or disallow trailing comma [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "off",

        // Enforces consistent spacing before and after commas [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": "off",

        // Enforce default parameters to be last
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "warn",

        // enforce dot notation whenever possible [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
        "dot-notation": "off",
        // "@typescript-eslint/dot-notation": "warn",

        // Require or disallow spacing between function identifiers and their invocations [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": "off",

        // Enforce consistent indentation [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        indent: "off",
        "@typescript-eslint/indent": "off",

        // require or disallow initialization in variable declarations
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
        "init-declarations": "off",
        // "@typescript-eslint/init-declarations": "off",

        // Enforce consistent spacing before and after keywords [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "off",

        // Require or disallow an empty line between class members [autofix]
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "warn",

        // Disallow generic Array constructors [recommended] [autofix]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",

        // Disallow duplicate class members
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "warn",

        // Disallow duplicate imports
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
        "no-duplicate-imports": "off",
        // "@typescript-eslint/no-duplicate-imports": "warn",

        // Disallow empty functions [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
        "no-empty-function": "off",
        // "@typescript-eslint/no-empty-function": "warn",

        // Disallow unnecessary parentheses [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": "off",

        // Disallow unnecessary semicolons [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "off",

        // Disallow the use of eval()-like methods [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
        "no-implied-eval": "off",
        // "@typescript-eslint/no-implied-eval": "off",

        // disallow this keywords outside of classes or class-like objects
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "warn",

        // Disallow function declarations that contain unsafe references inside loop statements
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "warn",

        // Disallow literal numbers that lose precision
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "warn",

        // Disallow magic numbers
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
        "no-magic-numbers": "off",
        // "@typescript-eslint/no-magic-numbers": "off",

        // Disallow variable redeclaration
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
        // NOTE: builtinGlobals is false because this config is not intended for browser environment
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["warn", { builtinGlobals: false }],

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        "no-shadow": "off",
        // "@typescript-eslint/no-shadow": "off",

        // Disallow throwing literals as exceptions [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
        "no-throw-literal": "off",
        // "@typescript-eslint/no-throw-literal": "off"

        // Disallow unused expressions
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        // Disallow unused variables [recommended]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "all",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
          },
        ],

        // Disallow the use of variables before they are defined
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
          },
        ],

        // Disallow unnecessary constructors
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        "no-useless-constructor": "off",
        // "@typescript-eslint/no-useless-constructor": "warn",

        // Enforce consistent spacing inside braces [autofix] [prettier]
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": "off",

        // Enforce the consistent use of either backticks, double, or single quotes [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
        quotes: "off",
        "@typescript-eslint/quotes": "off",

        // Disallow async functions which have no await expression [recommended] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
        "require-await": "off",
        // "@typescript-eslint/require-await": "warn",

        // Enforces consistent returning of awaited values [autofix] [types]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
        "return-await": "off",
        // "@typescript-eslint/return-await": "warn",

        // Require or disallow semicolons instead of ASI [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
        semi: "off",
        "@typescript-eslint/semi": "off",

        // Enforces consistent spacing before function parenthesis [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "off",

        // This rule is aimed at ensuring there are spaces around infix operators. [autofix] [prettier]
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "off",
        // #endregion Extension Rules
      },
    },
  ],
};
