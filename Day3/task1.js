// var expect = function (val) {
//   let value = val;

//   return {
//     toBe: (num) => (num == value ? true : "Not Equal"),
//     notToBe: (num) => (num !== value ? true : "Equal"),
//   };
// };

// console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"

var expect = function (val) {
  let value = val;

  return {
    toBe(num) {
      if (num == value) {
        return (true);
      } else {
        throw new Error("Not Equal");
      }
      },
      notToBe(num) {
      if (num !== value) {
        return (true);
      } else {
        throw new Error("Equal");
      }
    },
  }
};

console.log(expect(10).toBe(10)); // true
console.log(expect(5).notToBe(4));
