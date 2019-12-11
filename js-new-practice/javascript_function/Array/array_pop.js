//pop()會移除最後一個元素

let arr = [1,2,3];
console.log(arr.pop()); //3 最後一個元素
console.log(arr) //[ 1, 2 ] 被移掉3了!
console.log(arr.pop()); //2 最後一個元素
console.log(arr) //[ 1 ]被移掉2了!
console.log(arr.pop()); //1 最後一個元素
console.log(arr) //[] 被移掉1了! 剩一個空殼!
console.log(arr.pop()); //undefined 沒東西刪了
console.log(arr) //[]
