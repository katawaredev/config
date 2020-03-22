module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
      plugins: ["jest"],
      env: {
        "jest/globals": true,
      },

      // https://github.com/jest-community/eslint-plugin-jest#rules
      rules: {
        // Enforce consistent test or it keyword [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
        "jest/consistent-test-it": "warn",

        // Enforce assertion to be made in a test body [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
        "jest/expect-expect": "warn",

        // Disallow capitalized test names [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
        "jest/lowercase-name": "warn",

        // Disallow alias methods [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
        "jest/no-alias-methods": "warn",

        // Disallow commented out tests [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
        // "jest/no-commented-out-tests": "warn",

        // Disallow disabled tests [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
        "jest/no-disabled-tests": "warn",

        // Disallow duplicate hooks within a describe block
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
        "jest/no-duplicate-hooks": "warn",

        // Disallow using expect().resolves
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
        // "jest/no-expect-resolves": "off",

        // Disallow export from test files [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
        "jest/no-export": "warn",

        // Disallow focused tests [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
        "jest/no-focused-tests": "warn",

        // Disallow setup and teardown hooks
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
        // "jest/no-hooks": "off",

        // Disallow identical titles [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
        "jest/no-identical-title": "warn",

        // Disallow conditional logic
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
        // "jest/no-if": "off",

        // Disallow Jasmine globals [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
        "jest/no-jasmine-globals": "warn",

        // Disallow importing jest [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
        "jest/no-jest-import": "warn",

        // Disallow large snapshots
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
        // "jest/no-large-snapshots": "off",

        // Disallow manually importing from __mocks__ [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
        "jest/no-mocks-import": "warn",

        // Prevents expect statements outside of a test or it block [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
        "jest/no-standalone-expect": "warn",

        // Using a callback in asynchronous tests [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
        "jest/no-test-callback": "warn",

        // Disallow using f & x prefixes to define focused/skipped tests [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
        "jest/no-test-prefixes": "warn",

        // Disallow explicitly returning from tests
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
        "jest/no-test-return-statement": "warn",

        // Disallow using toBeTruthy() & toBeFalsy()
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
        // "jest/no-truthy-falsy": "off",

        // Prevent catch assertions in tests [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/no-try-expect.md
        "jest/no-try-expect": "warn",

        // Suggest using toBeCalledWith() OR toHaveBeenCalledWith()
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
        // "jest/prefer-called-with": "off",

        // Suggest using expect.assertions() OR expect.hasAssertions()
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
        // "jest/prefer-expect-assertions": "off",

        // Suggest to have all hooks at top-level before tests
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
        // "jest/prefer-hooks-on-top": "off",

        // Suggest using toMatchInlineSnapshot() [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
        "jest/prefer-inline-snapshots": "warn",

        // Suggest using jest.spyOn() [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
        "jest/prefer-spy-on": "warn",

        // Suggest using toStrictEqual() [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
        "jest/prefer-strict-equal": "warn",

        // Suggest using toBeNull() [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
        "jest/prefer-to-be-null": "warn",

        // Suggest using toBeUndefined() [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
        "jest/prefer-to-be-undefined": "warn",

        // Suggest using toContain() [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
        "jest/prefer-to-contain": "warn",

        // Suggest using toHaveLength() [recommended] [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
        "jest/prefer-to-have-length": "warn",

        // Suggest using test.todo() [autofix]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
        "jest/prefer-todo": "warn",

        // Require a top-level describe block
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
        // "jest/require-top-level-describe": "off",

        // Require that toThrow() and toThrowError includes a message
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md
        // "jest/require-to-throw-message": "off",

        // Enforce valid describe() callback [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
        "jest/valid-describe": "warn",

        // Enforce having return statement when testing with promises [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
        "jest/valid-expect-in-promise": "warn",

        // Enforce valid expect() usage [recommended]
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
        "jest/valid-expect": "warn",

        // Enforce valid titles for jest blocks
        // https://github.com//jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
        // "jest/valid-title": "off"
      },
    },
  ],
};
