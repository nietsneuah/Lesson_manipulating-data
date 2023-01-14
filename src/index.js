import { companiesData } from "./companies-data";

// before and after are divs in the index.html file
const before = document.getElementById("before");
// TODO: manipulate the data array and store it in a new variable
// const manipulatedData = [companiesData[0]];

// pop the last element from the array
// const manipulatedData = companiesData.pop();
// shift the first element from the array
// const manipulatedData = companiesData.shift();

//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
// console log companiesData Length
console.log(companiesData.length);