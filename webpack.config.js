const path = require('path');

module.exports = {
  entry: './src/server.js', // adjust the entry point based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
};
