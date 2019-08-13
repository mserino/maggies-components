const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const component = 'card';

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${component}.js`
    },
    mode: 'development',
    
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        },
      ]
    },
    
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${component}.css`
      })
    ]
};