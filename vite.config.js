// vite.config.js
const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        carbon: resolve(__dirname, "carbon.html"),
        hogwarts: resolve(__dirname, "hogwarts.html"),
        gwc: resolve(__dirname, "gwc.html"),
      },
    },
  },
};
