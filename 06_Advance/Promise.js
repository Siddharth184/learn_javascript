const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise one");
        
        resolve("promise one resolved");
    }, 2000);
});

PromiseOne.then(function(value){
    console.log(value);
})

const PromiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve("promise two resolved");

        }else{
            reject("promise two rejected");
        }
        
      
    }, 2000);
});

PromiseTwo.then(function(value){    
    console.log(value);
    }).catch(function(error){
        console.log("error");
    })



    // first method to handle promise by then,catch,finally

const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                name:"siddharth",
                age:19});

        }else{
            reject("promise three rejected");
        }
        
      
    }, 2000);
});    

PromiseThree.then((value) => {
    console.log(value);
    return value.name
}).then((value) => {  // this is called chaining method
    console.log(value);
})
.catch((error) => {
    console.log(error);
}).finally(() => console.log("All are good"))


    // second method to handle promise by async await

const PromiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                name:"Shivam",
                password:19});

        }else{
            reject("promise four rejected");
        }
        
      
    }, 2000);
});

async function consumePromiseFour(){
    try{
        const response = await PromiseFour;
        console.log(response);
    }catch(error){
        console.log(error);
    }
    
}

consumePromiseFour();


// Real world example


async function getDatauser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.log("E:",error);

    }

}

getDatauser(); 


// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((response) => { return response.json()})
// .then(data => console.log(data))        
// .catch(error => console.log("E:",error));