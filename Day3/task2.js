var map = function (arr, fn) {
    let num = [];

    for (let i = 0; i < arr.length; i++){
       num.push(fn(arr[i], i))
    }
    return  num
    
};
let returnedarray = map([1, 2, 3, 4, 5],x=>x+1)
console.log(returnedarray)

var filter = function (arr, fn) {
    let num = [];

    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)) {
           num.push(arr[i])
       }
    }
    return  num
    
};
let filteredarray = filter([10, 20, 30, 40, 50],x=>x>10)
console.log(filteredarray)
