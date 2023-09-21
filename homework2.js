// External Packages

// const moment = require ('moment');
// const time = moment().format();
// console.log (time);

// setInterval(()=> {
//     const time = moment().format();
//     console.log (`now time is: ${time}`);
// }, 5000); 


// Inquirer

const inquirer = require ('inquirer');
inquirer
.prompt([{ type : "input", name: "raqam", message: "raqamni kiriting?"}])
.then((answer)=> {
    console.log ("men kiritgan raqam", answer.raqam);
})
.catch ((err) => console.log (err));


const validator = require ['validator'];
const test = validator.isEmail("foob@.com");
console.log ("test",test);

const {v4:uuidv4}=require("uuid");
const random =uuidv4();
console.log ("random", random);

const chalk = require ('chalk');
const log = console.log;
log(chalk.blue(`My random number is ${random}`));



// File Module ----


const calculate = require ('./hisob');

const natija = calculate.kopaytirish (4,5);
console.log("Natija:" , natija);

const natija1 = calculate.qoshish (4,5);
console.log("Natija:" , natija1);



const Account = require("./account");
Account.tellMeAboutClass();

const myAccount= new Account ("Alex", 230000, 121321412);
myAccount.details();

myAccount.makeDeposit(12000);

//Lamborghini Urus

myAccount.withdraw(500000);


 

