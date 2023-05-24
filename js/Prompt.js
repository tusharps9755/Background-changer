

// alert('welcome !');

// let age = prompt('Enter your age! ', 20);

// if(age != null)
// {
//     document.write(`Your Age is ${age}`);
// }
// else
// {
//     document.write('Age field was blank');
// }

let response = confirm('Are you sure you want to Delete?');

if(response)
{
    document.write("Deleted");
}
else{

    document.write("Not Deleted");

}