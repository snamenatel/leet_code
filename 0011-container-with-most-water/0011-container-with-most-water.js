/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length; i++) {
        if(height[i] * height.length < max) {
            continue;
        }
        for(let j = 0; j < height.length; j++) {
            let a = Math.abs(i - j) * Math.min(height[i], height[j]);
            if (a > max) {
                max = a;
            }
        }
    }

    return max
};