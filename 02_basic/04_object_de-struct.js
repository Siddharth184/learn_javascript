const course={
    coursename:"javascript",
    price:"1500",
    courseduration:"15 hrs"
}

//calling method 

console.log(course.coursename)//old and boring method 

//de-structuring

const {coursename,price,courseduration}=course
console.log(coursename);
console.log(price,courseduration);




//+++++++++++++++=JSON++++++++++++
//JSON is a string of data that is easy to read and write
//JSON is a lightweight data interchange format
//JSON is language independent
//JSON is not a data type

// {
    
//     login : "Siddharth";
//      id : 3688393;
//     node_id : "MDQ6VXNlcjM2ODgzOTM";
//      avatar_url : "https://avatars.githubusercontent.com/u/3688393?v=4"


// }