//includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
//arr.includes(searchElement[, fromIndex])
//fromIndex 從0開始算

const arr1 = [1, 2, 3];
console.log(arr1.includes(2)); //true
console.log(arr1.includes(2,0)); //true 從索引值0開始找2
console.log(arr1.includes(2,2)); //false 從索引值2開始找2
console.log(arr1.includes(2,-2)); //true length(3)+fromIndex(-2) = 1;


const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); //true
console.log(pets.includes('at')); //false 不是元素

//如果fromIndex <= 0 結果都是true
arr = ['a','b','c'];
console.log(arr.includes('a', -2))

//如果有NaN也可以找喔!
arr2 = ['a','b',NaN];
console.log(arr2.includes(NaN)) //true

//**includes() used as a generic method

