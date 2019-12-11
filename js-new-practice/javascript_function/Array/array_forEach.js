//>>forEach() 方法會將陣列內的每個元素跑一遍
//會傳入elem,index,array三個參數

const arr =[1,2,3];
arr.forEach((elem,index,array) => console.log(elem,index,array));//1 0 [ 1, 2, 3 ] //2 1 [ 1, 2, 3 ] //3 2 [ 1, 2, 3 ]

//copy陣列
//以前用for迴圈慢慢存

let arr1 = ['a','b','c'];
let arr2 = [];

for(let i=0; i<arr1.length; i++){
    arr2.push(arr1[i]);
};

console.log(arr2); //['a','b','c']

//使用foeEach
let arr3 = ['a','b','c'];
let arr4 = [];

arr3.forEach((e) => arr4.push(e))
console.log(arr4); //[ 'a', 'b', 'c' ]

//印出array值

function logArrayElem(e,i,a){
    console.log(`a[${i}]=${e}`)
};

[2,3,,6].forEach(logArrayElem); //a[0]=2 //a[1]=3 //a[3]=6

//

function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry;
        this.count++;
    }, this);
};

  const obj = new Counter();
  obj.add([2, 5, 9]);
  console.log(obj.count);
  console.log(obj.sum);

  //**An object copy function

  //**If the array is modified during iteration, other elements might be skipped.
  var words = ['one', 'two', 'three', 'four'];
    words.forEach(function(word) {
        console.log(word);
        if (word === 'two') {
            words.shift();
        }
    });