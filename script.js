function decimalToBinary(decimalNum) {
  let binaryNum = '';

  // Handling the case when the input is 0
  if (decimalNum === 0) {
    binaryNum = '0';
  }

  // Converting decimal to binary
  while (decimalNum > 0) {
    binaryNum = (decimalNum % 2) + binaryNum;
    decimalNum = Math.floor(decimalNum / 2);
  }

  return binaryNum;
}

// Prompt the user for input
const input = prompt();

// Parse the input as a decimal number
const decimalNumber = parseInt(input, 10);

// Convert the decimal number to binary
const binaryNumber = decimalToBinary(decimalNumber);

// Output the result
console.log(binaryNumber);
