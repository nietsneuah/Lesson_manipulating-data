import { companiesData } from "./companies-data";
import { extraRecord } from "./extra-record";
// before and after are divs in the index.html file
const before = document.getElementById("before");
// TODO: manipulate the data array and store it in a new variable
// const manipulatedData = [companiesData[0]];

// pop the last element from the array
// const manipulatedData = companiesData.pop();
// shift the first element from the array
// const manipulatedData = companiesData.shift();
// push the extraRecord to the end of the array
// const manipulatedData = companiesData.push(extraRecord);
// unshift the extraRecord to the beginning of the array
// const manipulatedData = companiesData.unshift(extraRecord);
// filter the array to only include state of "TX"
// const manipulatedData = companiesData.filter((company) => company.fieldData.State === "TX" || company.fieldData.State === "PA");
// define a function to filter the array to only include state of "TX"
const filterFunction = (company) => company.fieldData.State === "TX" || company.fieldData.State === "PA";

// const mappedFunction = function (dog) {
//   return {
//   name: dog.fieldData.CompanyName ,city:  dog.fieldData.City }
// };
//same as above but with arrow function
const mappedFunction = (dog) => ({ state: dog.fieldData.State, name: dog.fieldData.CompanyName, city: dog.fieldData.City });
// const manipulatedData = companiesData.map(mappedFunction);

const updateEachElement = (company) => {
    company.fieldData.CityState = `${company.fieldData.City}, ${company.fieldData.State}`;
}
// companiesData.forEach(updateEachElement);
// find unique states
// const manipulatedData = companiesData.map((company) => company.fieldData.State).filter((state, index, array) => array.indexOf(state) === index);

// find unique states with Set then sort
const manipulatedData = [...new Set(companiesData.map((company) => company.fieldData.State))].sort();
// const manipulatedData = [...new Set(companiesData.map((company) => company.fieldData.State))].sort();

//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
// console log companiesData Length
console.log(companiesData.length);
// console log manipulatedData Length
console.log(manipulatedData.length);