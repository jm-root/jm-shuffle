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