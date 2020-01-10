const { resolve } = require('path');
module.exports = ({ config }) => {
  config.module.rules.push(
    // fix import.meta
    {
      test: /\.js$/,
      loader: require.resolve('@open-wc/webpack-import-meta-loader/webpack-import-meta-loader.js'),
    },
    {
      test: /\.stories\.js?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
      include: resolve('../'),
    },
  );
  return config;
};