//--- node js modullarining 3 xil package bor /// 1) Core Pack 2) External P 3) File P
/// Core pack ni install qilishimiz shartmas ozi ornatilgan boladi faqatgina chaqirib olsak boldi


setTimeout (function () {
    console.log ('Loading..')
}, 5000);

// let number = 0;
// setInterval (function () {
//     console.log ('Hisob',number)  
//     number++;
// }, 1000);

const fs = require('fs')
const data =fs.readFileSync('./input.txt','utf8');
console.log(data);


fs.writeFileSync('./input.txt',`${data} \n\t\t by Makhmud`);
const new_data =fs.readFileSync('./input.txt','utf8');
console.log(new_data);




// Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin.

// Masalan: getDigits("ag1aw5g6") return qilsin 3

function getDigits (str) { 
    let arr= str.split ("");
    let quantity =0;
    arr.forEach (letter => {
        if (!isNaN(letter)) {
            quantity +=1;
        } 
        
    });
    return quantity;

 }


 console.log(getDigits("ag1aw5g6"));





