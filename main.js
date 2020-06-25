function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 100 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}
isLeap(1256);


/* function isLeapYear(year) {
    if (year % 400 === 0) return "Leap year.";
    if (year % 100 === 0) return "Not leap year.";
    if (year % 4 === 0) return "Leap year.";
}
*/