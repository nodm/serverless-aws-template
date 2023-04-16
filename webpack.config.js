const path = require('node:path');
const { EsbuildPlugin } = require('esbuild-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  devtool: slsw.lib.webpack.isLocal ? 'source-map' : 'cheap-source-map',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.cjs', '.mjs', '.js', '.ts', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externalsPresets: { node: true },
  externals: [{ 'aws-sdk': 'commonjs aws-sdk' }, nodeExternals()],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2020',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2020',
          tsconfig: './tsconfig.json',
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
