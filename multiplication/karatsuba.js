/**
 * Karatsuba Multiplication
 * @param  {Number} x - first number
 * @param  {Number} y - second number
 * @return {Number} Multiply of x and y
 */
 
function karatsubaMulti(x, y) {

  let n = Math.min(('' + x).length, ('' + y).length)

  if(n == 1) {
      return x * y
  }

  let tenpowhalfn = Math.pow(10, parseInt(n / 2))
  let tenpown = Math.pow(10, 2 * parseInt(n / 2))

  let a = parseInt(x / tenpowhalfn)
  let b = x % tenpowhalfn
  let c = parseInt(y / tenpowhalfn)
  let d = y % tenpowhalfn

  let caller = arguments.callee

  return tenpown * caller(a, c) + tenpowhalfn * (caller(a, d) + caller(b, c)) + caller(b, d)
}

karatsubaMulti(1234, 56789)