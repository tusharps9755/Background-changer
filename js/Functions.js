// // Functions call

// function MulTable()
// {
//     for(i=1;i<=10;i++)
//     {
//         document.write(`2 x ${i} = ${2*i}`);
//         document.write("<br>");
//     }
// }

// MulTable();

// document.write("Hello <br>");

// MulTable();

// // parameter and arguments

// function MulTable(num)
// {
//     for(i=1;i<=10;i++)
//     {
//         document.write(`${num} x ${i} = ${num*i}`);
//         document.write("<br>");
//     }
//     document.write("<br><br>");
// }

// MulTable(12);

// document.write("<br>");

// MulTable(5);

// // Multiple parameter

//  function add(num1,num2)
//  {
//      document.write(num1 + num2);
//  }

//  add(5,5);


//Arguments Object

// function add()

// {
//     // console.log(arguments.length);
//     // console.log(arguments);
//     //  console.log(arguments[0]);


// if(arguments.length==0)
// {
//     console.log("No parameter passed !");
// }
// else
//     {
//     let sum = 0;//9
//     for(let i = 0 ; i < arguments.length ; i++)
//     {
//         sum=sum+arguments[i];
//     }
//     console.log(sum);
//     }
// }

// add(5,7);//2

// let addition=add;
// addition(2,3);
// add(3,5,7);
// // add(4,8,9,4);//4


// // return type in function

// function add(a,b){

//     // let d = [2,3,4];//also print array

//     // return a+b;
//         //   or
//     let d = a+b;

//     return d;
    
// }

// let c = add(3,4);


// function compare(a,b){
//     if(a>b)
//     {
//         return 1
//     }
//     else if(b>a){
//         return -1;
//     }
//     else
//     {
//         return 0;
//     }
// }

// let c = compare(6,6);

// document.write(c);