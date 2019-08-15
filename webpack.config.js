const webpack = require('webpack');


module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const ASSET_PATH = process.env.ASSET_PATH || '/';

  const rules = [
    // {
    //   enforce: 'pre',
    //   test: /\.(t|j)sx?$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/,
    //   options: {
    //     fix: true
    //   }
    // },
    // {
    //   test: /\.m?js$/,
    //   exclude: /(node_modules|bower_components)/,
    //   use: {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: ['@babel/preset-env']
    //     }
    //   }
    // },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }
  ];

  let plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(argv.mode || 'development'),
    })
  ];

  const config = {
    mode: argv.mode || 'development',
    // devtool: 'none',
    devtool: isProd ? '#source-map' : 'eval-source-map',

    entry: {petro2020: './conferences/petro/index.js'},

    output: {
      filename: '[name].js',
      publicPath: ASSET_PATH
    },

    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules
    },
    plugins,
  };
  return config;
};
