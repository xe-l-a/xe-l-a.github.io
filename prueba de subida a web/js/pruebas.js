function comp(array1, array2){
  if (array1 === null || array2 === null){
    return false
  }
  let chivato = false;
  for (num2 of array2){
    for (num1 of array1){
      if(num1*num1 === num2){
        chivato = true;
      }
    }
    if (chivato === false) {
      return false
    }
    chivato = false
    console.log(array1.indexOf(num1))
    array1.splice(array1.indexOf(num1),1)

  }
  return true
}

// array1 = [121, 144, 19, 161, 19, 144, 19, 11]
// array2 = [121, 14641, 20736, 36001, 25921, 361, 20736, 361]

array1 = [2,2,3]
array2 = [4,9,9]


console.log(comp(array1,array2))