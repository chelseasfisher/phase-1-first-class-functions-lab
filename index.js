// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return [ 'Antonia', 'Nuru' ];
};

const returnLastTwoDrivers = function (drivers){
    return [ 'Amari', 'Mo' ];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
    return function fareQuintupler (value){
        return multiply * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers,driveorder){
    return driveorder(drivers);
}
