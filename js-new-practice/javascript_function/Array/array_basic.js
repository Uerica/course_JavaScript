//>>宣告方式
//第一種直接宣告
const number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

//第二種建立array
const fruits = new Array('apple', 'banana', 'orange')

//事先宣告array有幾個索引, 或決定length長度
const test = new Array(42);
console.log(test.length) //42

//>>讀取方法
//利用索引值
console.log(number[0],number[1]); //one two

//利用array.length
console.log(fruits[fruits.length-1]); //orange 解說:length是指長度, 從1開始算, 但索引值是從0開始算, 所以要找最後一個要-1