//indexOf()用來找該元素的索引, 若不存在回傳-1
//只會回傳第一個找到的元素索引
//arr.indexOf(searchElement[, fromIndex])

const arr = [1,9,4,5,6,7,9];
console.log(arr.indexOf(4,-5)) //2 負數從後面開始找, 最後一個為-1, 倒數第二為-2, 以此類推...
console.log(arr.indexOf(4,-4)) //-1 只算到陣列5
console.log(arr.indexOf(4,-7)) //2 length + fromIndex <= 0 都找得到
console.log(arr.indexOf(4,-8)) //2 length + fromIndex <= 0 都找得到

//尋找該元素出現的所有位置

const finda = ['a','g','s','a','d','e','a'];
const indices = [];
const elem = 'a';

let idx = finda.indexOf(elem); //idx裡面放找到a的index
console.log(finda.indexOf(elem),idx); //0只會找第一個

while(idx!=-1){
    indices.push(idx); //indices陣列中放入idx找到的索引

    idx = finda.indexOf(elem,idx+1);//從下一個索引值開始找, +1是為了排除現在的位置, 所以回傳3
    console.log(`idx是${idx}`); //3 //6 //最後找不到所以-1迴圈就停止
};

console.log(indices); //[0,3,6]

//尋找元素是否存在於陣列中，若沒有則加入到陣列裡。
function findNew(arrNew,Num){
    if(arrNew.indexOf(Num) === -1){
        arrNew.push(Num);
        console.log(`所以這次的新數字是${Num}`);
    }else if(arrNew.indexOf(Num) > -1){
        console.log(`${Num}已經存在摟`);
    }
};

const arrNew = [12,31,79,1990,154,47,29];
findNew(arrNew,80);
findNew(arrNew,31);
console.log(arrNew);