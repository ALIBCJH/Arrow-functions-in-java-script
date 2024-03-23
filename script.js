//ARROW FUNCTION
const add =  (x,y) => { //=> is an example of an arrow  function in action
  return x+y;
}
add(2,3);
console.log(add(2,3));

//Declaring functions using arrow function is much simpler less code syntax
const SUM = x  => ; // This and example of an arrow function in action
// Arrrow function are denoted by the symbol =>
/* One advantage  of using arrow function is that developers really write less code */
//NESTED FUNCTIONS IN JAVA SCRIPT
//Nested functions simply means that one can be able to create a function within another function

function outer(){
  console.log('outer');
  function innner(){
      console.log('inner'); // This is an example of a Nested function
  }
  inner();
}

//FUNCTION SCOPE
/* There are 3 types of function scope */
//A VARIABLE DEFINED INSIDE A FUNCTION CANNOT BE ACCESSED ANYWHERE OUTSIDE THE FUNCTION IN WHICH THEY ARE DECLARED.
//A FUNCTION CAN ACCESS ALL THE VARIABLE INSIDE THE SCOPE IT IS DEFINED

function doSomething(){
  let x = 10;
  const  y = 20;
  var z = 30;
  console.log(x,y,z);
}
doSomething();
console.log(x,y,z); // Throws an error BECAUSE IT IS TRYING TO ACCESS A BLOCK SCOPED VARIABLE

