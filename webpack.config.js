var path = require("path");
var webpack = require("webpack");

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section describes the transformations we will perform
  module: {
    loaders: [{
        // Only working with files that are in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  // Allow debuggin our react code in chrome dev tools. 
  devtool: "eval-source-map"
};
