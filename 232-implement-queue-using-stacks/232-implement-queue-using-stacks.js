
var MyQueue = function() {
    this.list = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.list[this.list.length] = x;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const result = this.list[0];
    this.list = this.list.slice(1);
    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.list[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.list.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */