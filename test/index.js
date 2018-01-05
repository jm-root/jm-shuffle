import chai from 'chai'

let expect = chai.expect
import shuff from '../src'

let Shuffler = shuff.Shuffler

describe('shuffler', function () {

  it('random', function () {
    let shuffler = new Shuffler()
    let len = 5
    let m = []
    for (let i = 0; i < len; i++) m[i] = 0
    for (let i = 0; i < 10000; i++) {
      let r = shuffler.randomInt(len - 1)
      m[r]++
    }
    console.log(m)
  })

  it('shuffle', function () {
    let shuffler = new Shuffler()
    let v = [1, 2, 3, 4, 5, 6]
    let r = shuffler.shuffle(v)
    console.log(r)
    expect(r).to.be.ok
  })

  it('shuffleInsideOut', function () {
    let shuffler = new Shuffler()
    let v = [1, 2, 3, 4, 5, 6]
    let r = shuffler.shuffleInsideOut(v)
    console.log(r)
    expect(r).to.be.ok
  })

  it('shuffle quality', function () {
    let shuffler = new Shuffler()
    let v = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let m = []
    for (let i = 0; i < v.length; i++) {
      m[i] = []
      for (let j = 0; j < v.length; j++) {
        m[i][j] = 0
      }
    }
    for (let i = 0; i < 10000; i++) {
      let r = shuffler.shuffle(v)
      for (let j = 0; j < r.length; j++) {
        m[r[j] - 1][j]++
      }
      // console.log(r)
    }
    console.log(m)
  })
})
