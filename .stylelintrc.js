// Stylelint v15.10.3
module.exports = {
  "rules": {
    "custom-media-pattern": null,
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "unit-disallowed-list": [
      [
        "cm",
        "in",
        "mm",
        "mozmm",
        "pc",
        "pt",
        "px",
        "q"
      ],
      {
        "ignoreMediaFeatureNames": {
          "px": [
            "min-width",
            "max-width"
          ]
        }
      }
    ],
    "annotation-no-unknown": true,
    "at-rule-empty-line-before": null,
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": null,
    "at-rule-name-space-after": "always-single-line",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": null,
    "block-no-empty": [
      true,
      {
        "severity": "warning"
      }
    ],
    "color-hex-case": "upper",
    "color-hex-length": "short",
    "color-named": [
      "always-where-possible"
    ],
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": null,
    "comment-whitespace-inside": "always",
    "comment-no-empty": true,
    "custom-property-empty-line-before": null,
    "custom-property-no-missing-var-function": true,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": [
          "consecutive-duplicates-with-different-values"
        ]
      }
    ],
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 3,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": null,
    "declaration-colon-space-before": null,
    "declaration-empty-line-before": null,
    "declaration-no-important": [
      true,
      {
        "severity": "warning"
      }
    ],
    "declaration-property-value-no-unknown": true,
    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "named-where-possible",
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "never-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-no-unknown": true,
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": null,
    "function-url-quotes": "never",
    "function-whitespace-after": "always",
    "indentation": [
      2,
      {
        "indentClosingBrace": false
      }
    ],
    "keyframe-declaration-no-important": true,
    "keyframes-name-pattern": null,
    "length-zero-no-unit": null,
    "linebreaks": null,
    "max-empty-lines": 2,
    "max-line-length": [
      100,
      {
        "ignore": [
          "comments"
        ]
      }
    ],
    "max-nesting-depth": [
      2,
      {
        "severity": "warning"
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-value-no-unknown": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "media-query-no-invalid": true,
    "named-grid-areas-no-invalid": true,
    "no-descending-specificity": [
      true,
      {
        "ignore": [
          "selectors-within-list"
        ]
      },
      {
        "severity": "warning"
      }
    ],
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",
    "number-max-precision": 4,
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "ignore": [
          "after-comment",
          "inside-block"
        ]
      }
    ],
    "selector-anb-no-unmatchable": true,
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": null,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": null,
    "selector-max-class": [
      3,
      {
        "severity": "warning"
      }
    ],
    "selector-max-combinators": [
      2,
      {
        "severity": "warning"
      }
    ],
    "selector-max-compound-selectors": [
      3,
      {
        "severity": "warning"
      }
    ],
    "selector-max-empty-lines": 2,
    "selector-max-id": 1,
    "selector-max-pseudo-class": null,
    "selector-max-specificity": [
      "1,3,1",
      {
        "severity": "warning"
      }
    ],
    "selector-max-type": [
      2,
      {
        "severity": "warning"
      }
    ],
    "selector-max-universal": 1,
    "selector-nested-pattern": null,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute"
        ]
      }
    ],
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "first"
        ]
      }
    ],
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [
      true,
      {
        "ignore": [
          "custom-elements"
        ]
      }
    ],
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": [
      "single",
      {
        "avoidEscape": true
      }
    ],
    "time-min-milliseconds": 100,
    "unicode-bom": "never",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": [
      "lower",
      {
        "ignoreProperties": [
          "/^--/"
        ]
      }
    ],
    "value-list-comma-newline-after": null,
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": null,
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true
  }
}