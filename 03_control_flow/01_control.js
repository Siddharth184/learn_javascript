//CONTROL FLOW

// 1. if    
// 2. switch
// 3. for
// 4. while
// 5. do while
// 6. for in
// 7. for of
// 8. break
// 9. continue
// 10. return
// 11. throw
// 12. try catch


// if(true){
//     console.log("hello1");
// }

// if(false){
//     console.log("hello");//! this line can't excute
// }

const score =300;
if(score > 200){
    var power = "ironman"//! Always use let
    // console.log(`i have ${power} power`);
}

// console.log(`i have ${power} power`);



const balance = 1000
//! implisite scope 
// if(balance>500) console.log("excute"),console.log("checked");


if(balance<500){
    console.log("balance is less 500");
    
}
else if (balance<750){
    console.log("balance is less 750");
}
else if (balance==1000){
    console.log("balance is 1000");
}

const userLoggedIn= true
const  user= false

if (userLoggedIn && user){
    console.log("welcome user");
}
if (userLoggedIn || user){
    console.log("welcome user");
}

//switch

const day ="sunday";

switch(day){
    case "sunday":
        console.log("today is sunday");
        break;
    case "monday":
        console.log("today is monday");
        break;
    case "tuesday":
        console.log("today is tuesday");
        break;
    default:
        console.log("no day");
}

const days = 3

switch(days){
    case 1:
        console.log("today is sunday");
        break;
    case 2:
        console.log("today is monday");
        break;
    case 3:
        console.log("today is tuesday");
        break;
    default:
        console.log("no day");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++

//falsy and truthy

const userEmail=[]

if (userEmail){
    console.log("welcome user");
}
else{
    console.log("please login");
}

// falsy value => false , 0 ,-0 , BigInt 0n , null , undefined , NaN

// truthy value => "0" , "false" , " " , [] , {} , function() {}


if (userEmail.length === 0){
    console.log("Array is  empty");
}

const empty_obj= {}

if (Object.keys(empty_obj).length === 0){
    console.log("object is empty");
}


// Nullish coalescing operator (??): null undefined

let val1 = 5 ?? 20
let val2 = null ?? 20
let val3 = undefined ?? 20
let val4 = undefined ?? null


// console.log(val1)//5
// console.log(val2)//20
// console.log(val3)//20
// console.log(val4)//null


//terniary operator
// condition ? true : false 

const val = 10
console.log(val>10 ? "true":"false")


