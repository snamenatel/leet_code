/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0
    for(let i = 0; i < salary.length; i++) {
        sum += salary[i];
        if(salary[i] > max) {
            max = salary[i]
        }
        if (salary[i] < min) {
            min = salary[i]
        }
    }
    return (sum - min - max) / (salary.length - 2);
};