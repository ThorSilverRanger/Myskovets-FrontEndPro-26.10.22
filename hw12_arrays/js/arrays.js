let userArr = prompt('Insert your data here')
let arr = userArr.split(" ")
let arr2 = arr
alert(` Your data is stored: ${arr}`)
document.write(` Your data is stored: ${arr} <br>`)
alert('Sort it!')
let sort = arr.sort(function(a, b){return a - b})
alert(` Sorted: ${sort}`)
document.write(` Sorted: ${sort} <br>`)
alert('Let try to find what elements are hiden!!! ;)')
arr2.splice(1, 3)
document.write(` An excluded elements in range 2-4: ${arr2}`)