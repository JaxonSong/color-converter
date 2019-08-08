var rgb2hsb = require('./lib/color_converter.js')
var hsb2Rgb = require('./lib/color_converter.js')

if (typeof window !== 'undefined') {
  window.blending = rgb2hsb
  window.lut = hsb2Rgb
}

module.exports = {
  rgb2hsb: rgb2hsb,
  hsb2Rgb: hsb2Rgb
}
