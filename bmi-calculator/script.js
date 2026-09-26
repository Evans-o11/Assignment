let personName = "Evans Emmanuel";
let weightKg = 95;
let heightM = 2;

// Calculate the square of the height and store the result in a new variable called heightSquared.
let heightSquared = heightM * heightM;

// Calculate the BMI and store the result in a new variable called bmi.
let bmi = weightKg /  heightSquared;

// Use the standard BMI categories to determine the person's status.
let isUnderweight = bmi < 18.5 
let isNormalWeight = bmi >= 18.5 && bmi < 25; 
let isOverweight = bmi >= 25


// // Display the results in the console:
// console.log(bmi < 18.5 ? "Underweight" : bmi >= 18.5 && bmi < 25 ? "NormalWeight" : "Overweight")


// Use logical operators to check for a specific health profile.
// The person receives a "High Risk" alert if they are Overweight OR if their weight is over 90 kg.
// Create a new boolean variable called isHighRisk that checks both of these conditions using a logical operator (||).
let isHighRisk = weightKg > 90 || isOverweight;
// console.log(isHighRisk ? "High Risk A" : "")

console.log("BMI RESULT")
console.log("---------------------------");
console.log(personName)
console.log("BMI = " + bmi.toFixed(2));
// console.log(bmi < 18.5 ? "Underweight" : bmi >= 18.5 && bmi < 25 ? "NormalWeight" : "Overweight")
// console.log(isHighRisk ? "High Risk Alert" : "");
console.log("Underweight:", isUnderweight);
console.log("Normal Weight:", isNormalWeight);
console.log("Overweight:", isOverweight);
console.log("High Risk Alert:", isHighRisk);



/*
NOTE TO INSTRUCTOR:

The commented-out lines above (the ternary console.logs for the BMI 
category and the "High Risk Alert" string print) were my own first 
approach to displaying the results. I preferred combining everything 
into fewer nd more readable console.log statements rather than printing 
each boolean separately  I felt it gave a cleaner summary and still 
showed the same correct resut.

I've left the final version matching the exact console.log format 
requested in the instructions (printing each boolean with its label), 
but wanted to note that the commented code was my own preferred way 
of solving it, and it produced the same accurate output.

 The other comments throughout the file (above each section) are 
there so anyone reading my code including graders or teammates  
can follow exactly what each block is doing and why, step by step.
   
*/