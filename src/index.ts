// Arrays

// arrray method 1 declaration
const b:string[] = ["sad","aiyo"];

// array generic like type declaration
const arr: Array<number> = [90,88];

// declaring array with string or number
const valarr: Array<number | string> = [10,12,33,"hi"]
// -----------------------------------------------------------------------


// OBJECTS

interface obj {
    name: string,
    age: number,
    gender?: boolean
};

const Obj:obj = {
    name: "Atharv",
    age: 22,
    gender: true,
}

const Obj2: obj = {
    name: "Saket",
    age: 23
}

type func = (k:number,l:number) => void;

// extending an object
interface newObj extends obj {
    location: string,
    funcType:func,
}

const obj3: newObj = {
    name: "mayank",
    age: 23,
    gender: true,
    location:"varansi",
    funcType: (k,l) => {
        console.log(k+l)
    },
}
// -----------------------------------------------------------------------

// Functions

type funcVal = (a:number,b:number,c?:number) => number;

// optional parameter 
const func: funcVal = (m,l,n) => {
 if(typeof n === "undefined") return m*l;

    return m*l*n;
}


// default parameter 
const func1: funcVal = (m,l,n=20) => {

    return m*l*n;
}


type funcType = (...m:number[]) => number[];

const fun3: funcType = (...m) => {
    return m;
}

// -----------------------------------------------------------------------------

// function with object


interface Product{
    name: string,
    age: number,
    location: string
}
type getDataType = (product:Product) => void

const product:Product = {
    name: "atharva",
    age: 22,
    location: "Bengaluru"
}

console.log(product);


// Never Type - -read this one time

const errorHandler = ():never => {
    throw new Error();
}
// -----------------------------------------------------------------------

// classes in Typescript