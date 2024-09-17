
const user = {
    username: "Siddharth",
    price:800,
    welcomeMessange: function (){

        console.log(  `welcome ${this.username}`);
        console.log(this);//return current context
        
    }
}
//! (this)==> refer to current context 
// user.welcomeMessange()
// user.username = "vinod"
// user.welcomeMessange()

console.log(this)//{}

//+++++++++++++++++++++++++++++++++++++++++++++++

// const user2 = () =>{
//     let username ="sidhu";
//     console.log(this.username);
//     console.log(this);
// }

// user2()


//implicite return
const addtwo = (num1,num2) =>{
    return num1+num2
}

console.log(addtwo(10,20));

//explicite return
const add = (num1,num2) => num1+num2
console.log(add(10,20));

//return object  ({key:value})
const obj = (num1,num2) => ({name:"siddharth",age:21})
console.log(obj());