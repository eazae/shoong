module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          extension: ['.js', '.tsx', '.ts', '.jsx', 'cjs'],
          alias: {
            // '@assets': './assets',
            '@components': './app/components',
            '@containers': './app/containers',
            '@screens': './app/screens',
            '@services': './app/services',
            '@theme': './app/theme',
            '@utils': './app/utils',
            '@navigations': './app/navigations',
            '@atoms': './app/atoms',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['API_BASE_URL', 'ETH_HTTP_PROVIDER'],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
