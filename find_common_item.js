const arr1 = ["a", "b", "c", "x"];
const arr2 = ["f", "y", "x"];

let large = Array(100).fill("a");
large[0] = "f";

// Brutal Naive Approach

const intersectionBrutal = (arr1, arr2) => {
  for (let item1 of arr1) {
    for (let item2 of arr2) {
      if (item1 === item2) {
        return true;
      }
    }
  }
  return false;
};

const intersectionHashMap = (bigArr, smallArr) => {
  /*
    creaate object
    itterate over array1 items
    create keys with the name of arr1 items with value of 0
  */
  let perfNow = performance.now();
  map = {};
  for (let item1 of smallArr) {
    map[item1] = true;
  }

  /*
    itterate over the second array
    if item === key in the map return true
    otherwise return false
  */

  for (let item2 of bigArr) {
    if (map[item2]) {
      let perfLater = performance.now();
      console.log("main >> " + (perfLater - perfNow));
      return true;
    }
  }
  return false;
};

const intersectionSmart = (bigArr, smallArr) =>
  smallArr.some((item) => bigArr.includes(item)); // compact one

console.log(intersectionBrutal(large, arr2));
console.log(intersectionSmart(large, arr2));
console.log(intersectionHashMap(large, arr2));
