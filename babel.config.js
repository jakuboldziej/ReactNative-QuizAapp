module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "react-native-reanimated/plugin",
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ['./src'],
          extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils.js',
            '@constants': './src/constants',
            '@context': './src/context',
            '@navigations': './src/navigations',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
