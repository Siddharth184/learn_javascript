// Immediately Invoked Function Expression (IIFE)

// Normal function
function greet(){
    console.log("hello");
}
greet();

// IIFE  {() ()}

// 1st way
(function greeting(){
    console.log("hello")
})();

// 2nd way
( () => {console.log("hello")})();
( (name) => {console.log(`hello ${name}`)})("siddharth");
