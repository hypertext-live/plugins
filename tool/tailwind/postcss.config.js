const path = require('path');
const source = process.env.BUILD_SOURCE;
const config = path.join(source, "tailwind.config.js");
const tailwind = require('tailwindcss');

module.exports = {
  plugins: [
    tailwind( { config } ),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [require('cssnano')]
      : []
  ]
}
