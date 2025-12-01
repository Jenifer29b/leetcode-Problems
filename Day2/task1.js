var createCounter = function (init) {
  let value = init;
  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => (value = init),
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 4
console.log(counter.decrement());

let filterwithindex = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i]);
  }
  return result;
};

let filteredarray = filterwithindex(
  [1, 1, 3, 4, 5, 5],
  (value, index) => (value + index) % 2 === 0
);

console.log(filteredarray);


let arr = function (arr, fn) {

    let result = []
    for (let i = 0; i < arr.length; i++){
      result.push(fn(arr[i]))
    }
    return result
}
let value = arr([1, 2, 3, 4, 5], x => x * 3)
console.log(value)

