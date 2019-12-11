//shift() 會移除陣列的第一個元素。回傳第一個元素

let arr = [1,2,3];
console.log(arr.shift()); //1 移除第一個元素並回傳第一個元素值
console.log(arr); //[ 2, 3 ]
console.log(arr.shift()); //2
console.log(arr); //[ 3 ]
console.log(arr.shift()); //3
console.log(arr); //[ ]
console.log(arr.shift()); //undefined 沒有元素移除回傳undefined
console.log(arr); //[ ]

//於 while 迴圈中使用 shift() 方法
const num = [5,4,88,4];

while( (i = num.shift()) !== undefined ) {
    console.log(i); //5 //4 //88 //4
}

