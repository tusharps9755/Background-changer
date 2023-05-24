// var person = {
//     name: "vishwajeet",
//     age: 25,
// }

// var person = new object();

// person.name = "vishwajeet Kumar";
// person.age = 25;

// console.log(person.name);

// // Property getters and setters

var person = {
         name: "vishwajeet",
         age: 25,

        //  getname: function(){
        //      return this.name.toUpperCase();
        //  }

        //  get getname(){
        //      return this.name.toUpperCase();
        //  },

         set setname(n){
            this.name = n.toUpperCase();
         }
    };

    person.setname = "ajit";
    
    // console.log(person.name.toUpperCase());
    console.log(person);
