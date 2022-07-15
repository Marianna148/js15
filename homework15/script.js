const num1 = {
    x: 10,
    y: 20,
};
const num2 = {
    z: 30,
};
const num3 = {
    x: 10,
};
const num4 = {
    x: 20,
    y: 30,
};

function assignObj(obj1, obj2) {
    const newObj = {};
    for(let key in obj1) {
        newObj[key] = obj1[key]; 
    } 
    for(let key in obj2) {
        newObj[key] = obj2[key];
    } 
    return newObj
};

console.log(assignObj(num1, num2));
console.log(assignObj(num3, num4));
