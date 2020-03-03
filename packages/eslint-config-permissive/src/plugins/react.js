module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.tsx", "*.mdx"],
      plugins: ["react"],

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },

      // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
      rules: {
        // Enforces consistent naming for boolean props
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
        // "react/boolean-prop-naming": "off",

        // Forbid "button" element without an explicit "type" attribute
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
        "react/button-has-type": "warn",

        // Enforce all defaultProps are defined and not "required" in propTypes.
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
        // "react/default-props-match-prop-types": "warn",

        // Enforce consistent usage of destructuring assignment of props, state, and context
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        // "react/destructuring-assignment": "off",

        // Prevent missing displayName in a React component definition [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/display-name": "warn",

        // Forbid certain props on components
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        // "react/forbid-component-props": "off",

        // Forbid certain props on DOM Nodes
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
        // "react/forbid-dom-props": "off",

        // Forbid certain elements
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        // "react/forbid-elements": "off",

        // Forbid using another component's propTypes
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],

        // Forbid certain propTypes
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        // "react/forbid-prop-types": "off",

        // Standardize the way function component get defined [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        // "react/function-component-definition": "warn",

        // Reports when this.state is accessed within setState
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
        "react/no-access-state-in-setstate": "warn",

        // Prevent adjacent inline elements not separated by whitespace.
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
        "react/no-adjacent-inline-elements": "warn",

        // Prevent usage of Array index in keys
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        "react/no-array-index-key": "warn",

        // Prevent passing children as props [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        "react/no-children-prop": "warn",

        // Prevent usage of dangerous JSX props
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        "react/no-danger": "warn",

        // Report when a DOM element is using both children and dangerouslySetInnerHTML [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        "react/no-danger-with-children": "warn",

        // Prevent usage of deprecated methods, including component lifecycle methods [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-deprecated": "warn",

        // Prevent usage of setState in componentDidMount
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-mount-set-state": "warn",

        // Prevent usage of setState in componentDidUpdate
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-did-update-set-state": "warn",

        // Prevent direct mutation of this.state [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        "react/no-direct-mutation-state": "warn",

        // Prevent usage of findDOMNode [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        "react/no-find-dom-node": "warn",

        // Prevent usage of isMounted [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        "react/no-is-mounted": "warn",

        // Prevent multiple component definition per file
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        // "react/no-multi-comp": "off",

        // Flag shouldComponentUpdate when extending PureComponent
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
        "react/no-redundant-should-component-update": "warn",

        // Prevent usage of the return value of React.render [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
        "react/no-render-return-value": "warn",

        // Prevent usage of setState
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        // "react/no-set-state": "off",

        // Prevent string definitions for references and prevent referencing this.refs [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        "react/no-string-refs": ["warn", { noTemplateLiterals: true }],

        // Report "this" being used in stateless components
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
        "react/no-this-in-sfc": "warn",

        // Prevent common typos
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        "react/no-typos": "error",

        // Detect unescaped HTML entities, which might represent malformed tags [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        "react/no-unescaped-entities": "warn",

        // Prevent usage of unknown DOM property [recommended] [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        "react/no-unknown-property": "warn",

        // Prevent usage of unsafe lifecycle methods
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
        "react/no-unsafe": ["warn", { checkAliases: true }],

        // Prevent definitions of unused prop types
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        // "react/no-unused-prop-types": "warn",

        // Prevent definition of unused state fields
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
        "react/no-unused-state": "warn",

        // Prevent usage of setState in componentWillUpdate
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
        "react/no-will-update-set-state": "warn",

        // Enforce ES5 or ES6 class for React Components
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        // "react/prefer-es6-class": "warn",

        // Require read-only props. [autofix] [flow]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
        // "react/prefer-read-only-props": "off",

        // Enforce stateless components to be written as a pure function
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        // "react/prefer-stateless-function": "off",

        // Prevent missing props validation in a React component definition [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        // "react/prop-types": "off",

        // Prevent missing React when using JSX [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/react-in-jsx-scope": "error",

        // Enforce a defaultProps definition for every prop that is not a required prop.
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        // "react/require-default-props": "off",

        // Enforce React components to have a shouldComponentUpdate method
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
        "react/require-optimization": "warn",

        // Enforce ES5 or ES6 class for returning value in render function [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        "react/require-render-return": "error",

        // Prevent extra closing tags for components without children [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/self-closing-comp": "warn",

        // Enforce component methods order [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        "react/sort-comp": "warn",

        // Enforce propTypes declarations alphabetical sorting
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        // "react/sort-prop-types": "off",

        // State initialization in an ES6 class component should be in a constructor
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
        // "react/state-in-constructor": "off",

        // Defines where React component static properties should be positioned.
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
        // "react/static-property-placement": "off",

        // Enforce style prop value is an object
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        "react/style-prop-object": "warn",

        // Prevent passing of children to void DOM elements (e.g. <br />).
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
        "react/void-dom-elements-no-children": "warn",

        // #region JSX-specific rules
        // Enforce boolean attributes notation in JSX [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "react/jsx-boolean-value": "warn",

        // Ensures inline tags are not rendered without spaces between them [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
        "react/jsx-child-element-spacing": "off",

        // Validate closing bracket location in JSX [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-bracket-location": "off",

        // Validate closing tag location for multiline JSX [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        "react/jsx-closing-tag-location": "off",

        // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        "react/jsx-curly-brace-presence": ["warn", "never"],

        // Enforce consistent line breaks inside jsx curly [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
        "react/jsx-curly-newline": "off",

        // Enforce or disallow spaces inside of curly braces in JSX attributes [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        "react/jsx-curly-spacing": "off",

        // Disallow or enforce spaces around equal signs in JSX attributes [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        "react/jsx-equals-spacing": "off",

        // Restrict file extensions that may contain JSX
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        // "react/jsx-filename-extension": "off",

        // Ensure proper position of the first property in JSX [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-first-prop-new-line": "off",

        // Enforce shorthand or standard form for React fragments [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
        "react/jsx-fragments": "warn",

        // Enforce event handler naming conventions in JSX
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        // "react/jsx-handler-names": "off",

        // Validate JSX indentation [autofix] [pretier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent": "off",

        // Validate props indentation in JSX [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-indent-props": "off",

        // Report missing key props in iterators/collection literals [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-key": "warn",

        // Validate JSX maximum depth
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
        // "react/jsx-max-depth": "off",

        // Limit maximum of props on a single line in JSX [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        "react/jsx-max-props-per-line": "off",

        // Prevents usage of Function.prototype.bind and arrow functions in React component props [performance]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-bind": "warn",

        // Comments inside children section of tag should be placed inside braces [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        "react/jsx-no-comment-textnodes": "warn",

        // Enforce no duplicate props [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-duplicate-props": "warn",

        // Prevent using string literals in React component definition
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        // "react/jsx-no-literals": "off",

        // Forbid javascript: URLs
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
        "react/jsx-no-script-url": ["warn", [{ name: "Link", props: ["to"] }]],

        // Forbid target="_blank" attribute without rel="noopener noreferrer" [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        "react/jsx-no-target-blank": "warn",

        // Disallow undeclared variables in JSX [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        "react/jsx-no-undef": "error",

        // Disallow unnecessary fragments [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
        "react/jsx-no-useless-fragment": "warn",

        // Limit to one expression per line in JSX [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        "react/jsx-one-expression-per-line": "off",

        // Enforce PascalCase for user-defined JSX components
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-pascal-case": ["warn", { allowAllCaps: true, ignore: [] }],

        // Disallow multiple spaces between inline JSX props [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
        "react/jsx-props-no-multi-spaces": "off",

        // Prevent JSX prop spreading
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        // "react/jsx-props-no-spreading": "off",

        // Enforce default props alphabetical sorting
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
        // "react/jsx-sort-default-props": "off",

        // Enforce props alphabetical sorting [autofix]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        // "react/jsx-sort-props": "off",

        // Validate whitespace in and around the JSX opening and closing brackets [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        "react/jsx-tag-spacing": "off",

        // Prevent React to be marked as unused [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-react": "warn",

        // Prevent variables used in JSX to be marked as unused [recommended]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-uses-vars": "warn",

        // Prevent missing parentheses around multilines JSX [autofix] [prettier]
        // https://github.com//yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        "react/jsx-wrap-multilines": "off"
        // #endregion JSX-specific rules
      }
    }
  ]
};
