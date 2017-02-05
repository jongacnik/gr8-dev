# ⓖⓡ⑧ DEV

Development grid for [gr8](https://github.com/jongacnik/gr8)

```
npm i gr8-dev
```

## Example

```js
var gr8 = require('gr8')
var dev = require('gr8-dev')
var rst = require('recsst')

var css = gr8()

rst.attach()
dev.attach()
css.attach()
```

<details>
  <summary>View grid html</summary>

  ```html
  <div data-gr8-dev="data-gr8-dev" class="dn">
    <div class="psf w100 h100 t0 l0 pen dev px1">
      <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
        <div class="fl h100 c1 p1">
          <div class="h100 w100"></div>
        </div>
    </div>
  </div>
  ```
</details>

In the browser you can now press `w` to toggle the grid or `d` to toggle dev styles.

## API

### `gr8dev.attach(options)`

Appends grid to dom and attaches event listeners for toggling the grid and dev styles.

| option | default | controls |
| --- | --- | --- |
| wrapClass | `'px1'` | grid wrap class, handy for page gutter |
| wrapAttrs | `{}` | additional wrap attributes, handy for responsive |
| colClass | `'p1'` | column wrap class, handy for column gutter |
| colAttrs | `{}` | additional column attributes, handy for responsive |
| visible | `false` | initial grid visibility |

### `gr8dev.detatch()`

Removes grid from dom and removes event listeners.
