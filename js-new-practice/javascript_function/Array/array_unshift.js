//unshift()添加一個或多個元素至陣列的開頭，並且回傳陣列的length。

const arr = [1,2,3];
console.log(arr.unshift(0)); //4 回傳陣列的length
console.log(arr) //[ 0, 1, 2, 3 ]
console.log(arr.unshift(99,5)); //6 回傳陣列的length
console.log(arr) //[ 99, 5, 0, 1, 2, 3 ]
