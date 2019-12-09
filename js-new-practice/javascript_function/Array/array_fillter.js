//filter() 會將原陣列的值, 索引, 陣列傳入callbackfn中, 可條件篩選後返回新陣列

arr = [18, 50, 90, 75, 44, 31, 45];

//條件篩選,使用箭頭函式
arr1 = arr.filter((e,i,a) =>e < 50);
console.log(arr1); //[ 18, 44, 31, 45 ]

//**從JSON過濾無效條目

//在陣列值中搜索
function filterItems(arr, query) {
    return arr.filter( e => {
        return e.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }

RouRouName = ['RouRou', 'RouRoubaby',  'Joe', 'ququ', 'YiRou', 'WangYiRou'];
console.log(filterItems(RouRouName,'Rou')); //[ 'RouRou', 'RouRoubaby', 'YiRou', 'WangYiRou' ]

//**影響初始數組（修改，附加和刪除）