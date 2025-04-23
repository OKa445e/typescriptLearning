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
// Never Type - -read this one time
const errorHandler = () => {
    throw new Error();
};
// -----------------------------------------------------------------------
// classes in Typescript 1:06:10
/*class Player {
 private  height;
    weight;

    constructor(height:number,weight:number) {
        this.height = height;
        this.weight = weight;
    };


    myheight = () => {
      return  this.height;
    }
};
*/
// another short way
class Player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.id = String(Math.random() * 100);
    }
    get heightInstance() {
        return this.height;
    }
    set changeHeight(val) {
        this.height = val;
    }
}
// protected ko sublclass mein access kar sakte hai 
// while private usi class mein karpayenge
// class Player2 extends Player {
//     special: boolean;
//     constructor(height:number,weight:number,power:number,special:boolean){
//         super(height,weight,power);
//         this.special = special;
//     }
//     getSpecial = () => {
//         return this.special;
//     }
// }
const player = new Player(171, 80);
player.changeHeight = 180;
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const products = new Product("Iphone", 90000, 120);
console.log(products.getId());
// ---------------------------------------------------------------------------------
// Type assertion
const btn = document.getElementById('click');
// const btn = document.getElementById('click')!
// const btn = document.getElementById('click') as HTMLElement;
btn.onclick;
const img = document.getElementById('myimg');
img.src;
