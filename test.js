var test = require('tape')
var gr8dev = require('./')

test('`attach` method', function (t) {
  gr8dev.attach()
  var gridEl = document.body.querySelector('[data-gr8-dev]')
  t.ok(gridEl, 'gr8 grid exists in the dom')
  t.equal(gridEl.children[0].children.length, 12, 'gr8 grid contains 12 columns')
  t.end()
})

test('`detatch` method', function (t) {
  gr8dev.detatch()
  var gridEl = document.body.querySelector('[data-gr8-dev]')
  t.notOk(gridEl, 'gr8 grid removed from the dom')
  t.end()
})
