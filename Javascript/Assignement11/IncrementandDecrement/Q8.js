let m = 2;
let n = 3;
let o = 4;
let result = m++ * (--n + m) / (o-- - n); // 2 * (2 + 3) / (4 - 2) = >> 2 * 5 / (4 -2) =>> 5

console.log("m is : " + m); // 3
console.log("n is : " + n); // 2
console.log("o is : " + o); // 3

console.log("The Result is : " + result);