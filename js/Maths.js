// console.log(math.PI);
// console.log(Math.E);

// var x = Math.round(4.2);

// var x = Math.ceil(4.2);

// var x = Math.floor(4.9);

// var x = Math.trunc(4.1);

// var x = Math.pow(4,2);


// var x = Math.min(100,3,2,5,-8);

// var x = Math.max(1,34,56);


// console.log(x);


// // Random Number

// let x = Math.floor(Math.random() * 10) + 1; //1 to 10

// function getRandom(min,max){
//     let x = Math.floor(Math.random() * (max - min + 1) ) + min;
//     return x;
// }

// // console.log(x);

// console.log(getRandom(10,20));


// // Date Object

let x = new Date("October 13, 2022 11:12:33");
let y = new Date();
// y.setDate(x.getDate() + 50);
// console.log(x);
// console.log(y);

if(y > x)
{
    console.log("x is past date");
}
else if(x > y){
    {
        console.log("x is future date");
    }
}
else{
    console.log("x is same date");
}
 
