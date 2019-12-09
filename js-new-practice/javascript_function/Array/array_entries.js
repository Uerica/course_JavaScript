//entries() 以迭代方式返回key,value, 要搭配next().value使用
const a = ['a','b','c','d'];

var b = a.entries();

console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);


