// !for loop

// for(let i=0;i<10;i++){
//     console.log(i);
//     if (i==6){
//         console.log("hlo");
//     }
// }


//!while loop

// let index = 0;
// while (index <= 10) {
//     console.log(`value of ${index}`);
//     index++;
// }
 

let myarray = ["batman","superman","ironmam"];
let arr = 0;
while (arr < myarray.length) {
    console.log(`${myarray[arr]} is here`);
    arr++;
     
}

//!do-while loop

let score = 1;

do {
    console.log(`score is ${score}`);
    score++;
        
} while (score <=10);

// console.log(score);   11


//!--------for-each loop----------

const coding = ['js','ruby','java','c++','python']

coding.forEach(function (val){
    console.log(val);
    
})

// using arrow function
coding.forEach((value,index)=>{
    console.log(`${value} is used in ${index+1} languages`);

})

//---for each with function


function print(val){
    console.log(val);
}

coding.forEach(print);


//! special loop for array

const array = [1,2,3,4,5,6]

for (const i of array) {

    console.log(i);
        
}

// const greeting = "Hello"

// for (const i of greeting) {
//     console.log(i);   
// }

//!------------maps--------------

const map = new Map();

map.set("name","siddharth");
map.set("age",19);
map.set("location","chandigarh");

// console.log(map);
for (const [key ,value] of map) {

    console.log(key, ':-' , value);
    
}


//! object print in  itteration 

const obj = {
    name:"Tiwari",
    age:29,
    location:"Delhi"

}
//use object.entries() method to print in key:value
for (const [key ,value] of Object.entries(obj)) {

    // console.log(key, ':-' , value);

}


// itteration in array

const color = ['red','black','white','pink'];
 
//for-in loop
for (const i in color) {
    console.log(i);
    // 0 1 2 3
    console.log(color[i]);
    //red black white pink

}

//for-of loop
for (const i of color) {
    console.log(i);
    //red black white pink
}

//!----loop in object of object


const obj2 = [

{
    name:"siddharth",
    age:19,
    location:"chandigarh"

},

{
    name:"vivek",
    age: 19,
    location:"delhi"

},

{
    name:"rohit",
    age:19,
    location:"kolkata"

}
]



obj2.forEach( (item) => {

    console.log(item.age);

})
