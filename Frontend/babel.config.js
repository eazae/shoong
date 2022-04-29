module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          extension: ['.js', '.tsx', '.ts', '.jsx'],
          alias: {
            '@components': './app/components',
            '@containers': './app/containers',
            '@screens': './app/screens',
            '@services': './app/services',
            '@theme': './app/theme',
            '@utils': './app/utils',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['API_BASE_URL'],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
