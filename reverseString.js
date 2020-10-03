let s = "Hi My Name Is Mostafa";

const reverse = (str) => {
  let otpt = "";
  for (i = str.length - 1; i >= 0; i--) {
    otpt += str[i];
  }
  return `>>> ${otpt}`;
};

const reverse2 = (str) => [...str].reverse().join("");

console.log(reverse(s));
console.log(reverse2(s));
