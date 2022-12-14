module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  tabWidth: 3,
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
  endOfLine: 'auto',
};
