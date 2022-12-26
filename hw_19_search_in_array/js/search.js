const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// сортування масиву на позитивні та негативні
let positive = [], negative = new Array()
let positiveEven = [], positiveOdd = new Array()
let nPos = 0
let nNeg = 0
let nEvenPos = 0
let nOddPos = 0

for (let i=0; i<arr.length; i++)
  if (arr[i]>=0)
    positive[nPos++] = arr[i];
  else
    negative[nNeg++] = arr[i];

console.log(positive);
console.log(negative);
// Знайти суму та кількість позитивних елементів.
function arraySum(positive){
    let sum = 0;
    for(let i = 0; i < positive.length; i++){
        sum += positive[i];
        }
    console.log(sum, positive.length);
    }
    arraySum(positive);
// Знайти мінімальний елемент масиву та його порядковий номер
let min = Math.min(...arr)
let positionMin = arr.indexOf(min) + 1
 
console.log(min, positionMin)
// Знайти максимальний елемент масиву та його порядковий номер
let max = Math.max(...arr)
let positionMax = arr.indexOf(max) + 1
 
console.log(max, positionMax)
// Визначити кількість негативних елементів
console.log(negative.length);
// Знайти кількість парних та непарних позитивних елементів
for (let i=0; i<positive.length; i++)
  if (positive[i] % 2 ==0)
    positiveEven[nEvenPos++] = positive[i];
    else
    positiveOdd[nOddPos++] = positive[i];

    console.log(positiveEven.length);
    console.log(positiveOdd.length);
// Знайти суму парних позитивних елементів.
function arraySum(positiveEven){
    let sumPosEven = 0;
    for(let i = 0; i < positiveEven.length; i++){
        sumPosEven += positiveEven[i];
        }
    console.log(sumPosEven);
    }
    arraySum(positiveEven);
 // Знайти суму непарних позитивних елементів.
function arraySum(positiveOdd){
    let sumPosOdd = 0;
    for(let i = 0; i < positiveOdd.length; i++){
        sumPosOdd += positiveOdd[i];
        }
    console.log(sumPosOdd);
    }
    arraySum(positiveOdd);
// Знайти добуток позитивних елементів.
const mulPos = positive.reduce((acc, rec) => acc * rec);
console.log(mulPos);
// Знайти найбільший серед елементів масиву, решту обнулити
let lengths = []
arr.forEach(element => {
    if(element === max)
    lengths.push(element)
    else
    lengths.push(0)
    
});
console.log(lengths, positionMax);