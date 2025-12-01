var reduce = function (nums, fn, init) {
    let accum = init;
  

  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  return accum;
};

let reduced = reduce([1, 2, 3, 4, 5], (prev, curr) => prev + curr, 0);
console.log(reduced);


var compose = function(functions) {
    
    return function(x) {
       return functions.reduceRight((value,fn)=>fn(value),x)
        
    }
};


 const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4)) // 9
 