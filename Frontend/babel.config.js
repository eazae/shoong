module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      {
        include: ['API_KEY'],
      },
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
