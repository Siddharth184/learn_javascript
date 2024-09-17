/*/ Array

//1.JavaScript arrays are resizable 
//2.JavaScript arrays can contain a mix of different data types

const myarr = [0,1,2,3,4,5,6,7,8]

const myarr2 = new Array(1,2,3,4,5)

// console.log(myarr);
// console.log(myarr2);

//Array Methods:-

myarr2.push(6);
myarr2.unshift(0);//[ 0, 1, 2, 3, 4, 5, 6]
myarr2.shift(0);//[ 1, 2, 3, 4, 5, 6]
// console.log(myarr2);


// console.log(myarr.includes(9))//false
// console.log(myarr.includes(2))//true
// console.log(myarr.indexOf(2))//1

//slice , splice

console.log(" A",myarr);
const myn1 = myarr.slice(1,3)//start from 1 to n-1  
console.log(myn1);//[ 1, 2 ]


const myn2 = myarr.splice(1,3);//change in actual array
console.log(myn2);//[ 1, 2, 3 ]
console.log("b",myarr);//b [ 0, 4, 5, 6, 7, 8 ]
*/

//==============Concat================


const marval_heros = ["ironman","thor","hulk"]
const DC_heros = ["superman","batman","flash"]

// marval_heros.push(DC_heros);
// console.log(marval_heros);//[ 'ironman', 'thor', 'hulk', [ 'superman', 'batman', 'flash' ] ]

// concat

const newarr = marval_heros.concat(DC_heros);
console.log(newarr);//[ 'ironman', 'thor', 'hulk', 'superman', 'batman', 'flash' ] 

//spread operater
const newarr2 = [ ...marval_heros,...DC_heros] ;
console.log(newarr2);

//flat
const firstarr = [1,2,[3,4,5,6],7,[8,9,[10,11,12,13],14]]
console.log(firstarr.flat(Infinity));//[1,  2, 3,  4,  5,  6,7,  8, 9, 10, 11, 12,13, 14 ]


console.log(Array.isArray("Siddharth"));//false
console.log(Array.from("Siddhath"));//['S', 'i', 'd','d', 'h', 'a','t', 'h']
console.log(Array.from({name:"Siddharth"}));//[]

//================join=====================

console.log(marval_heros.join(" "));
// ironman thor hulk
console.log(marval_heros.join("-"));
// ironman-thor-hulk




