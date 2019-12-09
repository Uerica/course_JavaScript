//every() 代表檢查陣列中所有值是否有符合條件, 若全符合返回true, 反之false
//every會在callbackfn中傳入三個值, 參數, 索引, 陣列

//用箭頭函式表示
const a = [5,30,15,31,27,6];
console.log(a.every((e,i,a) => e < 40))

//用every修改陣列值
let arr = [1,2,3,4];
arr.every((e,i,arr) => {
    arr[i] = arr[i]*2
    console.log(arr)
    return e //**迴圈繼續的關鍵
})

//用every在陣列中新增值
arr1 = [1,2,3,4];
arr1.every((e,i,arr1) => {
  arr1.push(arr1[i])
  console.log(arr1)
  return e
})

//用every在陣列中刪除值
arr2 = [1,2,3,4];
arr2.every((e,i,arr2)=>{
  arr2.pop()
  console.log(arr2)
  return e
})