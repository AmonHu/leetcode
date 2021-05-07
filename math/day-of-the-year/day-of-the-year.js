var isLeapYear = function (year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let year = Number(date.slice(0,4));
    let month = Number(date.slice(5,7));
    let day = Number(date.slice(8));
    let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        months[2] = 29;
    }

    let sum = 0;
    for (let i = 1; i < month; i++) {
        sum += months[i];
    }
    return sum + day;
};

console.log(dayOfYear('2000-03-01'))

