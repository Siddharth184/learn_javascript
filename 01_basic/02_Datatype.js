"use strict";//treat all js code as newer version
 
//alert("siddharth")// run only in browser


// console.log( typeof "siddharth");//string
// console.log( typeof null);// object
// console.log( typeof undefined);// undefined


const id = Symbol("123")
const idi = Symbol("123")


console.log(id)
console.log(id == idi)
console.log(id === idi)


//Datatypes

//primitive datatype
// Numbers => 2 to power 53
// bigint
// string  => "  "
// boolen => true/false
// null => standalone value
// undefined => 
// symbol => unique


//non-primitive Datatype
// object
//Array
//RegEXP
//function

const hero = ["shaktiman","nagraj","balveer"]

let myobj = {
    name:"siddharth",
    age:20,
}

const myfunction = function(){
    console.log("hello");

}

