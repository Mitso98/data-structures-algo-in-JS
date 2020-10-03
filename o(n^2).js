// Quadratic time function O(n^2)

let arr = ["a", "b", "c", "d"];

const logPairs = (arr) => {
  arr.forEach((elm) => {
    arr.forEach((elm2) => {
      console.log(elm, elm2);
    });
  });
};

logPairs(arr);
