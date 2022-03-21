


///////   method 1
let a = 5;
let b = 10;
console.log("a = "+a,"\t"+ "b = "+b)
let temp = a;
a = b;
b = temp;
console.log("a = "+a,"\t"+ "b = "+b+"\n");




///////   method 2
let p = 10;
let q = 3;
console.log("p = "+p,"\t q = "+q);
p = p + q;
q = p - q;
p = p - q;
console.log("p = "+p," \t q = "+q+"\n");



///////   method 3
let x = 1;2
let y = 2;
console.log("x = "+x,"\t y = "+y);
[x,y] = [y,x];
console.log("x = "+x,"\t y = "+y+"\n");



//////////   method 4

let m = 100;
let n = 200;
console.log("m = "+m,"\t n = "+n);
m = m ^ n;
n = m ^ n;
m = m ^ n;
console.log("m = "+m,"\t n = "+n);

