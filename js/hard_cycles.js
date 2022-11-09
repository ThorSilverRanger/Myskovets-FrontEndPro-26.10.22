//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5
alert('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5')

let num = '';
for (let i = 20; i <= 30; i=i+0.5) {
  num += i + ', ';
}
alert('Відповідь: ' + num);

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
alert('Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.')

const dollarPrice = [];
const mult = 27
let total = ''
for(let a = 10; a <=100; a=a+10){
  total += a * mult + ', '
}
alert('Вартість: ' + total);

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
alert('Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.')

let userNum = prompt('Type your number')
let num2 = Number(userNum)
let exp = ''
for(let b = 1; b < num2; b++ ){
    if(b**2 < num2){
    exp += b+ ', ';
    }
}
alert('Відповідь: ' + exp);

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)
alert("Дане ціле число. З'ясувати, чи є воно простим")

let userNum2 = prompt('Type your number')
let num3 = Number(userNum2)
  for (let c = 2; c < num3; c++) {
    if (num3 % c === 0) {
        alert('Складене')
        break;
        }

    else{
        alert('Просте')
        break;
    }
    }
//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
alert('Дане деяке число. Визначити, чи можливо одержати це число шляхом зведення числа 3 у деякий ступінь.')

let userNum3 = prompt('Type your number')
const num4 = Number(userNum3)
let d = 0
const checker = []
    while( d < 50) {
    checker.push(3 ** d)
    d++
    }
   console.log(checker) 
const contains = checker.some (number => number === num4)
if(contains === true){
    alert('Можливо')
}
else{
    alert('Неможливо')
}



