// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

const arr = [1,2,3,4,5,6,7,]
function arrayRemove(arr, value) { 
    
    return arr.filter(function(rem){ 
        return rem != value; 
    });
}

let rmElem = arrayRemove(arr, 5);

console.log(rmElem)
