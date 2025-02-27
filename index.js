// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");
// console.clear()
// console.assert()

// 3. JavaScript Variables
// What are Variables? - Containers to store data values

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);
// var str1 = "This is a string";
// var str2 = 'This is also a string';
// console.log(str1+str2);
// var num1 = 455;
// var num2 = 56.76;

// 4. Data types in JavaScript
// Numbers
// var num1 = 455;
// var num2 = 56.76;

// String
// var str1 = "This is a string";
// var str2 = 'This is also a string';
// console.log(str1+str2);

// Objects
/*var marks = {
    Ankush: 34,
    tiwari: 78,
    bro: 99.977
}
console.log(marks);
*/

// Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

// ARRAY  
// var arr = [1, 2, "bablu", 4, 5]
// console.log(arr)
// console.log(arr[1])


// OBJECTS 
// var marks = {
//     Ankush: 34,
//     tiwari: 78,
//     bro: 99.977
// }
// console.log(marks);


// 5. Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
// var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);


// 6. Function in JavaScript
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }
// // DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// 7. Conditionals in JavaScript
var age = 41;
// Single if statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }

// // if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }
/*
age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// 8. conditional statments: break and continue
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }


// 9. LOOPS IN JS 
// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;

let j = 0;
// while-loop
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do-while loop 
// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// 10. ARRAY METHODS in javascript >>
// let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Ankush")
// myArr.shift()
// const newLen = myArr.unshift("Ankush")
// console.log(newLen);
// console.log(myArr);

// 11. String Methods in JavaScript >>
let myLovelyString = "Ankush is a good boy good good TIWARI";
console.log(myLovelyString)
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.indexOf("TIWARI"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("Ankush", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

// 12. DATES IN JS >>
// let myDate = new Date();
// console.log(myDate.getTime()); // GIVES CURRENT TIME IN SECONDS
// console.log(myDate.getFullYear());
// console.log(myDate.getDay()); // GIVES NUMBER AS PER PROPER DAY
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
 
// 13. DOM Manipulation
// A>
let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "skyBlue";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); //---> removes an element
 
// B>
// Selecting using Query >> important
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }


// 14. EVENTS IN JAVASCRIPT >>
// function Clicked(){
//     console.log("Ye nahhi dabana thaa !!")
//     console.alert("Ye nahi dabana thaa!!")
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// // Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ = (a,b)=>{    //arroe function
    // return a+b;
// }

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}


// 15. SetTimeout and setinterval
clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2500);
// use
clearInterval(clr)
// clearTimeout(clr) //to cancel setInterval/setTimeout


// 16. JavaScript localStorage
// localStorage.setItem('name', 'Ankush') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// 17. JSON - "JAVASCRIPT OBJECT NOTATION"
obj = {name: "Ankush", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"Ankush","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 25;
console.log(`this is my ${a}`)
