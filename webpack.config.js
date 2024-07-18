const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = (env, argv) => {
  const devServerEntry = 'demo'

  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction

  return {
    devtool: isDevelopment && 'inline-source-map',
    entry: {
      demo: {
        import: './src/index.js',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        chunks: [devServerEntry],
      }),
      new MiniCssExtractPlugin({
        filename: () =>
          isDevelopment ? '[name].bundle.css' : '[name].[contenthash].css',
        chunkFilename: () =>
          isDevelopment
            ? 'chunk.[name].bundle.css'
            : 'chunk.[name].[chunkhash].css',
      }),
    ],
    optimization: {
      chunkIds: 'natural',
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
          },
        },
      },
    },
    output: {
      hashDigestLength: 6,
      path: path.resolve(__dirname, './dist'),
      filename: () =>
        isDevelopment ? '[name].bundle.js' : '[name].[contenthash].js',
      chunkFilename: () =>
        isDevelopment ? '[name].bundle.js' : 'chunk.[name].[chunkhash].js',
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, './dist'),
      hot: true,
      port: 3000,
      proxy: {
        '/MazeNet': {
          target: 'http://localhost:3000',
          router: () => 'http://localhost:90',
          logLevel: 'debug' /*optional*/,
        },
      },
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: ['**/node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-flow',
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-flow',
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
    },
  }
}
