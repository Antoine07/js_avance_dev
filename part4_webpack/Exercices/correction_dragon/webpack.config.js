const path = require("path");

module.exports = (env) => {
    
  return {
    mode: env.NODE_ENV ?? "development",
    // watch : true,
    entry: "./src/app.js", // Point d'entrée
    // Sortie
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    devtool : 'source-map',
    // Configuration de webpack-dev-server minimale
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 9000,
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
<<<<<<< HEAD
          test: /\.m?js$/, // pour tous les fichiers .mjs ou .js 
=======
          test: /\.m?js$/,
>>>>>>> 70a91be27603702c50e9324712f18c0284f55dbd
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
