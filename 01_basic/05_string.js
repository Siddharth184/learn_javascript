const firstName =" Siddharth "
const lastName= new String("Tiwari")// second method to declare string
// console.log(firstName.length);// method to finding length of string
// console.log(`hello my name is ${firstName} ${lastName}`);//concatination new method

// console.log(typeof lastName);//object

// console.log(firstName[4])


//some methods
console.log(firstName.toUpperCase())
// console.log(firstName.charAt(4))
console.log(firstName.substring(0,4))
console.log(lastName.slice(-8,4))// we can give negative value, always working in second method
console.log(firstName.split(" "))
console.log(firstName.trim())
console.log(lastName.replace("T","p"))
console.log(firstName.replaceAll('d',"-"))
console.log(lastName.includes('m'))// check element are present or not