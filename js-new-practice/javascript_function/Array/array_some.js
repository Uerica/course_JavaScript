//some() 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是true false
//傳入三個參數 currentValue , index, array

const arr = [1, 2, 3, 5];
const even = (elem) => elem % 2 === 0;
console.log(arr.some(even)); //true
console.log(arr.some((elem) => elem > 10 )); //false
console.log(arr.some((e,i,a) => a[i] > 5 )); //false
console.log(arr.some((e,i,a) => a[i] < 5 )); //true