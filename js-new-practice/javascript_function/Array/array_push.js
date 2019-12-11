//push()會將元素添加到陣列末端, 並回傳長度

const arr = ['a','b','c'];
console.log(arr.push('d')); //4 回傳長度
console.log(arr) //[ 'a', 'b', 'c', 'd' ]
console.log(arr.push('e','f')); //6 添加多個
console.log(arr) //[ 'a', 'b', 'c', 'd', 'e', 'f' ]