//The Number DataType IN JavaScript
console.log(3/2);//Produces an integer
console.log(Math.floor(3/2));//Produces a Number
console.log(0.1+0.2);

//parseInt function
console.log(parseInt('11011',2)); 
console.log(parseInt('10000abc',10)); 


//parseFloat function
console.log(parseFloat('452.3'));
console.log(typeof '452.3')
console.log(typeof parseFloat('452.3'))

//NaN (Not a Number)
console.log(+"Hello World");
console.log(parseInt("Hello World",10));
console.log(parseFloat("Hello World",10));
console.log(NaN+10);

//Number.isNaN() function
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(+"Hello"));
console.log(Number.isNaN(true));

//Infinity and -Infinity
console.log(1/0);
console.log(-1/0);

//isFinite function
console.log(isFinite(NaN));
console.log(isFinite(-1/0));
console.log(isFinite(1/0));
console.log(isFinite(10000));

