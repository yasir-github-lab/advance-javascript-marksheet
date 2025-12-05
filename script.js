// Create variables for each subject's marks (out of 100)
const totalNum    = 500;
const maths       = 85;
const english     = 78;
const physics     = 92;
const chemistry   = 74;
const compScience = 88;

// Obtain Marks
const obtainMarks = maths + english + physics + chemistry + compScience;

// Calculate Percentage
const percentage = (obtainMarks / 500 ) * 100;

// Calculate Grade
let grade = 
percentage >= 90 && percentage <= 100
? "A+"
:percentage >= 80 && percentage <= 89
? "A"
:percentage >= 70 && percentage <= 79
? "B"
:percentage >= 60 && percentage <= 69
? "C"
:percentage >= 50 && percentage <= 59
? "D"
: "F";

// As Per Sir Output
document.write(`<div class="flex justify-center gap-1 mt-4 mb-4">Your Percentage is <strong>${percentage.toFixed(2)}%</strong> and your grade is <strong>${grade}</strong></div>`);

// Output Percentage
document.querySelector('.percentage').textContent = `${percentage.toFixed(2)}%`;

// Output Grade
document.querySelector('.grade').textContent = grade;

console.log(percentage);