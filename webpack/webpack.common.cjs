const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "/public/index.html" })],
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
            plugins: ['@babel/plugin-transform-react-jsx']
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
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
