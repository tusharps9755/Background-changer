// 1-
// let book1 = "Maths";
// let book2 = "hindi";
// let book3 = "English";
// let book4 = "Computer Science";

// book1="English";

// console.log(book3);

// 2:-
// let  book = ["Maths" , "hindi" , "english" , "computer Science"];

// let book = new Array("Maths" , "hindi" , "english" , "computer Science");

// console.log(book[0]);

// book[1] = "English";

// console.log(book);


// 3:- operations of an array


// let book = ["Maths" , "Physics" , "Bio" , "Chemistry"];

// book.push("Hindi");
// book.unshift("Hindi");
// book.pop();
// book.shift();
// book.splice(2,1);

// console.log(book);

// let position = book.indexOf("Bio");
// console.log(position);

// let book = "Maths";
// console.log(Array.isArray(book));

//split keyword:-

// let text = "This is a random text";

// let wordarray = text.split(' ');

// console.log(wordarray);


// add multidiemensional array:-

// let Book = ["Maths" , "Physics" , "Bio" , "Chemistry"];

// let Book2 = ["English","hindi"];

// let Book3 = ["Bengali","urdu"];

// let NewBook = Book.concat(Book2,Book3);

// console.log(NewBook);


// // 2,3-D array

// let Book = ["Maths" , "Physics" , "Bio" , "Chemistry"];

// let Bookwithpages = [
//     ["Maths",["300","500"]],
//     ["physics","400"],
//     ["Chemistry","500"]
// ];

// let fetch = Bookwithpages[0][1][1];

// console.log(fetch);

// // arrays with for loop 

// let book = ["Maths" , "Physics" , "Bio" , "Chemistry"];

// let booklength = book.length;

// for(let i=0;i<booklength;i++)
// {
//     console.log(`Element ${i} is ${book[i]} \n`);
// }

// // iterate function access one by one element;

let book = ["Maths" , "Physics" , "Bio" , "Chemistry"];

book.forEach(myfu);

function myfu(value)
{
    console.log(value);
}
