// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr =  [1,'asd',2,{},3,4,20,'', 15];
let barr = arr;
for (let i = arr.length - 1; i >= 0; i--) {
  if (typeof arr[i] !== "number")
    arr.splice(i, 1);
}
console.log(barr);
function numAverage(barr) {
    let i = 0;
    for (const arrayElement of barr) {
        i += arrayElement;
    }
    return i / barr.length;
} 
    const average = numAverage(barr)
    console.log(average);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Error';
  return eval(x + znak.replace('^', '**') + y)
}
const x = prompt('Введіть x');
const y = prompt('Введіть y');
const znak = prompt('Введіть дію');
alert(doMath(x, znak, y))

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const mainArr = prompt('Введіть довжину основного масиву');
const subArr = prompt('Введіть довжину внутрішнього масиву');
const arrFull = new Array(+mainArr).fill(0)
  .map((_, ind) =>
    new Array(+subArr).fill(0).map((_, i) => prompt(`Введіть елемент ${i} у внутрішному масиві ${ind}`)));
console.log('Ваш масив:' + arrFull.map(subArr => '\n' + subArr));

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const userString = prompt('Введи фразу');
const userSymbols = prompt('Які символи видаляємо?');
function replaceSymbols(string, pattern){

    let strPat = pattern.join('');
   
    return string.replace(new RegExp(`[${strPat}]`, 'gi'), '')
   
   }
   alert(replaceSymbols(userString, [userSymbols]))