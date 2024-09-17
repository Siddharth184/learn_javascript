const netflix = new Object();

netflix.name = "netflix";
netflix.country = "USA";
netflix.actors = ["Siddharth","Rohan","Raj"];

console.log(netflix);

//object of object

const netflix_user ={
    regular_customer:{
        name:"Siddharth",
        age : 19,
        location: "chandigarh", 
        email: "Siddxyz@mail.com",
        lastLoginDays : ["monday","wednesday"]
    },

    special_customer:{

        name:"Vivek",
        age : 19,
        location: "Delhi", 
        email: "SiddABC@mail.com",
        lastLoginDays : ["monday","wednesday"]
    }

}

console.log(netflix_user.regular_customer.email)

let obj1={
    1:"w",
    2:"x",
    3:"y",
    4:"z"
}
let obj2={
    5:"A",
    6:"B",
    7:"C",
    8:"D"
}

//concat two object
// console.log(Object.assign({}, obj1,obj2))
/*{
    '1': 'w',
    '2': 'x',
    '3': 'y',
    '4': 'z',
    '5': 'A',
    '6': 'B',
    '7': 'C',
    '8': 'D'
  }
    */

let obj3 = {...obj1,...obj2}  ;
console.log(obj3)


//=======Array of object=
//Data fatch from database in array

const arr = [
    {
        name:"Siddharth",
        age : 19,
        location: "chandigarh", 
        email: "Siddxyz@mail.com"
    },
    {
        name:"Vivek",
        age : 19,
        location: "Delhi", 
        email: "SiddABC@mail.com"
    },
    {
        name:"rahul",
        age : 18,
        location: "lucknow", 
        email: "SiddABC@mail.com"
    }
]
console.log(arr);




console.log(Object.keys(obj2));//[ '5', '6', '7', '8' ]
console.log(Object.values(obj2));//[ 'A', 'B', 'C', 'D' ]
console.log(Object.entries(obj2));//[ [ '5', 'A' ], [ '6',' B' ], [ '7', 'C' ], [ '8', 'D' ]

console.log(netflix.hasOwnProperty('actors'));//True


