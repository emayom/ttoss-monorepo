const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.resolve(__dirname, "src") + "********");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./", // <- 이게 중요!
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 9000,
    static: {
      // 호출한 패키지 경로의 public
      directory: path.join(__dirname, "public"),
    },
    headers: {
      "Cache-Control": "no-store",
    },
    historyApiFallback: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        resolve: {
          fullySpecified: false, // disable the behaviour
        },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            rootMode: "upward",
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                auto: true,
                exportGlobals: true,
                localIdentName: "css-[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                localIdentHashSalt: "my-custom-hash",
                exportLocalsConvention: "dashes",
              },
            },
          },
        ],
      },
    ],
  },
};
