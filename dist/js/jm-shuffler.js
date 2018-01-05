(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * shuffler module.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module shuffler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _jmRandom = require('jm-random');

var _jmRandom2 = _interopRequireDefault(_jmRandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random = _jmRandom2.default.Random;

/**
 * Class representing an shuffler.
 */

var Shuffler = function () {
  /**
   * Create an shuffler.
   */
  function Shuffler() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Shuffler);

    this.random = new Random(opts);
  }

  _createClass(Shuffler, [{
    key: 'randomInt',
    value: function randomInt(min, max) {
      return this.random.randomInt(min, max);
      // if (max === undefined) {
      //   max = min
      //   min = 0
      // }
      // return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }, {
    key: '_copyArray',
    value: function _copyArray(v) {
      var r = [];
      for (var i = 0; i < v.length; i++) {
        r[i] = v[i];
      }return r;
    }
  }, {
    key: 'shuffleFisherYates',
    value: function shuffleFisherYates(v) {
      v = this._copyArray(v);
      var len = v.length;
      for (var i = len - 1; i > 0; i--) {
        var a = this.randomInt(i);
        var temp = v[i];
        v[i] = v[a];
        v[a] = temp;
      }
      return v;
    }
  }, {
    key: 'shuffleInsideOut',
    value: function shuffleInsideOut(v) {
      var len = v.length;
      var r = [];
      r[0] = v[0];
      for (var i = 1; i < len; i++) {
        var k = this.randomInt(i);
        r[i] = r[k];
        r[k] = v[i];
      }
      return r;
    }
  }, {
    key: 'shuffle',
    value: function shuffle(v) {
      return this.shuffleFisherYates(v);
    }
  }]);

  return Shuffler;
}();

var shuffler = function shuffler() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Shuffler(opts);
};

var $ = {
  Shuffler: Shuffler,
  shuffler: shuffler
};

if (typeof global !== 'undefined' && global) {
  global.jm || (global.jm = {});
  var jm = global.jm;
  if (!jm.Shuffler) {
    for (var key in $) {
      jm[key] = $[key];
    }
  }
}

exports.default = $;
module.exports = exports['default'];
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"jm-random":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var iRandomMax = 200000000000; // 最大随机整数范围 0 <= randomValue <= iRandomMax;

/**
 * Class representing a random.
 */

var Random = function () {
  /**
   * create a random
   * @param {Object} [opts] params
   */
  function Random() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Random);

    this.seed = opts.seed || Date.now();
    this.randomMax = opts.randomMax || iRandomMax;
  }

  /**
   *
   * @return {number}
   */


  _createClass(Random, [{
    key: 'random',
    value: function random() {
      this.seed = (this.seed * 9301 + 49297) % 233280;
      return this.seed / 233280.0;
    }

    /**
     * min<=result<=max
     * @param {number} min
     * @param {number} max
     * @return {number}
     */

  }, {
    key: 'randomInt',
    value: function randomInt(min, max) {
      if (max === undefined) {
        max = min;
        min = 0;
      }
      var range = min + this.random() * (max - min + 1);
      return Math.floor(range);
    }

    /**
     * min<=result<=max
     * @param {number} min
     * @param {number} max
     * @return {number}
     */

  }, {
    key: 'randomDouble',
    value: function randomDouble(min, max) {
      if (max === undefined) {
        max = min;
        min = 0.0;
      }

      var range = min + this.random() * (max - min);
      return range;
    }

    /**
     *
     * @param {number} range
     * @return {number}
     */

  }, {
    key: 'randomRange',
    value: function randomRange(range) {
      return this.randomInt(0, this.randomMax) % range;
    }

    /**
     *
     * @param {number} range
     * @param {number} odds
     * @return {number}
     */

  }, {
    key: 'randomOdds',
    value: function randomOdds(range, odds) {
      if (this.randomRange(range) < odds) return 1;
      return 0;
    }
  }]);

  return Random;
}();

var random = function random(opts) {
  return new Random(opts);
};

var moduleRandom = function moduleRandom($) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'random';

  $.random = function (opts) {
    return new Random(opts);
  };

  return {
    name: name,
    unuse: function unuse() {
      delete $.random;
    }
  };
};

exports.default = {
  Random: Random,
  random: random,
  moduleRandom: moduleRandom
};
module.exports = exports['default'];
},{}]},{},[1])