//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages=[3, 9, 23, 64, 2, 8, 28, 93];

// a.	Programmatically subtract the value of the first element in the array 
//         from the value in the last element of the array (do not use numbers to reference the last element, 
//         find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let arraySize  = ages.length - 1;
let result = ages[arraySize] - ages[0];
console.log(result);

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of 
//          different lengths).
ages.push(35);
arraySize = ages.length - 1;
result = ages[arraySize] - ages[0];
console.log(result);


//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sum = avg = 0;
for (let i =0;  i< ages.length; i++) {
    sum = sum +ages[i];  
}
avg = sum / arraySize ;
console.log(avg);
// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, 
//          ‘Buck’, ‘Bob’.

let names  = ["Sam","Tommy", "Tim", "Sally","Buck", "Bob"];
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the
//          result to the console.
let namesString = sumString = avgString = 0;
for (let i = 0; i < names.length; i++) {
    namesString = names[i].length;
    sumString = sumString + namesString;
}
avgString = sumString / (names.length)
console.log(avgString);

//  b.	Use a loop to iterate through the array again and concatenate all the names together, separated by 
//          spaces, and print the result to the console.

let strConcat = names[0];
for (let i = 1; i < names.length; i++) {
    strConcat = strConcat + ' ' + names[i]; 
}
console.log(strConcat);

// 3.	How do you access the last element of any array?
//The last element of the array is always the array length -1. For example in the names array the last element of the array is: 
let lastElement = lastIndex = 0;
lastIndex = names.length - 1;
console.log(lastIndex);
lastElement = names[lastIndex];
console.log(lastElement);

// 4.	How do you access the first element of any array?
//The first element of the array is always the array[0]. For example in the names array the first element of the array is: 
let firstElement = names[0];
console.log(firstElement);

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
for (let i = 1; i < names.length; i++) {
    let strCount = names[i].length;
    console.log(strCount);
    nameLengths.push(strCount);
}
console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sumNameLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumNameLength = sumNameLength + nameLengths[i];
}
console.log(sumNameLength);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function printWord (word,n){
        const myWord=word;
        console.log(myWord.repeat(n));
}
printWord("hello" , 3);   

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function printFullName(firstName,lastName){
    console.log(firstName+ " "+ lastName);
}

printFullName("Mesay","Beyene");

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function checkArraySum (arr){
    let sumArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArray = sumArray + arr[i];
    }  
    if (sumArray > 100) {
        return true;
    }else{
        return false;
    }
}
let arr = [10,7,15,22,17]
console.log(checkArraySum(arr));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calcAvg (arr){
    let sumArray2 =  avgArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArray2 = sumArray2 + arr[i];
    }  
    avgArr = sumArray2 / (arr.length);
    console.log(avgArr);
}

let newArr = [10,7,15,22,17]
calcAvg(newArr);

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareTwoAvg (arrOne,arrTwo){
    let sumOne = sumTwo = avgOne =  avgTwo = 0;
    for (let i = 0; i < arrOne.length; i++) {
        sumOne = sumOne + arrOne[i];
    }  
    for (let i = 0; i < arrTwo.length; i++) {
        sumTwo = sumTwo + arrTwo[i];
    }  
    avgOne = sumOne / (arrOne.length);
    avgTwo = sumTwo / (arrTwo.length);
    
    if (avgOne > avgTwo){
        return true;
    }
    else{
        return false;
    }
}

 let arr1 = [10,7,15,22,17];
 let arr2 = [15,23,12,18,9];
console.log( compareTwoAvg(arr1,arr2));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside , moneyInPocket){
 if(isHotOutside === true){
    if(moneyInPocket > 10.50){
        return true;
    }
    else{
        return false;
    }
 }
}

console.log(willBuyDrink(true,11));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// The following function is used to order coffee if is morning break and never had ond before.
function orderCoffee (neverHadOneBefore, morningBreak){
    if (neverHadOneBefore === true){
        if(morningBreak === true){
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(orderCoffee(true,true));