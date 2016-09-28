let gridEl

const styles = () => {
  let node = document.createElement('style')
  node.innerHTML = `
    .dev1 { outline: 1px solid #912eff }
    .dev2 { outline: 1px solid #5497ff }
    .dev3 { outline: 1px solid #51feff }
    .dev4 { outline: 1px solid #ff0000 }
    .dev5 { outline: 1px solid #00ff00 }
    .dev * { outline: 1px solid #912eff }
    .dev * > * { outline: 1px solid #5497ff }
    .dev * > * > * { outline: 1px solid #51feff }
    .dev * > * > * > * { outline: 1px solid #ff0000 }
    .dev * > * > * > * > * { outline: 1px solid #00ff00 }`
  document.head.appendChild(node)
  return exports
}

const grid = opts => {
  const options = Object.assign({}, {
    cols: 12,
    wrapClass: 'px2',
    colClass: 'p2',
    visible: false
  }, opts)

  const cols = [...Array(options.cols).keys()].map(col => {
    const wrap = document.createElement('div')
    wrap.classList.add('fl', 'c1', 'h100', options.colClass)
    const inner = document.createElement('div')
    inner.classList.add('h100', 'w100')
    wrap.appendChild(inner)
    return wrap
  })

  const makeGridEl = () => {
    const wrap = document.createElement('div')
    wrap.classList.add('psf', 'w100', 'h100', 't0', 'l0', 'pen', 'dev', options.wrapClass)
    wrap.style.display = options.visible ? 'block' : 'none'
    cols.forEach(col => {
      wrap.appendChild(col)
    })
    return wrap
  }

  gridEl = makeGridEl()

  document.body.appendChild(gridEl)
  return exports
}

const toggle = () => {
  if (!gridEl) return
  if (gridEl.style.display !== 'none') {
    gridEl.style.display = 'none'
  } else {
    gridEl.style.display = 'block'
  }
}

const onKeydown = e => {
  if (e.keyCode == 87) toggle()
  if (e.keyCode == 68) document.body.classList.toggle('dev')
}

module.exports = opts => {
  styles()
  grid(opts)
  window.addEventListener('keydown', onKeydown)
}

exports.stop = () => {
  window.removeEventListener('keydown', onKeydown)
  return exports
}
