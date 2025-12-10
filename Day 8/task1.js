// In array Object.keys retuns the indexces of the array value .

var isEmpty = function (obj) {
  let object = Object.keys(obj);
  console.log(object);

  if (object.length === 0) {
    return true;
  }
  return false;
};

console.log(isEmpty(["apple"]));

var chunk = function (arr, size) {
  let array = arr;
  let sizearr = size;
  let result = [];

    for (let i = 0; i < array.length; i+= sizearr) {
    let value = array.slice(i, i+sizearr);
    result.push(value);
  }
  return result;
};
console.log(chunk([1, 2, 3, 4, 5, 6], 2));

