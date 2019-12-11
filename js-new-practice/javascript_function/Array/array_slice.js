//>>slice 切分陣列, 回傳新陣列
//arr.slice([begin[, end]]) 不包含end

const arr = [0,1,2,3];
arr2 = arr.slice(1,2)
console.log(arr,',',arr2); //[ 0, 1, 2, 3 ] , [ 1 ]

arr2 = arr.slice(0,2)
console.log(arr,',',arr2); //[ 0, 1, 2, 3 ] , [ 0 , 1 ]
