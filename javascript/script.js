var a;
a=10;


var a=10;
console.log(a);

b=10;
console.log(b);

const c=10;
console.log(c);

function test() {
    var d=20;
    console.log(d);
}
test();

var add = (a,b) => 
    a+b;

console.log(add(5, 10));

var arr = [1, 2, 3, 4, 5];
var arr2= [...arr, 6, 7, 8];
console.log(arr2);

var marks = [85, 90, 78];
var [m1, m2, m3] = marks;
console.log(m1, m2, m3);

function demo() {
    console.log("This is a demo function");
}
var callback = () =>  {
    console.log("Callback function called");
    demo();
}
callback();

var marks = [85, 90, 78];
var double = marks.map(marks => marks*2)
console.log(double);
var odd = marks.filter(marks => marks % 2 !== 0);
console.log(odd);
var sum = marks.reduce((acc, curr) => acc + curr, 0);
console.log(sum);   

var  number = [1, 2, 3, 4, 5];
var square = number.map(number => number * number);
var num = square.filter(square => square < 5);
var sum = num.reduce((acc, curr) => acc + curr, 0);
console.log(sum);