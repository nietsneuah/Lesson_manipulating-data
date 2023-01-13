import { companiesData } from "./companies-data";
import {extraRecord} from "./extra-record";
console.log(extraRecord);
const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

//const manipulatedData = Object.values(extraRecord.fieldData);
// extraRecord.fieldData.Country = "USA";
// extraRecord.fieldData.CityState = `${extraRecord.fieldData.City}, ${extraRecord.fieldData.State}`
// delete extraRecord.fieldData.Id;
const manipulatedData = extraRecord.fieldData;
const {City, State, Zip} = extraRecord.fieldData;
console.log("test data", City, State, Zip);

//TODO: add the manipulated data array to the 'after' div.
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);