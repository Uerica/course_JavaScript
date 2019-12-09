//>>Array.isArray 用來判斷是否為array 正確返回true 錯誤false

console.log(Array.isArray([1,2,3])); //true
console.log(Array.isArray({key:'value'})); //false
console.log(Array.isArray('hello')); //false
console.log(Array.isArray(100)); //false
console.log(Array.isArray(new Array)); //true

//**instanceof 與 isArray




