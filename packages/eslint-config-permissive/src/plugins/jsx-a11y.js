module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.tsx", "*.mdx"],
      plugins: ["jsx-a11y"],

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      // https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
      rules: {
        // Enforce all elements that require alternative text have meaningful information to relay back to end user.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
        "jsx-a11y/alt-text": "warn",

        // Enforce all anchors to contain accessible content.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
        "jsx-a11y/anchor-has-content": "warn",

        // Enforce all anchors are valid, navigable elements.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
        "jsx-a11y/anchor-is-valid": "warn",

        // Enforce elements with aria-activedescendant are tabbable.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
        "jsx-a11y/aria-activedescendant-has-tabindex": "warn",

        // Enforce all aria-* props are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
        "jsx-a11y/aria-props": "warn",

        // Enforce ARIA state and property values are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
        "jsx-a11y/aria-proptypes": "warn",

        // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
        "jsx-a11y/aria-role": "warn",

        // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
        "jsx-a11y/aria-unsupported-elements": "warn",

        // Enforce that autocomplete attributes are used correctly.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md
        "jsx-a11y/autocomplete-valid": "warn",

        // Enforce a clickable non-interactive element has at least one keyboard event listener.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        "jsx-a11y/click-events-have-key-events": "warn",

        // Enforce that a control (an interactive element) has a text label.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
        "jsx-a11y/control-has-associated-label": [
          "warn",
          {
            ignoreElements: [
              "audio",
              "canvas",
              "embed",
              "input",
              "textarea",
              "tr",
              "video",
            ],
            ignoreRoles: [
              "grid",
              "listbox",
              "menu",
              "menubar",
              "radiogroup",
              "row",
              "tablist",
              "toolbar",
              "tree",
              "treegrid",
            ],
            includeRoles: ["alert", "dialog"],
          },
        ],

        // Enforce heading (h1, h2, etc) elements contain accessible content.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
        "jsx-a11y/heading-has-content": "warn",

        // Enforce <html> element has lang prop.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
        "jsx-a11y/html-has-lang": "warn",

        // Enforce iframe elements have a title attribute.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
        "jsx-a11y/iframe-has-title": "warn",

        // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
        "jsx-a11y/img-redundant-alt": "warn",

        // Enforce that elements with interactive handlers like onClick must be focusable.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
        "jsx-a11y/interactive-supports-focus": [
          "warn",
          {
            tabbable: [
              "button",
              "checkbox",
              "link",
              "searchbox",
              "spinbutton",
              "switch",
              "textbox",
            ],
          },
        ],

        // Enforce that a label tag has a text label and an associated control.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        "jsx-a11y/label-has-associated-control": "warn",

        // Enforce lang attribute has a valid value.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
        "jsx-a11y/lang": "warn",

        // Enforces that <audio> and <video> elements must have a <track> for captions.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
        "jsx-a11y/media-has-caption": "warn",

        // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
        "jsx-a11y/mouse-events-have-key-events": "warn",

        // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        "jsx-a11y/no-access-key": "warn",

        // Enforce autoFocus prop is not used.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
        "jsx-a11y/no-autofocus": "warn",

        // Enforce distracting elements are not used.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
        "jsx-a11y/no-distracting-elements": "warn",

        // Interactive elements should not be assigned non-interactive roles.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
        "jsx-a11y/no-interactive-element-to-noninteractive-role": [
          "warn",
          {
            tr: ["none", "presentation"],
          },
        ],

        // Non-interactive elements should not be assigned mouse or keyboard event listeners.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
        "jsx-a11y/no-noninteractive-element-interactions": [
          "warn",
          {
            handlers: [
              "onClick",
              "onError",
              "onLoad",
              "onMouseDown",
              "onMouseUp",
              "onKeyPress",
              "onKeyDown",
              "onKeyUp",
            ],
            alert: ["onKeyUp", "onKeyDown", "onKeyPress"],
            body: ["onError", "onLoad"],
            dialog: ["onKeyUp", "onKeyDown", "onKeyPress"],
            iframe: ["onError", "onLoad"],
            img: ["onError", "onLoad"],
          },
        ],

        // Non-interactive elements should not be assigned interactive roles.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
        "jsx-a11y/no-noninteractive-element-to-interactive-role": [
          "warn",
          {
            ul: [
              "listbox",
              "menu",
              "menubar",
              "radiogroup",
              "tablist",
              "tree",
              "treegrid",
            ],
            ol: [
              "listbox",
              "menu",
              "menubar",
              "radiogroup",
              "tablist",
              "tree",
              "treegrid",
            ],
            li: ["menuitem", "option", "row", "tab", "treeitem"],
            table: ["grid"],
            td: ["gridcell"],
          },
        ],

        // tabIndex should only be declared on interactive elements.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
        "jsx-a11y/no-noninteractive-tabindex": [
          "warn",
          {
            tags: [],
            roles: ["tabpanel"],
            allowExpressionValues: true,
          },
        ],

        // Enforce usage of onBlur over onChange on select menus for accessibility.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
        "jsx-a11y/no-onchange": "warn",

        // Enforce explicit role property is not the same as implicit/default role property on element.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
        "jsx-a11y/no-redundant-roles": "warn",

        // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        "jsx-a11y/no-static-element-interactions": [
          "warn",
          {
            allowExpressionValues: true,
            handlers: [
              "onClick",
              "onMouseDown",
              "onMouseUp",
              "onKeyPress",
              "onKeyDown",
              "onKeyUp",
            ],
          },
        ],

        // Enforce that elements with ARIA roles must have all required attributes for that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
        "jsx-a11y/role-has-required-aria-props": "warn",

        // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
        "jsx-a11y/role-supports-aria-props": "warn",

        // Enforce scope prop is only used on <th> elements.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
        "jsx-a11y/scope": "warn",

        // Enforce tabIndex value is not greater than zero.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
        "jsx-a11y/tabindex-no-positive": "warn",
      },
    },
  ],
};
