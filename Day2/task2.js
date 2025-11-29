var createhelloworld = function create() {
    return function createfunction(...args) {
    return "Hello World"
}
}

let fn = createhelloworld()
console.log(fn())