const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.cjs");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 9000,
    static: {
      // 호출한 패키지 경로의 public 
      directory: path.join(process.cwd(), "public"),
    },
    headers: {
      "Cache-Control": "no-store",
    },
    historyApiFallback: {
      index: "index.html",
    },
  },
});
