const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  resolve: {
    extensions: [`.js`, `.jsx`],

    alias: {
      "@components": path.resolve(__dirname, `src/components`),
      "@helpers": path.resolve(__dirname, `src/helpers`)
    }
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  devtool: `source-map`
};
