//should return a new array containing the first two drivers from the passed-in array:

const returnFirstTwoDrivers = driversArray =>{
    return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = driverArray =>{
        return driverArray.slice(-2)
}

// selectingDrivers  has the `returnFirstTwoDrivers` function to as its first element
// has the `returnLastTwoDrivers` function to as its last element

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

//createFareMultiplier() returns a function
function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}
//create a variable (fareDoubler)assigning function createFareMultiplier

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
    
//function that takes two arguments- array of drivers and returnFirstTwoDrivers function

function selectDifferentDrivers(arrayOfDrivers, returnsSomething){
    return returnsSomething(arrayOfDrivers)
}
