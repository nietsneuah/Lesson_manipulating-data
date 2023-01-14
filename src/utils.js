const filterFunction = (company) => company.fieldData.State === "TX" || company.fieldData.State === "WI";


const mappedFunction = (dog) => ({ state: dog.fieldData.State, name: dog.fieldData.CompanyName, city: dog.fieldData.City });
// const manipulatedData = companiesData.map(mappedFunction);

const updateEachElement = (company) => {
    company.fieldData.CityState = `${company.fieldData.City}, ${company.fieldData.State}`;
}

export { filterFunction, mappedFunction, updateEachElement}