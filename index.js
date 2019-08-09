var rgb2Hsb = require('./lib/color_converter.js').rgb2Hsb
var hsb2Rgb = require('./lib/color_converter.js').hsb2Rgb
var rgb2Hsl = require('./lib/color_converter.js').rgb2Hsl
var hsl2Rgb = require('./lib/color_converter.js').hsl2Rgb

if (typeof window !== 'undefined') {
  window.rgb2Hsb = rgb2Hsb
  window.hsb2Rgb = hsb2Rgb
  window.rgb2Hsl = rgb2Hsl
  window.hsl2Rgb = hsl2Rgb
}

module.exports = {
  rgb2Hsb: rgb2Hsb,
  hsb2Rgb: hsb2Rgb,
  rgb2Hsl: rgb2Hsl,
  hsl2Rgb: hsl2Rgb
}
