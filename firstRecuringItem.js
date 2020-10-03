//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {
  check = new Set(input);
  // check input whether has repeted items
  if (input.length === check.size) {
    return undefined;
  }

  map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    }
    // note: if(0){this condition wont be excuted} is evaluated to false
    map[input[i]] = true;
    console.log(map)
  }
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // expected 2
console.log("#".repeat(30));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // expected 1
console.log("#".repeat(30));
console.log(firstRecurringCharacter([2, 3, 4, 5])); // undefined
console.log("#".repeat(30));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5


