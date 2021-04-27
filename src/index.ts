export function add(a: number, b: number): number {
  return a + b
}

export function arrayMap(array: [], callback: (item: any, index: number, arr: any[]) => any): any {
  let i = -1
  const len = array.length
  let resArray = []
  while (++i < len) {
    resArray.push(callback(array[i], i, array))
  }
  return resArray
}

export function more(a: number, b: number): number {
  return a * b
}