// Stylelint v16.5.0
export default {
  "extends": "stylelint-config-standard",
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
    "at-rule-empty-line-before": null,
    "block-no-empty": [
      true,
      {
        "severity": "warning"
      }
    ],
    "color-named": [
      "always-where-possible"
    ],
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": null,
    "comment-no-empty": true,
    "custom-property-empty-line-before": null,
    "custom-property-no-missing-var-function": true,
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
    "declaration-block-single-line-max-declarations": 3,
    "declaration-empty-line-before": null,
    "declaration-no-important": [
      true,
      {
        "severity": "warning"
      }
    ],
    "declaration-property-value-no-unknown": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "named-where-possible",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-no-unknown": true,
    "function-url-no-scheme-relative": null,
    "function-url-quotes": "never",
    "import-notation": null,
    "keyframe-declaration-no-important": true,
    "keyframes-name-pattern": null,
    "length-zero-no-unit": null,
    "max-nesting-depth": [
      2,
      {
        "severity": "warning"
      }
    ],
    "media-feature-name-no-unknown": true,
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
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": true,
    "no-unknown-animations": true,
    "no-unknown-custom-media": true,
    "property-no-unknown": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": ["first-nested"],
        "ignore": [
          "after-comment",
          "inside-block"
        ]
      }
    ],
    "selector-attribute-quotes": null,
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
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "first"
        ]
      }
    ],
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": [
      true,
      {
        "ignore": [
          "custom-elements"
        ]
      }
    ],
    "string-no-newline": true,
    "time-min-milliseconds": 100,
    "unit-no-unknown": true,
    "value-keyword-case": [
      "lower",
      {
        "ignoreProperties": [
          "/^--/"
        ]
      }
    ],
  }
}