const nFacRuntimeFunc = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(nFacRuntimeFunc(n - 1));
  }
};

console.log(nFacRuntimeFunc(2));
