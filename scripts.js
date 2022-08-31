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
avgString = sumString / (names.length -1)
console.log(avgString);

//  b.	Use a loop to iterate through the array again and concatenate all the names together, separated by 
//          spaces, and print the result to the console.

let strConcat = names[0];
for (let i = 1; i < names.length; i++) {
    strConcat = strConcat + ' ' + names[i]; 
}
console.log(strConcat);

