// Вивести на сторінку в один рядок через кому числа від 10 до 20.
alert('1 Вивести на сторінку в один рядок через кому числа від 10 до 20')
let msg1 = '';
for (let i = 10; i < 21; i++) {
    msg1+= i + ', '
  }
alert(msg1);
//Вивести квадрати чисел від 10 до 20

alert('2 Вивести квадрати чисел від 10 до 20')

let a = 10; 
let msg2 = '';
for (let a = 10; a < 21; a++) {
  msg2+= Math.pow(a, 2) + ', '
}
alert(msg2);
//Вивести таблицю множення на 7

alert('3 Вивести таблицю множення на 7')

let i = 1; 
let msg3 = '';
while (i < 11) {
  msg3+= i + ' x 7 = ' + (i * 7) + ', ';  
  i++;
}
alert(msg3);
//Знайти суму всіх цілих чисел від 1 до 15

alert('4 Знайти суму всіх цілих чисел від 1 до 15')

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function arraySum(array){
let sum = 0;
for(let b = 0; b < array.length; b++){
    sum += array[b];
    }
alert('Сума чисел: ' + sum);
}
arraySum(arr);

//Знайти добуток усіх цілих чисел від 15 до 35
alert('5 Знайти добуток усіх цілих чисел від 15 до 35')

const arr2 = [15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
let total = 1;

for (let c = 0; c < arr2.length; ++c) {
    total *= arr2[c];
}
alert('Добуток = ' + total);
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

alert('6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500')
let lastNumber = 500;
let sum = 0;

for (let i = 1; i <= lastNumber; i++) {
sum = sum + i;}
total = sum / 501
alert(total)

//Вивести суму лише парних чисел в діапазоні від 30 до 80

alert('7 Вивести суму лише парних чисел в діапазоні від 30 до 80')
sum = 0
for (let i = 30; i <= 80; i++) {
  if (i % 2 == 0) {
    sum = sum + i;}
}
alert(sum)

//Вивести всі числа в діапазоні від 100 до 200 кратні 3

alert('8 Вивести всі числа в діапазоні від 100 до 200 кратні 3')
let msg4 = '';
for (let f = 100; f < 201; f++) {
  if(f % 3 === 0){
    msg4+= f + ', '}
}
alert(msg4);

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники
alert('9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники')
let userNum = prompt('Введи будь яке натуральне число');
let num = userNum;
let msg5 = '';
  for (let j = 1; j <= num; j++) {
      if (num % j === 0) { 
        msg5+= j + ', '}
    }
    alert(msg5);
// Визначити кількість його парних дільників
let arr3 = []
for (let j = 1; j <= num; j++) {
if (num % j === 0){
  arr3.push(arr3.length+1)
}
}
alert(arr3.length);
//Знайти суму його парних дільників
  alert('11 Знайти суму його парних дільників')

  alert('12 Надрукувати таблицю множення від 1 до 10')
    let msg6 = ''
  for (q = 1; q <=9; q++){
  for(h = 1; h <=9; h++){
    let number = q * h
    msg6+= number + ', '}
  }
alert(msg6)