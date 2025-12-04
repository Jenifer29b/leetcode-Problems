async function sleep(millis) {
    let time = millis

    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}


let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100

function memoize(fn) {
    let cache = {}
    
    return function (...args) {
        let key = JSON.stringify(args)
        if (cache[key]) {
            console.log("Returning from cache")
            return cache[key]
        }

        console.log("Calculating")
        let result = fn(...args)
        cache[key] = result;
        return result
        
    }
}



  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
   console.log(memoizedFn(0, 0) ) 
 console.log(memoizedFn(0, 0) ) 
 console.log(callCount) // 1 
 
