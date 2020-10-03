const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      //swap
      for (let j = i + 1; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          let holder = array[j - 1];
          array[j - 1] = array[j];
          array[j] = holder;
        }
      }
    }
  }
  return array;
}

console.log(insertionSort(numbers));
