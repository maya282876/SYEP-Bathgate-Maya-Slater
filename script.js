// console.log("HELLO WORLD!");

// let myString = "a2b3c";
// console.log(myString);

// let myNumvar = 123;
// console.log(typeof myNumvar);

// console.loh(10 + " eggs");
// console.log(10 + 7 + " eggs");
// console.log("eggs" + 10 + 7);

// console.log (8!=="2");


// console.log(7>3)&&(14=14);

// //One condition must be true 
// console.log(4>3)||(10>12;)

// //if the statement is logical or not 
// console.log(!9<3);


// function introduction(name,age){
//   console.log("Hii, my name is" + name + " and i am" + age + " years old.")
// }

// introduction("Mayaa", 14)


const hour = new Date(). getHours();
let greeting = "";

if (hour<12){
    greeting = "Goodmorning";
}else if (hour < 18){
    greeting = "Good afternoon";
}else {
  greeting = "Good evening";
}

document.getElementById("greeting").innerText = greeting;



