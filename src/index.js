/**
 * shuffler module.
 * @module shuffler
 */

import rnd from 'jm-random'

let Random = rnd.Random

/**
 * Class representing an shuffler.
 */
class Shuffler {
  /**
   * Create an shuffler.
   */
  constructor (opts = {}) {
    this.random = new Random(opts)
  }

  randomInt (min, max) {
    return this.random.randomInt(min, max)
    // if (max === undefined) {
    //   max = min
    //   min = 0
    // }
    // return Math.floor(Math.random() * (max - min + 1)) + min
  }

  _copyArray (v) {
    let r = []
    for (let i = 0; i < v.length; i++) r[i] = v[i]
    return r
  }

  shuffleFisherYates (v) {
    v = this._copyArray(v)
    let len = v.length
    for (let i = len - 1; i > 0; i--) {
      let a = this.randomInt(i)
      let temp = v[i]
      v[i] = v[a]
      v[a] = temp
    }
    return v
  }

  shuffleInsideOut (v) {
    let len = v.length
    let r = []
    r[0] = v[0]
    for (let i = 1; i < len; i++) {
      let k = this.randomInt(i)
      r[i] = r[k]
      r[k] = v[i]
    }
    return r
  }

  shuffle (v) {
    return this.shuffleFisherYates(v)
  }
}

let shuffler = function (opts = {}) {
  return new Shuffler(opts)
}

let $ = {
  Shuffler: Shuffler,
  shuffler: shuffler
}

if (typeof global !== 'undefined' && global) {
  global.jm || (global.jm = {})
  let jm = global.jm
  if (!jm.Shuffler) {
    for (let key in $) jm[key] = $[key]
  }
}

export default $
