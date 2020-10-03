const arry = [6, 5, 3, 1, 7, 2, 8, 4];

function bubbelSort(arr) {
  let len = arr.length - 1;
  let i = 0;

  while (len !== 0) {
    // Swap
    if (arr[i + 1] < arr[i]) {
      let holder = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = holder;
    }
    // Traverse
    i++;
    if (i === len) {
      len = len - 1;
      i = 0;
    }
  }
  return arr;
}

console.log(bubbelSort(arry));
