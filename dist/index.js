"use strict";
// Arrays
// arrray method 1 declaration
const b = ["sad", "aiyo"];
// array generic like type declaration
const arr = [90, 88];
// declaring array with string or number
const valarr = [10, 12, 33, "hi"];
;
const Obj = {
    name: "Atharv",
    age: 22,
    gender: true,
};
const Obj2 = {
    name: "Saket",
    age: 23
};
const obj3 = {
    name: "mayank",
    age: 23,
    gender: true,
    location: "varansi",
    funcType: (k, l) => {
        console.log(k + l);
    },
};
// optional parameter 
const func = (m, l, n) => {
    if (typeof n === "undefined")
        return m * l;
    return m * l * n;
};
// default parameter 
const func1 = (m, l, n = 20) => {
    return m * l * n;
};
const fun3 = (...m) => {
    return m;
};
const product = {
    name: "atharva",
    age: 22,
    location: "Bengaluru"
};
console.log(product);
// Never Type - -read this one time
const errorHandler = () => {
    throw new Error();
};
