const xmlns = 'http://www.w3.org/2000/svg'

const svg = document.createElementNS(xmlns, 'svg')
svg.setAttributeNS(null, 'viewBox', '0 0 1 1')
svg.setAttributeNS(null, 'width', '100vmin')
svg.setAttributeNS(null, 'height', '100vmin')

const coords = `
  M 0, 0
  l 0, 1
  l 1, 0
  l 0, -1
  l -1, 0
`

const path = document.createElementNS(xmlns, 'path')
path.setAttributeNS(null, 'stroke-linejoin', 'round')
path.setAttributeNS(null, 'd', coords)
path.setAttributeNS(null, 'fill', 'url(#gradient)')
svg.appendChild(path)

const circle = document.createElementNS(xmlns, 'circle')
circle.setAttributeNS(null, 'cx', 0.5)
circle.setAttributeNS(null, 'cy', 0.5)
circle.setAttributeNS(null, 'r', 0.5)
svg.appendChild(circle)

document.body.appendChild(svg)
