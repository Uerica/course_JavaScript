//>>join()將array轉字串
//arr.join([separator]) //separator隔開元素的符號


const RouRouName = ['Wang','Yi','Rou'];
console.log(RouRouName.join()) //Wang,Yi,Rou 預設會用,隔開元素
console.log(RouRouName.join('')) //WangYiRou ''如果是空字串則元素間不會出現任何字元
console.log(RouRouName.join('-'))//Wang-Yi-Rou separator是'-', 所以用此隔開

//空陣列, undefined, null, 都會被視為空字串處理, 所以回傳空字串
const Error = [];
const Error1 = [undefined];
const Error2 = [null];
console.log(Error.join('-'));
console.log(Error1.join('-'));
console.log(Error2.join('-'));
