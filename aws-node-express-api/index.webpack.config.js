const path = require("path");

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.spin.js",
    library: "spin",
  },
  optimization: {
    minimize: false,
  },
};

