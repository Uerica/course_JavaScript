//map()會將原陣列的元素每個跑一遍, 並且建立新陣列
//會傳入3個參數到callbackfn(currentValue,index,array)

const arr = [1,2,3,4,5];

let arrEven = arr.map(e => e*2);
console.log(arrEven) //[ 2, 4, 6, 8, 10 ]

//**使用 map 將陣列中的物件變更格式
const kvArr = [
    {key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}
];

let reformattedArr = kvArr.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})