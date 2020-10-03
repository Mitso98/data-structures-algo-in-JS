let numbers = [
  9,
  20,
  10,
  5,
  10,
  4,
  7,
  5,
  1,
  2,
  3,
  6,
  4,
  8,
  9,
  900,
  800,
  700,
  600,
  5500,
  400,
  300,
  200,
  100,
  99,
  88,
  55,
  77,
  66,
  44,
];

function selectionSort(array) {
  const t0 = performance.now();
  const length = array.length;
  // parent loop provides child loop with the unadjusted part of the array
  for (let i = 0; i < length; i++) {
    let min = i;
    let holdSmallest = array[i];
    // child loop: loops only through the unadjusted part
    for (let j = i + 1; j < length; j++) {
      if (array[j] < holdSmallest) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = holdSmallest;
  }
  const t1 = performance.now();
  console.log(t1 - t0);
  return array;
}

console.log(selectionSort(numbers));
