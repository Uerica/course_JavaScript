//ES6 Arrow Function

//1.更直覺,好看

//ES5
function hi(){
    console.log("hello");
}

hi();


//ES6 不給變數
const yo = () => {console.log("yoyo")}
yo();

//ES6 給變數且只有一個,不用括號
const sayYo = user =>{console.log(user+" say yoyo.")}
sayYo("Ann");

//ES6 給變數但不只一個
const student = (user,age) =>{
    console.log(user+" is "+age+" years old.");
}

student("Ann","20");

//2.this問題

//ES5
var person = {
    name: "Tany",
    age: 18,
    gender: "female",
    testing: function(){

        // console.log(this)//找到person這個物件
        
        var self = this;//為了解決this變成window的問題,會在此將this裝入一個變數中
        
        // 沒有給變數,會找到整個window
        // (function(){
        //     console.log()
        // })();

        (function(){
            console.log(self)
        })()//找到person這個物件
    }
}

person.testing();

//ES6
var superperson = {
    supername: "Tany",
    superage: 18,
    supergender: "female",
    supertesting: function(){ //這裡不能使用Arrow Function
        (()=>{
            console.log(this);
        })();
    }
}

superperson.supertesting();

//forEach, setInterval中的this錯誤也能用箭頭函式解決

//3.不能當成 function constructor 來用

function Person(first,last){
    this.firstname = first,
    this.lastname = last
}

var Ann = new Person("Ann","Lee")
console.log(Ann);

let PersonTwo = (name,age) => {
    this.yourname = name,
    this.yourage = age
}

var Bebe = new PersonTwo("Bebe","30")
console.log(Bebe);