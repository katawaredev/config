// For a detailed explanation regarding each configuration property, visit:
// https://eslint.org/docs/user-guide/configuring

const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  // https://eslint.org/docs/rules/
  rules: {
    // #region Possible Errors
    // enforce "for" loop update clause moving the counter in the right direction. [recommended]
    // https://eslint.org/docs/rules/for-direction
    "for-direction": "warn",

    // enforce `return` statements in getters [recommended]
    // https://eslint.org/docs/rules/getter-return
    "getter-return": "warn",

    // disallow using an async function as a Promise executor [recommended]
    // https://eslint.org/docs/rules/no-async-promise-executor
    "no-async-promise-executor": "warn",

    // disallow `await` inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    // "no-await-in-loop": "off",

    // disallow comparing against -0 [recommended]
    // https://eslint.org/docs/rules/no-compare-neg-zero
    // "no-compare-neg-zero": "warn",

    // disallow assignment operators in conditional expressions [recommended]
    // https://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": "warn",

    // disallow the use of `console`
    // https://eslint.org/docs/rules/no-console
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],

    // disallow constant expressions in conditions [recommended]
    // https://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": "warn",

    // disallow control characters in regular expressions [recommended]
    // https://eslint.org/docs/rules/no-control-regex
    "no-control-regex": "warn",

    // disallow the use of `debugger` [recommended]
    // https://eslint.org/docs/rules/no-debugger
    "no-debugger": "warn",

    // disallow duplicate arguments in `function` definitions [recommended]
    // https://eslint.org/docs/rules/no-dupe-args
    "no-dupe-args": "warn",

    // disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    "no-dupe-else-if": "warn",

    // disallow duplicate keys in object literals [recommended]
    // https://eslint.org/docs/rules/no-dupe-keys
    "no-dupe-keys": "warn",

    // disallow duplicate case labels [recommended]
    // https://eslint.org/docs/rules/no-duplicate-case
    "no-duplicate-case": "warn",

    // disallow empty block statements [recommended]
    // https://eslint.org/docs/rules/no-empty
    // "no-empty": "warn",

    // disallow empty character classes in regular expressions [recommended]
    // https://eslint.org/docs/rules/no-empty-character-class
    "no-empty-character-class": "warn",

    // disallow reassigning exceptions in `catch` clauses [recommended]
    // https://eslint.org/docs/rules/no-ex-assign
    "no-ex-assign": "warn",

    // disallow unnecessary boolean casts [recommended] [autofix] [prettier]
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "off",

    // disallow unnecessary parentheses [autofix] [prettier]
    // https://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": "off",

    // disallow unnecessary semicolons [recommended] [autofix] [prettier]
    // https://eslint.org/docs/rules/no-extra-semi
    "no-extra-semi": "off",

    // disallow reassigning `function` declarations [recommended]
    // https://eslint.org/docs/rules/no-func-assign
    "no-func-assign": "warn",

    // disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    "no-import-assign": "warn",

    // disallow variable or `function` declarations in nested blocks [recommended]
    // https://eslint.org/docs/rules/no-inner-declarations
    "no-inner-declarations": "warn",

    // disallow invalid regular expression strings in `RegExp` constructors [recommended]
    // https://eslint.org/docs/rules/no-invalid-regexp
    "no-invalid-regexp": "warn",

    // disallow irregular whitespace [recommended] [prettier]
    // https://eslint.org/docs/rules/no-irregular-whitespace
    "no-irregular-whitespace": "off",

    // disallow characters which are made with multiple code points in character class syntax [recommended]
    // https://eslint.org/docs/rules/no-misleading-character-class
    "no-misleading-character-class": "warn",

    // disallow calling global object properties as functions [recommended]
    // https://eslint.org/docs/rules/no-obj-calls
    "no-obj-calls": "error",

    // disallow calling some `Object.prototype` methods directly on objects [recommended]
    // https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "warn",

    // disallow multiple spaces in regular expressions [recommended] [autofix]
    // https://eslint.org/docs/rules/no-regex-spaces
    "no-regex-spaces": "warn",

    // disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    "no-setter-return": "warn",

    // disallow sparse arrays [recommended]
    // https://eslint.org/docs/rules/no-sparse-arrays
    "no-sparse-arrays": "warn",

    // disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "warn",

    // disallow confusing multiline expressions [recommended] [prettier]
    // https://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "off",

    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements [recommended]
    // https://eslint.org/docs/rules/no-unreachable
    "no-unreachable": "warn",

    // disallow control flow statements in `finally` blocks [recommended]
    // https://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": "warn",

    // disallow negating the left operand of relational operators [recommended]
    // https://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-negation": "warn",

    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    "require-atomic-updates": "warn",

    // require calls to `isNaN()` when checking for `NaN` [recommended]
    // https://eslint.org/docs/rules/use-isnan
    "use-isnan": [
      "warn",
      { enforceForSwitchCase: true, enforceForIndexOf: true },
    ],

    // enforce comparing `typeof` expressions against valid strings [recommended]
    // https://eslint.org/docs/rules/valid-typeof
    "valid-typeof": "warn",
    // #endregion Possible Errors

    // #region Best Practices
    // enforce getter and setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    // "accessor-pairs": "off",

    // enforce `return` statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": "warn",

    // enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    "block-scoped-var": "warn",

    // enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": "warn",

    // enforce a maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    // complexity: "warn",

    // require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    // "consistent-return": "warn",

    // enforce consistent brace style for all control statements [autofix]
    // https://eslint.org/docs/rules/curly
    // "curly": "off",

    // require `default` cases in `switch` statements
    // https://eslint.org/docs/rules/default-case
    "default-case": ["warn", { commentPattern: "^(no|skip) default" }],

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    "default-param-last": "warn",

    // enforce consistent newlines before and after dots [autofix] [prettier]
    // https://eslint.org/docs/rules/dot-location
    "dot-location": "off",

    // enforce dot notation whenever possible [autofix]
    // https://eslint.org/docs/rules/dot-notation
    "dot-notation": "warn",

    // require the use of `===` and `!==` [autofix]
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["warn", "smart"],

    // require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    // "grouped-accessor-pairs": "off",

    // require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "warn",

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    // "max-classes-per-file": "off",

    // disallow the use of `alert`, `confirm`, and `prompt`
    // https://eslint.org/docs/rules/no-alert
    "no-alert": "warn",

    // disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    "no-caller": "error",

    // disallow lexical declarations in case clauses [recommended]
    // https://eslint.org/docs/rules/no-case-declarations
    "no-case-declarations": "warn",

    // disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    "no-constructor-return": "warn",

    // disallow division operators explicitly at the beginning of regular expressions [autofix]
    // https://eslint.org/docs/rules/no-div-regex
    "no-div-regex": "warn",

    // disallow `else` blocks after `return` statements in `if` statements [autofix]
    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": "warn",

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    // "no-empty-function": "warn",

    // disallow empty destructuring patterns [recommended]
    // https://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "warn",

    // disallow `null` comparisons without type-checking operators
    // https://eslint.org/docs/rules/no-eq-null
    // "no-eq-null": "off",

    // disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    "no-eval": "warn",

    // disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    "no-extend-native": "warn",

    // disallow unnecessary calls to `.bind()` [autofix]
    // https://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": "warn",

    // disallow unnecessary labels [autofix]
    // https://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "warn",

    // disallow fallthrough of `case` statements [recommended]
    // https://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": "warn",

    // disallow leading or trailing decimal points in numeric literals [autofix] [prettier]
    // https://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": "off",

    // disallow assignments to native objects or read-only global variables [recommended]
    // https://eslint.org/docs/rules/no-global-assign
    "no-global-assign": "warn",

    // disallow shorthand type conversions [autofix]
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": "warn",

    // disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    // "no-implicit-globals": "off",

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    "no-implied-eval": "warn",

    // disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    "no-invalid-this": "warn",

    // disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    "no-iterator": "error",

    // disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    // "no-lone-blocks": "warn",

    // disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/rules/no-loop-func
    "no-loop-func": "warn",

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // "no-magic-numbers": "off",

    // disallow multiple spaces [autofix] [prettier]
    // https://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": "off",

    // disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    // "no-multi-str": "off",

    // disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    "no-new": "warn",

    // disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    "no-new-func": "warn",

    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    // https://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": "warn",

    // disallow octal literals [recommended]
    // https://eslint.org/docs/rules/no-octal
    "no-octal": "warn",

    // disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": "warn",

    // disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
    // "no-param-reassign": "warn",

    // disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    "no-proto": "error",

    // disallow variable redeclaration [recommended]
    // https://eslint.org/docs/rules/no-redeclare
    "no-redeclare": "warn",

    // disallow certain properties on certain objects
    // https://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        object: "require",
        property: "ensure",
        message: "Use import() instead.",
      },
      {
        object: "System",
        property: "import",
        message: "Use import() instead.",
      },
    ],

    // disallow assignment operators in `return` statements
    // https://eslint.org/docs/rules/no-return-assign
    "no-return-assign": "warn",

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    // "no-return-await": "warn",

    // disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    "no-script-url": "warn",

    // disallow assignments where both sides are exactly the same [recommended]
    // https://eslint.org/docs/rules/no-self-assign
    "no-self-assign": "warn",

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    "no-self-compare": "warn",

    // disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    "no-sequences": "warn",

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": "warn",

    // disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "warn",

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // disallow unused labels [recommended] [autofix]
    // https://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": "warn",

    // disallow unnecessary calls to `.call()` and `.apply()` [performance]
    // https://eslint.org/docs/rules/no-useless-call
    "no-useless-call": "warn",

    // disallow unnecessary `catch` clauses [recommended]
    // https://eslint.org/docs/rules/no-useless-catch
    // "no-useless-catch": "warn",

    // disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    // "no-useless-concat": "warn",

    // disallow unnecessary escape characters [recommended]
    // https://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "warn",

    // disallow redundant return statements [autofix]
    // https://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "warn",

    // disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    // "no-void": "warn",

    // disallow specified warning terms in comments
    // https://eslint.org/docs/rules/no-warning-comments
    // "no-warning-comments": "off",

    // disallow `with` statements [recommended]
    // https://eslint.org/docs/rules/no-with
    "no-with": "warn",

    // enforce using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    // "prefer-named-capture-group": "warn",

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": ["warn", { allowEmptyReject: true }],

    // disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    // "prefer-regex-literals": "warn",

    // enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    radix: "warn",

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    "require-await": "warn",

    // enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    // "require-unicode-regexp": "off",

    // require `var` declarations be placed at the top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    "vars-on-top": "warn",

    // require parentheses around immediate `function` invocations [autofix]
    // https://eslint.org/docs/rules/wrap-iife
    "wrap-iife": "warn",

    // require or disallow "Yoda" conditions [autofix]
    // https://eslint.org/docs/rules/yoda
    yoda: "warn",
    // #endregion Best Practices

    // #region Strict Mode
    // require or disallow strict mode directives [autofix]
    // https://eslint.org/docs/rules/strict
    strict: ["warn", "never"],
    // #endregion Strict Mode

    // #region Variables
    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // "init-declarations": "off",

    // disallow deleting variables [recommended]
    // https://eslint.org/docs/rules/no-delete-var
    "no-delete-var": "warn",

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "warn",

    // disallow specified global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    "no-restricted-globals": ["error"].concat(restrictedGlobals),

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    // "no-shadow": "off",

    // disallow identifiers from shadowing restricted names [recommended]
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": "warn",

    // disallow the use of undeclared variables unless mentioned in `/*global */` comments [recommended]
    // https://eslint.org/docs/rules/no-undef
    "no-undef": "error",

    // disallow initializing variables to `undefined` [autofix]
    // https://eslint.org/docs/rules/no-undef-init
    "no-undef-init": "warn",

    // disallow the use of `undefined` as an identifier
    // https://eslint.org/docs/rules/no-undefined
    "no-undefined": "warn",

    // disallow unused variables [recommended]
    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": [
      "warn",
      {
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],

    // disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    // #endregion Variables

    // #region Node.js and CommonJS
    // require `return` statements after callbacks
    // https://eslint.org/docs/rules/callback-return
    // "callback-return": "off",

    // require `require()` calls to be placed at top-level module scope
    // https://eslint.org/docs/rules/global-require
    // "global-require": "off",

    // require error handling in callbacks
    // https://eslint.org/docs/rules/handle-callback-err
    // "handle-callback-err": ["warn", "^.*(e|E)rr"],

    // disallow use of the `Buffer()` constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    "no-buffer-constructor": "warn",

    // disallow `require` calls to be mixed with regular variable declarations
    // https://eslint.org/docs/rules/no-mixed-requires
    // "no-mixed-requires": "off",

    // disallow `new` operators with calls to `require`
    // https://eslint.org/docs/rules/no-new-require
    "no-new-require": "warn",

    // disallow string concatenation with `__dirname` and `__filename`
    // https://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "warn",

    // disallow the use of `process.env`
    // https://eslint.org/docs/rules/no-process-env
    "no-process-env": "off",

    // disallow the use of `process.exit()`
    // https://eslint.org/docs/rules/no-process-exit
    "no-process-exit": "off",

    // disallow specified modules when loaded by `require`
    // https://eslint.org/docs/rules/no-restricted-modules
    // "no-restricted-modules": "off",

    // disallow synchronous methods [performance]
    // https://eslint.org/docs/rules/no-sync
    "no-sync": "warn",
    // #endregion Node.js and CommonJS

    // #region ECMAScript 6
    // require braces around arrow function bodies [autofix] [prettier]
    // https://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": "off",

    // require parentheses around arrow function arguments [autofix] [prettier]
    // https://eslint.org/docs/rules/arrow-parens
    "arrow-parens": "off",

    // enforce consistent spacing before and after the arrow in arrow functions [autofix] [prettier]
    // https://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": "off",

    // require `super()` calls in constructors [recommended]
    // https://eslint.org/docs/rules/constructor-super
    "constructor-super": "warn",

    // enforce consistent spacing around `*` operators in generator functions [autofix] [prettier]
    // https://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": "off",

    // disallow reassigning class members [recommended]
    // https://eslint.org/docs/rules/no-class-assign
    "no-class-assign": "warn",

    // disallow arrow functions where they could be confused with comparisons [autofix] [prettier]
    // https://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": "off",

    // disallow reassigning `const` variables [recommended]
    // https://eslint.org/docs/rules/no-const-assign
    "no-const-assign": "error",

    // disallow duplicate class members [recommended]
    // https://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": "warn",

    // disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    // "no-duplicate-imports": "warn",

    // disallow `new` operators with the `Symbol` object [recommended]
    // https://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": "warn",

    // disallow specified modules when loaded by `import`
    // https://eslint.org/docs/rules/no-restricted-imports
    // "no-restricted-imports": "off",

    // disallow `this`/`super` before calling `super()` in constructors [recommended]
    // https://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": "warn",

    // disallow unnecessary computed property keys in objects and classes [autofix]
    // https://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": "warn",

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    // "no-useless-constructor": "warn",

    // disallow renaming import, export, and destructured assignments to the same name [autofix] [prettier]
    // https://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": "off",

    // require `let` or `const` instead of `var` [autofix]
    // https://eslint.org/docs/rules/no-var
    "no-var": "warn",

    // require or disallow method and property shorthand syntax for object literals [autofix]
    // https://eslint.org/docs/rules/object-shorthand
    "object-shorthand": "warn",

    // require using arrow functions for callbacks [autofix]
    // https://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-arrow-callback": "warn",

    // require `const` declarations for variables that are never reassigned after declared [autofix]
    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": ["warn", { destructuring: "all" }],

    // require destructuring from arrays and/or objects [autofix]
    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "warn",
      { array: false, object: true },
      { enforceForRenamedProperties: false },
    ],

    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals [autofix]
    // https://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-numeric-literals": "warn",

    // require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    // "prefer-rest-params": "warn",

    // require spread operators instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    // "prefer-spread": "warn",

    // require template literals instead of string concatenation [autofix]
    // https://eslint.org/docs/rules/prefer-template
    "prefer-template": "warn",

    // require generator functions to contain `yield` [recommended]
    // https://eslint.org/docs/rules/require-yield
    "require-yield": "warn",

    // enforce spacing between rest and spread operators and their expressions [autofix] [prettier]
    // https://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": "off",

    // enforce sorted import declarations within modules [autofix]
    // https://eslint.org/docs/rules/sort-imports
    // "sort-imports": "warn",

    // require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    "symbol-description": "warn",

    // require or disallow spacing around embedded expressions of template strings [autofix] [prettier]
    // https://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": "off",

    // require or disallow spacing around the `*` in `yield*` expressions [autofix] [prettier]
    // https://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": "off",
    // #endregion ECMAScript 6

    // #region Stylistic Issues
    // enforce linebreaks after opening and before closing array brackets [autofix] [prettier]
    // https://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-newline": "off",

    // enforce consistent spacing inside array brackets [autofix] [prettier]
    // https://eslint.org/docs/rules/array-bracket-spacing
    "array-bracket-spacing": "off",

    // enforce line breaks after each array element [autofix] [prettier]
    // https://eslint.org/docs/rules/array-element-newline
    "array-element-newline": "off",

    // disallow or enforce spaces inside of blocks after opening block and before closing block [autofix] [prettier]
    // https://eslint.org/docs/rules/block-spacing
    "block-spacing": "off",

    // enforce consistent brace style for blocks [autofix] [prettier]
    // https://eslint.org/docs/rules/brace-style
    "brace-style": "off",

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    // camelcase: "off",

    // enforce or disallow capitalization of the first letter of a comment [autofix]
    // https://eslint.org/docs/rules/capitalized-comments
    // "capitalized-comments": "off",

    // require or disallow trailing commas [autofix] [prettier]
    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": "off",

    // enforce consistent spacing before and after commas [autofix] [prettier]
    // https://eslint.org/docs/rules/comma-spacing
    "comma-spacing": "off",

    // enforce consistent comma style [autofix] [prettier]
    // https://eslint.org/docs/rules/comma-style
    "comma-style": "off",

    // enforce consistent spacing inside computed property brackets [autofix] [prettier]
    // https://eslint.org/docs/rules/computed-property-spacing
    "computed-property-spacing": "off",

    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    // "consistent-this": ["warn", "that", "self", "me"],

    // require or disallow newline at the end of files [autofix] [prettier]
    // https://eslint.org/docs/rules/eol-last
    "eol-last": "off",

    // require or disallow spacing between function identifiers and their invocations [autofix] [prettier]
    // https://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": "off",

    // require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    "func-name-matching": "warn",

    // require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    "func-names": [
      "warn",
      "as-needed",
      {
        generators: "as-needed",
      },
    ],

    // enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // "func-style": "off",

    // enforce line breaks between arguments of a function call [autofix] [prettier]
    // https://eslint.org/docs/rules/function-call-argument-newline
    "function-call-argument-newline": "off",

    // enforce consistent line breaks inside function parentheses [autofix] [prettier]
    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": "off",

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-blacklist
    // "id-blacklist": "off",

    // enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    // "id-length": "off",

    // require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    // "id-match": "off",

    // enforce the location of arrow function bodies [autofix] [prettier]
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": "off",

    // enforce consistent indentation [autofix] [prettier]
    // https://eslint.org/docs/rules/indent
    indent: "off",

    // enforce the consistent use of either double or single quotes in JSX attributes [autofix] [prettier]
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": "off",

    // enforce consistent spacing between keys and values in object literal properties [autofix] [prettier]
    // https://eslint.org/docs/rules/key-spacing
    "key-spacing": "off",

    // enforce consistent spacing before and after keywords [autofix] [prettier]
    // https://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": "off",

    // enforce position of line comments [prettier]
    // https://eslint.org/docs/rules/line-comment-position
    "line-comment-position": "off",

    // enforce consistent linebreak style [autofix] [prettier]
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": "off",

    // require empty lines around comments [autofix]
    // https://eslint.org/docs/rules/lines-around-comment
    // "lines-around-comment": "off",

    // require or disallow an empty line between class members [autofix]
    // https://eslint.org/docs/rules/lines-between-class-members
    // "lines-between-class-members": "off",

    // enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    // "max-depth": "warn",

    // enforce a maximum line length [prettier]
    // https://eslint.org/docs/rules/max-len
    "max-len": "off",

    // enforce a maximum number of lines per file
    // https://eslint.org/docs/rules/max-lines
    // "max-lines": "off",

    // enforce a maximum number of line of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    // "max-lines-per-function": "off",

    // enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    // "max-nested-callbacks": "warn",

    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    // "max-params": "off",

    // enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    // "max-statements": "off",

    // enforce a maximum number of statements allowed per line [prettier]
    // https://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": "off",

    // enforce a particular style for multiline comments [autofix]
    // https://eslint.org/docs/rules/multiline-comment-style
    // "multiline-comment-style": "off",

    // enforce newlines between operands of ternary expressions [prettier]
    // https://eslint.org/docs/rules/multiline-ternary
    "multiline-ternary": "off",

    // require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    // "new-cap": "off",

    // enforce or disallow parentheses when invoking a constructor with no arguments [autofix] [prettier]
    // https://eslint.org/docs/rules/new-parens
    "new-parens": "off",

    // require a newline after each call in a method chain [autofix] [prettier]
    // https://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": "off",

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    "no-array-constructor": "warn",

    // disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    // "no-bitwise": "off",

    // disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    // "no-continue": "off",

    // disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    // "no-inline-comments": "off",

    // disallow `if` statements as the only statement in `else` blocks [autofix]
    // https://eslint.org/docs/rules/no-lonely-if
    // "no-lonely-if": "warn",

    // disallow mixed binary operators [prettier]
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": "off",

    // disallow mixed spaces and tabs for indentation [prettier]
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": "off",

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    // "no-multi-assign": "off",

    // disallow multiple empty lines [autofix] [prettier]
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": "off",

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    // "no-negated-condition": "off",

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    // "no-nested-ternary": "off",

    // disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    "no-new-object": "warn",

    // disallow the unary operators `++` and `--`
    // https://eslint.org/docs/rules/no-plusplus
    // "no-plusplus": "off",

    // disallow specified syntax
    // https://eslint.org/docs/rules/no-restricted-syntax
    // "no-restricted-syntax": "off",

    // disallow all tabs [prettier]
    // https://eslint.org/docs/rules/no-tabs
    "no-tabs": "off",

    // disallow ternary operators
    // https://eslint.org/docs/rules/no-ternary
    // "no-ternary": "off",

    // disallow trailing whitespace at the end of lines [autofix] [prettier]
    // https://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": "off",

    // disallow dangling underscores in identifiers [prettier]
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": "off",

    // disallow ternary operators when simpler alternatives exist [autofix]
    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": "warn",

    // disallow whitespace before properties [autofix] [prettier]
    // https://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "off",

    // enforce the location of single-line statements [autofix] [prettier]
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": "off",

    // enforce consistent line breaks inside braces [autofix] [prettier]
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": "off",

    // enforce consistent spacing inside braces [autofix] [prettier]
    // https://eslint.org/docs/rules/object-curly-spacing
    "object-curly-spacing": "off",

    // enforce placing object properties on separate lines [autofix] [prettier]
    // https://eslint.org/docs/rules/object-property-newline
    "object-property-newline": "off",

    // enforce variables to be declared either together or separately in functions [autofix]
    // https://eslint.org/docs/rules/one-var
    // "one-var": "off",

    // require or disallow newlines around variable declarations [autofix] [prettier]
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": "off",

    // require or disallow assignment operator shorthand where possible [autofix]
    // https://eslint.org/docs/rules/operator-assignment
    "operator-assignment": "warn",

    // enforce consistent linebreak style for operators [autofix] [prettier]
    // https://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": "off",

    // require or disallow padding within blocks [autofix] [prettier]
    // https://eslint.org/docs/rules/padded-blocks
    "padded-blocks": "off",

    // require or disallow padding lines between statements [autofix] [prettier]
    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": "off",

    // disallow the use of `Math.pow` in favor of the `**` operator [autofix]
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "warn",

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. [autofix]
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "warn",

    // require quotes around object literal property names [autofix] [prettier]
    // https://eslint.org/docs/rules/quote-props
    "quote-props": "off",

    // enforce the consistent use of either backticks, double, or single quotes [autofix] [prettier]
    // https://eslint.org/docs/rules/quotes
    quotes: "off",

    // require or disallow semicolons instead of ASI [autofix] [prettier]
    // https://eslint.org/docs/rules/semi
    semi: "off",

    // enforce consistent spacing before and after semicolons [autofix] [prettier]
    // https://eslint.org/docs/rules/semi-spacing
    "semi-spacing": "off",

    // enforce location of semicolons [autofix] [prettier]
    // https://eslint.org/docs/rules/semi-style
    "semi-style": "off",

    // require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    // "sort-keys": "off",

    // require variables within the same declaration block to be sorted [autofix]
    // https://eslint.org/docs/rules/sort-vars
    // "sort-vars": "off",

    // enforce consistent spacing before blocks [autofix] [prettier]
    // https://eslint.org/docs/rules/space-before-blocks
    "space-before-blocks": "off",

    // enforce consistent spacing before `function` definition opening parenthesis [autofix] [prettier]
    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": "off",

    // enforce consistent spacing inside parentheses [autofix] [prettier]
    // https://eslint.org/docs/rules/space-in-parens
    "space-in-parens": "off",

    // require spacing around infix operators [autofix] [prettier]
    // https://eslint.org/docs/rules/space-infix-ops
    "space-infix-ops": "off",

    // enforce consistent spacing before or after unary operators [autofix] [prettier]
    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": "off",

    // enforce consistent spacing after the `//` or `/*` in a comment [autofix]
    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": "warn",

    // enforce spacing around colons of switch statements [autofix] [prettier]
    // https://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": "off",

    // require or disallow spacing between template tags and their literals [autofix] [prettier]
    // https://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": "off",

    // require or disallow Unicode byte order mark (BOM) [autofix]
    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["warn", "never"],

    // require parenthesis around regex literals [autofix] [prettier]
    // https://eslint.org/docs/rules/wrap-regex
    "wrap-regex": "off",
    // #endregion Stylistic Issues
  },
};
