const circlesCount = 256

const random = (min, max) => Math.random() * (max - min) + min

const darkEllipses = Array.from({length: Math.round(circlesCount / 3)}, () => {
  const cy = Math.random() ** 2
  const rx = 0.1 * cy + 0.01
  return {
    cx: Math.random(),
    cy,
    fill: '#111',
    rx,
    ry: rx / 2,
  }
})

const circles = Array.from({length: Math.round(circlesCount / 3 * 2)}, (_, i) => {
  const r = 0.02 * i / circlesCount
  return {
    cx: random(r, 1 - r),
    cy: random(r, 1 - r),
    fill: '#333',
    r,
  }
})

const Svg = ({children}) => `
 <svg height="100vmin" viewbox="0 0 1 1" width="100vmin">
   ${children}
 </svg>
`

const Path = () => `
 <path d="M 0 0 l 0 1 l 1 0 l 0 -1 l -1 0" fill="url(#gradient)" stroke-linejoin="round"/>
`

const Circle = ({cx, cy, fill, r}) => `
 <circle cx="${cx}" cy="${cy}" fill="${fill}" r="${r}"/>
`

const Ellipse = ({cx, cy, fill, rx, ry}) => `
 <ellipse cx="${cx}" cy="${cy}" fill="${fill}" rx="${rx}" ry="${ry}"/>
`

document.body.innerHTML = Svg({
  children: Path() + darkEllipses.map(Ellipse).join('') + circles.map(Circle).join(''),
})
