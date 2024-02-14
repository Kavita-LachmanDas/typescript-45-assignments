//Cars: Write a function that stores 
//information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an 
//arbitrary number of keyword arguments. Call the function with the required
// information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.


function carInfo(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    const car: {[key: string]: any} = {
        manufacturer,
        modelName
    };

    // Adding other name-value pairs provided as arguments
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional name-value pairs
const carDetails = carInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);

// Print the Object that's returned
console.log(carDetails);
