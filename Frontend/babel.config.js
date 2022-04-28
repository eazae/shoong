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
            '@': './app',
            '@components': './app/components',
            '@containers': './app/containers',
            '@screens': './app/screens',
            '@services': './app/services',
            '@theme': './app/theme',
            '@utils': './app/utils',
          },
        },
      ],
    ],
  };
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         root: ['.'],
//         extensions: [
//           '.ios.ts',
//           '.android.ts',
//           '.ts',
//           '.ios.tsx',
//           '.android.tsx',
//           '.tsx',
//           '.jsx',
//           '.js',
//           '.json',
//         ],
//         alias: {
//           '@': '.',
//           // '@components': './components',
//           // '@containers': './containers',
//           // '@screens': './screens',
//           // '@services': './scenes',
//           // '@utils': './utils',
//           // '@theme': './theme',
//         },
//       },
//     ],
//   ],
// };
