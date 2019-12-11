//sort()方法會原地對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。
//預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
//arr.sort([compareFunction]) compareFunction指定一個fn來定義排序順序, 如果沒有就用Unicode 編碼位置來排序

const arr = ['a', 1111, 222, 123, 'fd'];
console.log(arr.sort()); //[ 1111, 123, 222, 'a', 'fd' ]
console.log(arr); //[ 1111, 123, 222, 'a', 'fd' ]

//compareFunction中會取參數a,b兩值來比較, (a < b), a會排在b之前, (a = b), a,b位置不變, (a > b), b在a之前

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);