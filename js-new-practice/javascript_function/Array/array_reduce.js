//**reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。

const arr = [1,2,3];
console.log(arr.reduce((acc,cur) =>acc + cur));//6

//**reduceRight() 方法將一個累加器及陣列中每一個值（由右至左）傳入回呼函式，將陣列化為單一值。