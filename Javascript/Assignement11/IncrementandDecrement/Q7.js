let a = 5;
let b = 3;
let c = 2;
let d = 7;

let result = ++a * (b-- + c) / --d; // 6 * (3 + 2) / 6 = >> 6 * 5 /6 = 5 

// a is 6 , b is 3 , c is 2 and d is 6

console.log("a is : " + a  ) ;
console.log("b is : "+ b );
console.log("c is : " + c );
console.log("d is : " + d);

console.log("The Result is : " + result);