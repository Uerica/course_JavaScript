//splice()可以藉由刪除既有元素並或加入新元素來改變一個陣列的內容。
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//回傳刪除元素

const arr = [0,1,2,3,44,5];

console.log(arr.splice(4,1,4)); //[ 44 ] 回傳刪除值 : 在第4個位置, 刪除1個元素, 插入4 
console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]
console.log(arr.splice(6,0,6)); //[] 沒有刪除值, 回傳空陣列 :在第6個位置, 刪除0個元素, 插入6
console.log(arr); //[ 0, 1, 2, 3, 4, 5 , 6]
console.log(arr.splice(3,2)); //[ 3, 4 ] : 第3個位置刪除2個元素
console.log(arr); //[ 0, 1, 2, 5, 6 ]

