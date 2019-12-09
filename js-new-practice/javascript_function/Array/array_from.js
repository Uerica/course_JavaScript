//>>array.from() 可以建立一個新的array
//可用於陣列或map,set物件
//從字串建立
console.log(Array.from('Uerica')); //[ 'U', 'e', 'r', 'i', 'c', 'a' ]

//從陣列值計算後建立 Array.from(arrayLike[, mapFn[, thisArg]])
console.log(Array.from([1, 2, 3], x => x + 3)) //[ 4, 5, 6 ]

//Examples
//Array from a String
console.log(Array.from('Uerica')); //[ 'U', 'e', 'r', 'i', 'c', 'a' ]

//**Array from a Set?

//**Array from a Map?

//Array from an Array-like object (arguments)
//arguments由函式參數取得的類陣列物件
function arr(){
    console.log(Array.from(arguments)); //[ 1, 2, 3 ]
}

arr(1, 2, 3);

//Using arrow functions and Array.from() 使用箭頭函式代表
//計算後重新給值
console.log(Array.from([1, 2, 3], x => x + 3)); //[ 4, 5, 6 ]

//用排序方式產生陣列
console.log(Array.from({length:5}, (v,i) => i)); //[ 0, 1, 2, 3, 4 ]

//寫一個產生陣列的方法
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, ( v, i) => start + (i * step));

console.log(range(0, 4, 1)) //取一個 0 to 4 的陣列 [ 0, 1, 2, 3, 4 ]
console.log(range(2, 10, 2)) //取一個 1 to 10 的偶數陣列 [ 2, 4, 6, 8, 10 ]
console.log(range(1, 10, 2)) //取一個 1 to 10 的基數陣列 [ 1, 3, 5, 7, 9 ]
console.log(range('A'.charCodeAt(), 'Z'.charCodeAt(), 1).map(x => String.fromCharCode(x))); //取A to Z的陣列 前面先轉成代碼,後面的fromCharCode是將代碼解碼成字串