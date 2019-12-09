//合併兩陣列, 且不改變原陣列, 返回合併的新陣列

//可合併兩個陣列
const a = [1,2,3];
const b = ['a','b','c'];
const c = a.concat(b);
console.log(c); //[ 1, 2, 3, 'a', 'b', 'c' ]

//可自己指定合併陣列值
const d = a.concat('e',6,'u');
console.log(d); //[ 1, 2, 3, 'e', 6, 'u' ]

//多陣列合併

const e = [1,2,3];
const f = [4,5,6];
const g = [7,8];

const h = e.concat(f,g);
console.log(h); //[1, 2, 3, 4, 5, 6, 7, 8]

//也可改變順序
const i = f.concat(e,g);
console.log(i); //[4, 5, 6, 1, 2, 3, 7, 8]


//與原陣列連動, 改變原陣列也會改變concat的結果
const num1 = [[1]];
console.log(num1);
const numbers = num1.concat(0,8);
console.log(numbers);

num1[0].push(4);
console.log(num1);
console.log(numbers);
