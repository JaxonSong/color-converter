# color-converter

**A javascript color convert tool, include RGB to HSB(HSV) and HSB(HSV) to RGB、 RGB to HSL and HSL to RGB.😎**

## Features
- RGB to HSB(HSV)
- HSB(HSV) to RGB
- RGB to HSL
- HSL to RGB

## Installing
### Using npm:
```shell
  $ npm install @jaxon_song/color-converter
```
### Using cdn:
```javascript
  <script src="https://unpkg.com/@jaxon_song/color-converter/dist/bundle.min.js"></script>
```

## Usage
```javascript
  const { rgb2Hsb, hsb2Rgb, rgb2Hsl, hsl2Rgb } = require('@jaxon_song/color-converter')

  let hsb = rgb2Hsb(128, 45, 230)
  let rgbFromHsb = hsb2Rgb(hsb[0], hsb[1], hsb[2])
  let hsl = rgb2Hsl(128, 45, 230)
  let rgbFromHsl = hsl2Rgb(hsl[0], hsl[1], hsl[2])

  console.log(hsb)  // [ 267, 80.43, 90.2 ]
  console.log(rgbFromHsb) // [ 128, 45, 230 ]
  console.log(hsl)  // [ 267, 78.72, 53.92 ]
  console.log(rgbFromHsl) // [ 128, 45, 230 ]
```

## License
MIT