const path = require('path');
const config = path.join(process.env.BUILD_SOURCE, "tailwind.config.js");
const tailwind = require('tailwindcss');

module.exports = {
  plugins: [
    tailwind( { config } ),
    ...process.env.NODE_ENV === 'production'
      ? [require('cssnano')]
      : []
  ]
}
