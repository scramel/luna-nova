const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/luna-nova/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "vue-i18n": path.resolve(
          __dirname,
          "node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js",
        ),
      },
    },
  },
};
