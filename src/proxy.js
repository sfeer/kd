const target = {
  a() {
    return 'aaa'
  },

  b(arg) {
    return 'bbb=' + arg
  }
}

const proxy = new Proxy(target.a, {
  apply(target, thisArg, argArray) {
    console.log('gogogo', target, thisArg, argArray)
    return target()
  }
})

const proxy2 = new Proxy(target.b, {
  apply(target, thisArg, argArray) {
    console.log('gogogo', target, thisArg, argArray)
    return target(...argArray)
  }
})

const res = proxy()
console.log(res)

console.log('==========')

const res2 = proxy2('x')
console.log(res2)