// Function

// function declaration

function greet(){
    console.log("hello");
}

greet()
// function parameter

function sum(num1,num2){
    console.log(num1+num1);

}

sum(9)//output:- 18    //function call


// const result = sum(39,78)
// console.log(result)// undefined

// function return type

function summ(num1,num2){    
    return num1+num2

}

const result = summ(39,78)
console.log("Result:-"+ result)//117


//function with condition

function greeting(u_name){

    if(!u_name)//(u_name === undefined)
    {
     console.log("please enter user name");
     return
       
    }
    return ` Hello  ${u_name}`
}


console.log(greeting("Siddharth"))//hello Siddharth 
console.log(greeting())// please enter user name


//==shopping cart
// ()...)=> rest operator , spreed operator
function addtocart(...num1){
    return num1
}

console.log(addtocart(200,500,300,700));//[ 200, 500, 300, 700 ]


// object passing in function
/*
const product={
        product_name:"books",
        product_price:"$200"

}*/

function  handleproduct(product){
    console.log(`product name is ${product.product_name} and price is ${product.product_price}`);
}

// handleproduct(product);
handleproduct({product_name:"books",product_price:"$200"});//second method

