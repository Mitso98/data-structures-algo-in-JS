function mergeSortedArrays(arr1, arr2) {
  const mergedSsorted = [];
  let arrItem1 = arr1[0];
  let arrItem2 = arr2[0];
  let i = 0;
  let j = 0;

  while (arrItem1 || arrItem2) {
    console.log(arrItem1, arrItem2);

    if (!arrItem1 || !arrItem2 || arrItem1 < arrItem2) {
      mergedSsorted.push(arrItem1);
      i++;
      arrItem1 = arr1[i];
    } else {
      mergedSsorted.push(arrItem2);
      j++;
      arrItem2 = arr2[j];
    }
  }

  return mergedSsorted;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
