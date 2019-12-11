//keys() 方法會回傳一個包含陣列中的每一個索引之鍵（keys）的新 Array Iterator 物件。

const arr = ['a', 'b', 'c'];
console.log(arr.keys());// [Array Iterator] {}

const i = arr.keys();

for(const key of i){
    console.log(key); //0 //1 //2
}