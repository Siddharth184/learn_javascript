

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)//error
// console.log(b)//error
console.log(c)


///////////////////////////////////////////
/*
//*Scope in Javascript
-Global Scope
-Function Scope-
-Block Scope
lexical Scope- A variable defined outside a functioncan be accessible inside another function defined after the variable Declaration .The opposite is NOT true.

*/
// Function scope
let sum =  67;//! global scope

function calsum(a,b) {
    let sum =  a+ b ;//! Function Scope
    console.log(sum);
    
}
calsum(18,87);

//  Block scope
{
    let a=34;  //!Block scope
    console.log(a);
}

//  lexical scope
function outer(){
    let x=4;
    let y=9;
    function innerfunc(){//!Lexical scope
        console.log(x);
        console.log(y);
    }
  
    innerfunc();

}

