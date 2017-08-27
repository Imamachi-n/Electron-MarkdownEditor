const path = require('path')

module.exports = {
  target: 'electron',

  node: {
    __dirname: false,
    __filename: false
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    'main/index': './src/main/index.js',
    'renderer/app': './src/renderer/app.jsx',
    'renderer/pdf': './src/renderer/pdf.jsx'
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }
      },

      {
        test: /\.css$/,
        // style-loaderを先に読み込む必要がある
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, 'fonts/[name].[ext]'),
        use: {
          loader: 'file-loader'
        }
      }

    ]
  },

  devtool: 'source-map'

}