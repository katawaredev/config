// https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md
module.exports = {
  // Heading levels should only increment by one level at a time
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md001
  "header-increment": true,

  // Heading style [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md003
  "header-style": false,

  // Unordered list style [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md004
  "ul-style": false,

  // Inconsistent indentation for list items at the same level [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md005
  "list-indent": false,

  // Unordered list indentation [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md007
  "ul-indent": false,

  // Trailing spaces [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md009
  "no-trailing-spaces": false,

  // Hard tabs [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md010
  "no-hard-tabs": false,

  // Reversed link syntax
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md011
  "no-reversed-links": true,

  // Multiple consecutive blank lines [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md012
  "no-multiple-blanks": false,

  // Line length
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md013
  "line-length": false,

  // Dollar signs used before commands without showing output
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md014
  "commands-show-output": true,

  // No space after hash on atx style heading [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md018
  "no-missing-space-atx": true,

  // Multiple spaces after hash on atx style heading [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md019
  "no-multiple-space-atx": false,

  // No space inside hashes on closed atx style heading [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md020
  "no-missing-space-closed-atx": true,

  // Multiple spaces inside hashes on closed atx style heading [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md021
  "no-multiple-space-closed-atx": false,

  // Headings should be surrounded by blank lines [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md022
  "blanks-around-headers": false,

  // Headings must start at the beginning of the line [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md023
  "header-start-left": false,

  // Multiple headings with the same content
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md024
  "no-duplicate-header": true,

  // Multiple top level headings in the same document
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md025
  "single-h1": true,

  // Trailing punctuation in heading [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md026
  "no-trailing-punctuation": { punctuation: ".,;:。，；：" },

  // Multiple spaces after blockquote symbol [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md027
  "no-multiple-space-blockquote": false,

  // Blank line inside blockquote [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md028
  "no-blanks-blockquote": true,

  // Ordered list item prefix
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md029
  "ol-prefix": { style: "ordered" },

  // Spaces after list markers [autofix] [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md030
  "list-marker-space": false,

  // Fenced code blocks should be surrounded by blank lines [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md031
  "blanks-around-fences": false,

  // Lists should be surrounded by blank lines [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md032
  "blanks-around-lists": false,

  // Inline HTML
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md033
  "no-inline-html": false,

  // Bare URL used [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md034
  "no-bare-urls": true,

  // Horizontal rule style [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md035
  "hr-style": false,

  // Emphasis used instead of a heading
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md036
  "no-emphasis-as-header": true,

  // Spaces inside emphasis markers [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md037
  "no-space-in-emphasis": true,

  // Spaces inside code span elements [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md038
  "no-space-in-code": false,

  // Spaces inside link text [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md039
  "no-space-in-links": true,

  // Fenced code blocks should have a language specified
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md040
  "fenced-code-language": true,

  // First line in file should be a top level heading
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md041
  "first-line-h1": true,

  // No empty links
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md042
  "no-empty-links": true,

  // Required heading structure
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md043
  "required-headers": false,

  // Proper names should have the correct capitalization
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md044
  "proper-names": false,

  // Images should have alternate text (alt text)
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md045
  "no-alt-text": true,

  // Code block style [autofix]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md046
  "code-block-style": { style: "fenced" },

  // Files should end with a single newline character [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md047
  "single-trailing-newline": false,

  // Code fence style [prettier]
  // https://github.com//DavidAnson/markdownlint/blob/master/doc/Rules.md#md048
  "code-fence-style": false,
};
