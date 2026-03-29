function convertToRoman(num) {
  const romanMatrix = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100],  ['XC', 90],  ['L', 50],  ['XL', 40],
    ['X', 10],   ['IX', 9],   ['V', 5],   ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (let i = 0; i < romanMatrix.length; i++) {
    const [char, value] = romanMatrix[i];
    
    // While the number is greater than or equal to the current Roman value
    while (num >= value) {
      result += char; // Add the letter to our string
      num -= value;   // Subtract the value from our total
    }
  }

  return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
// console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman;