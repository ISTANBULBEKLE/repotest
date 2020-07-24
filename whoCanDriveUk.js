/*
let birthYears = [1992, 2003, 1984, 1989, 2010, 1979, 2016, 1883];

function checkYear(year) {
    return 2020 - year >= 17;
}

let canBeDrivers = birthYears.filter(checkYear);
console.log(`These are the birth years of people who can drive: ${canBeDrivers}`);

*/

let bodyGroup = ["Tom", "Osman", "Nouri", "Ekip"];

function findTheName(name) {
    if (name === "Jazz") {
        return "Found me!";
    } else {
        return "Haven't found me!";
    }
}
let findMe = bodyGroup.find(findTheName);
console.log(findMe);