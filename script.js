function decimalToBinary(decimalNum) {
  let binaryNum = '';

  // Handling the case when the input is 0
  if (decimalNum === 0) {
    binaryNum = '0';
  }

 
let ans=Number(decimalNum).toString(2)
  return ans;
}

