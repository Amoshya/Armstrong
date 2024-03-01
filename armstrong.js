const input = require("readline-sync");

let n = input.questionInt("number N;- ");
 let sum =  0;
 let t = n;
 let r = 0;

  while(n>0)
 {
    r=n%10;
    n=Math.floor(n/10);
    sum=sum+r**3;
 } if  (sum == t)
 {
    console.log("A");

 } else {console.log("not");}