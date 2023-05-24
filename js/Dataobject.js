// let x="2021-05-25";
// let x="Jan-25-2021";


// let x=new Date();
// console.log(x);

//we needed another date time and day 
// let x=new Date(2018,11,13,10,33,56,7);
// console.log(x);

//String format

let x=new Date("October 13, 2018 11:12:33");
// x.getFullYear(2020);//Change the year
// x.setMonth(2);
// x.setDate(2);
// x.setHours(2);
// x.setHours(2);
// x.setSeconds(2);

// let y=new Date("October 13, 2018 11:12:33");
// y.setDate(x.getDate() + 50);//change date after 50 days
// console.log(x);
// console.log(y);

let y=new Date();

if(y>x)
{
    console.log("x is past date");
}
else if(x>y)
    {
        console.log("x is future date");
    }
    else{
        console.log("x is same date");
    }