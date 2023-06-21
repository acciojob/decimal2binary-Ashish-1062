function convertDecimalToBinary() {
	const decimalInput = document.getElementById('decimal-number');
	const resultDiv = document.getElementById('result');
	const decimalNum = parseInt(decimalInput.value);

	// Function to convert decimal to binary
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

	// Convert the decimal number to binary
	const binaryNum = decimalToBinary(decimalNum);

	// Display the result
	resultDiv.textContent = `Binary: ${binaryNum}`;
}
