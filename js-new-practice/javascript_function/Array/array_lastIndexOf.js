//lastIndexOf() 回傳陣列中最後一個被找到的元素, 找不到則回傳-1
//arr.lastIndexOf(searchElement [,fromIndex])



const arr = [1,2,5,1,3,8,1];
console.log(arr.lastIndexOf(1));//6 找最後一個的索引
console.log(arr.lastIndexOf(1,5));//3 從最後一個找到倒數第5個, 所以最後出現的是在3位置的1
console.log(arr.lastIndexOf(1,100));//6 大於length長度會找整個陣列, 所以最後出現的是6
console.log(arr.lastIndexOf(1,-7)); //0 length(7)+fromIndex(-7) = 0 所以會找第0個
console.log(arr.lastIndexOf(1,-3)); //3 length(7)+fromIndex(-3) = 4 所以會找到第4個
console.log(arr.lastIndexOf(1,-8)); //-1 length(7)+fromIndex(-8) = -1 小於0就回傳-1
