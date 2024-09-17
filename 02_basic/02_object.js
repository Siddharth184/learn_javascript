/*/object
1. object literals
2. constructor  //singleton
   //object.create
*/


//==========object literal==========
/*(keys:values) */

const mysym = Symbol("mpg*3")

const jsUser={
    name:"Siddharth",
    "full name" :"Siddharth Tiwari",
    [mysym]:mysym,///[mysym]:mysym,
    age : 19,
    location: "chandigarh", 
    email: "Siddxyz@mail.com",
    lastLoginDays : ["monday","wednesday"]

}
// overwriting
jsUser.email="Siddharthxyz@mail.com"

//freeze
Object.freeze(jsUser)
jsUser.email="Siddharthxyz@mail.com"//can't change in object after use freeze


console.log(jsUser.email);//this method is not possible for print "full name"
console.log(jsUser["email"]);
console.log(jsUser.mysym );

// console.log(jsUser);

//function expression

const myfun = function(){
     console.log("hello");
     console.log(`hello, ${this.name}`);
     
}
const myfun2 = function(jsUser){
     
     
}

console.log(jsUser.myfun());