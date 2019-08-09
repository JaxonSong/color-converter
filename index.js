var rgb2Hsb = require('./lib/color_converter.js').rgb2Hsb
var hsb2Rgb = require('./lib/color_converter.js').hsb2Rgb

if (typeof window !== 'undefined') {
  window.rgb2Hsb = rgb2Hsb
  window.hsb2Rgb = hsb2Rgb
}

module.exports = {
  rgb2Hsb: rgb2Hsb,
  hsb2Rgb: hsb2Rgb
}
