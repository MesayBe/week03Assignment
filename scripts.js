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
avg = sum /arraySize ;
console.log(avg);

