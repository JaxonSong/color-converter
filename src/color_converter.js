module.exports.rgb2Hsb = function (r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  let h, s, v
  let min = Math.min(r, g, b)
  let max = v = Math.max(r, g, b)
  let difference = max - min

  if (max === min) {
    h = 0
  } else {
    switch (max) {
      case r:
        h = (g - b) / difference + (g < b ? 6 : 0)
        break
      case g:
        h = 2.0 + (b - r) / difference
        break
      case b:
        h = 4.0 + (r - g) / difference
        break
    }
    h = Math.round(h * 60)
  }
  if (max === 0) {
    s = 0
  } else {
    s = 1 - min / max
  }
  s = Math.round(s * 100 * 100) / 100
  v = Math.round(v * 100 * 100) / 100
  return [h, s, v]
}

module.exports.hsb2Rgb = function (h, s, v) {
  s /= 100
  v /= 100
  let h1 = Math.floor(h / 60) % 6
  let f = h / 60 - h1
  let p = v * (1 - s)
  let q = v * (1 - f * s)
  let t = v * (1 - (1 - f) * s)
  let r, g, b
  switch (h1) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

module.exports.rgb2Hsl = function (r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  let min = Math.min(r, g, b)
  let max = Math.max(r, g, b)
  let average = (min + max) / 2
  let difference = max - min
  let h, s, l

  if (max === min) {
    h = 0
    s = 0
  } else {
    s = average > (1 / 2) ? difference / (2.0 - max - min) : difference / (max + min)
    switch (max) {
      case r:
        h = (g - b) / difference + (g < b ? 6 : 0)
        break
      case g:
        h = 2.0 + (b - r) / difference
        break
      case b:
        h = 4.0 + (r - g) / difference
        break
    }
    h = Math.round(h * 60)
  }
  s = Math.round(s * 100 * 100) / 100
  l = Math.round(average * 100 * 100) / 100
  return [h, s, l]
}

module.exports.hsl2Rgb = function (h, s, l) {
  h /= 360
  s /= 100
  l /= 100
  let rgb = []

  if (s === 0) {
    rgb = [Math.round(l * 255), Math.round(l * 255), Math.round(l * 255)]
  } else {
    let q = l >= (1 / 2) ? (l + s - l * s) : (l * (1 + s))
    let p = 2 * l - q
    rgb[0] = h + 1 / 3
    rgb[1] = h
    rgb[2] = h - 1 / 3
    for (let i = 0; i < rgb.length; i++) {
      let tc = rgb[i]
      if (tc < 0) {
        tc = tc + 1
      } else if (tc > 1) {
        tc = tc - 1
      }
      switch (true) {
        case (tc < (1 / 6)):
          tc = p + (q - p) * 6 * tc
          break
        case ((1 / 6) <= tc && tc < (1 / 2)):
          tc = q
          break
        case (tc >= (1 / 2) && tc < (2 / 3)):
          tc = p + (q - p) * (4 - 6 * tc)
          break
        default:
          tc = p
          break
      }
      rgb[i] = Math.round(tc * 255)
    }
  }

  return rgb
}
