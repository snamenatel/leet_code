/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function(big, medium, small) {
    this.limit = {
        1: big,
        2: medium,
        3: small,
    }
    this.occupied = {
        1: 0,
        2: 0,
        3: 0,
    }
};


ParkingSystem.prototype.addCar = function(carType) {
    if(this.occupied[carType] + 1 <= this.limit[carType]) {
        this.occupied[carType]++;
        return true;
    }
    return false;
};
/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */