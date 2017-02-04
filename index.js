var x = require('xtend')
var h = require('bel')
var gridEl

function grid (opts) {
  var options = x({
    wrapClass: 'px1',
    wrapAttrs: {},
    colClass: 'p1',
    colAttrs: {},
    visible: false
  }, opts)

  gridEl = h`
    <div class="${options.visible ? 'db' : 'dn'}" data-gr8-dev>
      <div
        class="psf w100 h100 t0 l0 pen dev ${options.wrapClass}"
        ${options.wrapAttrs}
      >
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(c => h`
          <div class="fl h100 c1 ${options.colClass}" ${options.colAttrs}>
            <div class="h100 w100"></div>
          </div>`
        )}
      </div>
    </div>
  `

  document.body.appendChild(gridEl)
  return exports
}

function toggle () {
  if (!gridEl) return
  gridEl.classList.toggle('dn')
  gridEl.classList.toggle('db')
}

function handleKeydown (e) {
  if (e.keyCode == 87) toggle()
  if (e.keyCode == 68) document.body.classList.toggle('dev')
}

exports.attach = function (opts) {
  grid(opts)
  window.addEventListener('keydown', handleKeydown)
}

exports.detatch = function () {
  document.body.removeChild(gridEl)
  window.removeEventListener('keydown', handleKeydown)
}
