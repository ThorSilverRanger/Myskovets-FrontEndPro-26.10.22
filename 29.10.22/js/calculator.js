let question =  Number(prompt('Choose operration: 1 - addition, 2 - substraction, 3 - division, 4 - multyplication'))
const num1 = Number(prompt('Input First number'))
const num2 = Number(prompt('Input Second number'))

if(question === 1){
    console.log(`${num1} + ${num2} = ${num1+num2}`)
 } else if(question === 2){
  console.log(`${num1} - ${num2} = ${num1-num2}`)
} else if(question === 3){
  console.log(`${num1} : ${num2} = ${num1/num2}`)
} else if(question === 4){
  console.log(`${num1} * ${num2} = ${num1*num2}`)
} else{
  console.log(`Haven't resolve`)
}