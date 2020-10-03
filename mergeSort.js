class MergeSort {
  sort(array) {
    const mid = Math.ceil(array.length / 2);

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        this.swap(i, array);
      }
    }
    for (let i = 1; i <= 2; i++) {
      if (i === 1) {
        this.merge(array, 0, mid - 1);
      } else {
        this.merge(array, mid, array.length - 1);
      }
    }
  }

  swap(i, array) {
    let holder = array[i];
    array[i] = array[i + 1];
    array[i + 1] = holder;
    return array;
  }

  merge(array, start, stop) {
    const mid = Math.ceil(stop / 2) - 1;
    let merged = [];
    let i = start;
    let j = mid;
    // 3,4,1,2
    if (array[i] > array[j]) {
      merged.push(array[j]);
      j++;
      if (j > stop && i === 0) {
        array.push(array[(0, mid)]);
      }
    }
    console.log(array);
  }
}
