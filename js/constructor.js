// var student1 = {
//     firstName = "tushar",
//     lastName = "sharma",
//     age: 25,
//     class: 5
// }

// var student2 = {
//     firstName = "Tushar",
//     lastName = "Kumar",
//     age: 25,
//     class: 3
// }

function Student(first, last, age, cls){

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    
}

var student1 = new Student("Tushar","sharma", 24 , 5);

var student2 = new Student("Shivam","sharma", 22 , 6);



// student1.nationality = "Indian";

console.log(student1);
console.log(student2);