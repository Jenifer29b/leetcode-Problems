var argumentsLength = function (...args) {
    return (args.length)
    
};


 console.log(argumentsLength(1, 2, 3)); // 3


function greet() {
    console.log("Helo!!")
    return "Done "
}

function once(fn) {
    let called = false;
    let result 

    return function (...args) {
        if (!called) {
            called = true
            result = fn(...args)
            return result

        }
        return undefined
    }
}
 
let greetonce = once(greet)
console.log(greetonce())
console.log(greetonce())
console.log(greetonce())

var once = function (fn) {
    let called = false
    let result
    
    return function (...args) {
        if (!called) {
            called = true
            result = fn(...args)
            return result
        }
        return undefined
        
    }
};


 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 
 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn
 

