module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    // 禁止使用 console.log，但允许 warn 和 error
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // 禁止未使用的变量（仅警告）
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 禁止使用 any 类型（仅警告，避免影响现有代码）
    '@typescript-eslint/no-explicit-any': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: ['warn', 'always'],
    // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unreachable': 'warn',
  },
};
