// Good Luck 💪🏾

    function sumTwoSmallestNums(numbers) {  
      let longestArr = [];
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] < longestArr[0] || longestArr[0] == null) {
              if (longestArr[0] < longestArr[1] || longestArr[1] == null) {
                  longestArr[1] = longestArr[0];
              }
              longestArr[0] = numbers[i];
          } else if (numbers[i] < longestArr[1] || longestArr[1] == null) {
              longestArr[1] = numbers[i];
          }
  
      }
      return longestArr[0] + longestArr[1];
  }
  



console.log(sumTwoSmallestNums([12, 5, 24, 55, 18]))// ➞ 17
console.log(sumTwoSmallestNums([190, 300, 230, 800])) //➞ 420