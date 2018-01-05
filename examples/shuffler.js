if (typeof module !== 'undefined' && module.exports) {
  require('../')
}
var o = new jm.Shuffler()
console.log(JSON.stringify(o.shuffle([1, 2, 3])))
