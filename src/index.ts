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


interface Product1{
    name: string,
    age: number,
    location: string
}
type getDataType = (product:Product) => void

const product:Product1 = {
    name: "atharva",
    age: 22,
    location: "Bengaluru"
}

// Never Type - -read this one time

const errorHandler = ():never => {
    throw new Error(); 
}
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
   public readonly id:string;

    constructor(
      private height: number,
      public weight: number,
    ){
    this.id = String(Math.random()*100);
    }

 get heightInstance():number {
    return this.height;
 }

 set changeHeight(val:number) {
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
const player = new Player(171,80);
player.changeHeight = 180;
// ------------------------------------------------------------------------------
// Interfaces with classes
 
interface ProductType{
name: string,
price: number,
stock: number,
offer?:string
}

interface GiveId{
getId: () => string
}
class Product implements ProductType,GiveId {
  private id:string = String(Math.random()*1000);

  constructor(
    public name: string,
    public price: number,
    public stock: number
  ){}
  getId = () => this.id;
}

const products = new Product("Iphone",90000,120);


console.log(products.getId());
// ---------------------------------------------------------------------------------
// Type assertion

const btn = <HTMLElement>document.getElementById('click');
// const btn = document.getElementById('click')!
// const btn = document.getElementById('click') as HTMLElement;


const img = document.getElementById('myimg') as HTMLImageElement;

// img.src

const form = document.getElementById('myform') as HTMLFormElement;

const submit = document.querySelector('form > input') as HTMLInputElement;

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(submit.value);
    
}