// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is
// the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fib(pos) {
  // O(n)
  let i = 2;
  let numbers = [0, 1];

  while (i <= pos) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
    i++;
  }
  return numbers[numbers.length - 1];
}

function fibRecursion(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }

  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

fibRecursion(3);
/*
    Check pesudo code
*/
