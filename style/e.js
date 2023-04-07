const sum = (a, b) => a + b
const curry = (f) => (a) => (b) => f(a, b)
let currySum = curry(sum)
