const { defaults } = require("jest-config");

module.exports = {
  // All imported modules in your tests should be mocked automatically
  // https://jestjs.io/docs/en/configuration#automock-boolean
  // automock: false,

  // Stop running tests after `n` failures
  // https://jestjs.io/docs/en/configuration#bail-number--boolean
  // bail: 0,

  // Respect "browser" field in package.json when resolving modules
  // https://jestjs.io/docs/en/configuration#browser-boolean
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // https://jestjs.io/docs/en/configuration#cachedirectory-string
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls and instances between every test
  // https://jestjs.io/docs/en/configuration#clearmocks-boolean
  // clearMocks: false,

  // Indicates whether the coverage information should be collected while executing the test
  // https://jestjs.io/docs/en/configuration#collectcoverage-boolean
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // https://jestjs.io/docs/en/configuration#collectcoveragefrom-array
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],

  // The directory where Jest should output its coverage files
  // https://jestjs.io/docs/en/configuration#coveragedirectory-string
  // coverageDirectory: undefined,

  // An array of regexp pattern strings used to skip coverage collection
  // https://jestjs.io/docs/en/configuration#coveragepathignorepatterns-arraystring
  // coveragePathIgnorePatterns: ["/node_modules/"],

  // Indicates which provider should be used to instrument code for coverage
  // https://jestjs.io/docs/en/configuration#coverageprovider-string
  // coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  // https://jestjs.io/docs/en/configuration#coveragereporters-arraystring--stringany
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // https://jestjs.io/docs/en/configuration#coveragethreshold-object
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // https://jestjs.io/docs/en/configuration#dependencyextractor-string
  // dependencyExtractor: undefined,

  // Allows for a label to be printed along side a test while it is running
  // https://jestjs.io/docs/en/configuration#displayname-string-object
  // "displayName": undefined,

  // Make calling deprecated APIs throw helpful error messages
  // https://jestjs.io/docs/en/configuration#errorondeprecated-boolean
  // errorOnDeprecated: false,

  // Specify extra properties to be defined inside the vm for faster lookups
  // https://jestjs.io/docs/en/configuration#extraglobals-arraystring
  // "extraGlobals": undefined,

  // Force coverage collection from ignored files using an array of glob patterns
  // https://jestjs.io/docs/en/configuration#forcecoveragematch-arraystring
  // forceCoverageMatch: [''],

  // A set of global variables that need to be available in all test environments
  // https://jestjs.io/docs/en/configuration#globals-object
  globals: {
    "ts-jest": {
      babelConfig: {
        rootMode: "upward-optional",
      },
    },
  },

  // A path to a module which exports an async function that is triggered once before all test suites
  // https://jestjs.io/docs/en/configuration#globalsetup-string
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // https://jestjs.io/docs/en/configuration#globalteardown-string
  // globalTeardown: undefined,

  // A number limiting the number of tests that are allowed to run at the same time when using test.concurrent
  // https://jestjs.io/docs/en/configuration#globalteardown-string
  // "maxConcurrency": 5,

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // https://jestjs.io/docs/en/cli#--maxworkersnumstring
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // https://jestjs.io/docs/en/configuration#moduledirectories-arraystring
  moduleDirectories: [...defaults.moduleDirectories, "src"],

  // An array of file extensions your modules use
  // https://jestjs.io/docs/en/configuration#modulefileextensions-arraystring
  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "node"
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // https://jestjs.io/docs/en/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss|less)$": require.resolve(
      "identity-obj-proxy"
    ),
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // https://jestjs.io/docs/en/configuration#modulepathignorepatterns-arraystring
  // modulePathIgnorePatterns: [],

  // An alternative API to setting the NODE_PATH env variable
  // https://jestjs.io/docs/en/configuration#modulepaths-arraystring
  // "modulePaths": [],

  // Activates notifications for test results
  // https://jestjs.io/docs/en/configuration#notify-boolean
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // https://jestjs.io/docs/en/configuration#notifymode-string
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // https://jestjs.io/docs/en/configuration#preset-string
  // preset: undefined,

  // Sets the path to the prettier node module used to update inline snapshots
  // https://jestjs.io/docs/en/configuration#prettierpath-string
  // "prettierPath": "prettier",

  // Run tests from one or more projects
  // https://jestjs.io/docs/en/configuration#projects-arraystring--projectconfig
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // https://jestjs.io/docs/en/configuration#reporters-arraymodulename--modulename-options
  // reporters: undefined,

  // Automatically reset mock state between every test
  // https://jestjs.io/docs/en/configuration#resetmocks-boolean
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // https://jestjs.io/docs/en/configuration#resetmodules-boolean
  // resetModules: false,

  // A path to a custom resolver
  // https://jestjs.io/docs/en/configuration#resolver-string
  // resolver: undefined,

  // Automatically restore mock state between every test
  // https://jestjs.io/docs/en/configuration#restoremocks-boolean
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // https://jestjs.io/docs/en/configuration#rootdir-string
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // https://jestjs.io/docs/en/configuration#roots-arraystring
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // https://jestjs.io/docs/en/configuration#runner-string
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // https://jestjs.io/docs/en/configuration#setupfiles-array
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: [
    require.resolve("jest-extended"),
    require.resolve("@testing-library/jest-dom"),
  ],

  // The path to a module that can resolve test<->snapshot path
  // https://jestjs.io/docs/en/configuration#snapshotresolver-string
  // "snapshotResolver": undefined,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // https://jestjs.io/docs/en/configuration#snapshotserializers-arraystring
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  // https://jestjs.io/docs/en/configuration#testenvironment-string
  // testEnvironment: "jest-environment-jsdom",

  // Options that will be passed to the testEnvironment
  // https://jestjs.io/docs/en/configuration#testenvironmentoptions-object
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // https://jestjs.io/docs/en/cli#--testlocationinresults
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // https://jestjs.io/docs/en/configuration#testmatch-arraystring
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // https://jestjs.io/docs/en/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    "/.github/",
    "/.next/",
    "/build/",
    "/dist/",
  ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // https://jestjs.io/docs/en/configuration#testregex-string--arraystring
  // testRegex: [],

  // This option allows the use of a custom results processor
  // https://jestjs.io/docs/en/configuration#testresultsprocessor-string
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // https://jestjs.io/docs/en/configuration#testrunner-string
  // testRunner: "jasmine2",

  // Use a custom sequencer instead of Jest's default
  // https://jestjs.io/docs/en/configuration#testsequencer-string
  // testSequencer: "@jest/test-sequencer",

  // Default timeout of a test in milliseconds.
  // https://jestjs.io/docs/en/configuration#testtimeout-number
  // testTimeout: 5000

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // https://jestjs.io/docs/en/configuration#testurl-string
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // https://jestjs.io/docs/en/configuration#timers-string
  // timers: "real",

  // A map from regular expressions to paths to transformers
  // https://jestjs.io/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { rootMode: "upward-optional" }],
    "^.+\\.tsx?$": require.resolve("ts-jest"),
    "^.+\\.(css|sass|scss|less)$": require.resolve("./transforms/css.js"),
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|sass|scss|less|json)$)": require.resolve(
      "./transforms/file.js"
    ),
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // https://jestjs.io/docs/en/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: [
    ...defaults.transformIgnorePatterns,
    "^.+\\.module\\.(css|sass|scss|less)$",
  ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // https://jestjs.io/docs/en/configuration#unmockedmodulepathpatterns-arraystring
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // https://jestjs.io/docs/en/configuration#verbose-boolean
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // https://jestjs.io/docs/en/configuration#watchpathignorepatterns-arraystring
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // https://jestjs.io/docs/en/cli#--watchman
  // watchman: true,

  // Use a custom watch plugins
  // https://jestjs.io/docs/en/configuration#watchplugins-arraystring--string-object
  watchPlugins: [
    require.resolve("jest-watch-typeahead/filename"),
    require.resolve("jest-watch-typeahead/testname"),
  ],
};
