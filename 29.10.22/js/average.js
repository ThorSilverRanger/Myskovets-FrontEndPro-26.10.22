const userNumber1 = prompt('First number')
const userNumber2 = prompt('Next number')
const userNumber3 = prompt('Last number')

const num1 = Number(userNumber1)
const num2 = Number(userNumber2)
const num3 = Number(userNumber3)

const totalAverage = (num1+num2+num3)/3;

alert("Average number is: " + totalAverage);
