// Node Js event loop va callback function
console.log('Jack Ma suggestions');
const list = [
  "be good student",  //0-20 
  "follow right person", //20-30,
  "work on yourself",  //30-40,
  "do things, you are good at", //40-50,
  "invest young generation",  //50-60,
  "rest easy ", //S60
];

function suggestion (a,callback) {
  if (typeof a !=='number') callback ("insert numb", null);
  else if (a<=20) callback (null,list[0]);
  else if (a>20 && a<=30) callback (null,list[1]);
  else if (a>30 && a<=40) callback (null,list[2]);
  else if (a>40 && a<=50) callback (null,list[3]);
  else if (a>50 && a<=60) callback (null,list[4]);
  else {
       setTimeout(function(){
      callback(null,list[5]);
    },5000);
  }

}
console.log('passed here 1')
suggestion (45,(err,data) =>{
  if (err) console.log ('ERROR:', err);
  console.log ('answer:',data);
})
console.log('passed here 2')





// Async


async function maslahat(a) {
  if (typeof a !== "number") throw new Error ("insert number");
  else if (a <=20 ) return list[0];
  else if (a >20 && a<=30) return list [1];
  else if (a >30 && a<=40) return list [2];
  else if (a >40 && a<=50) return list [3];
  else if (a >50 && a<=60) return list [4];
  else {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(list[5]);
      },5000);
    });
  }
}


console.log('passed here async1')
maslahat(61).then((data) =>{console.log('javob:', data)}).catch ((err) => {
  console.log('error:',err)
});

console.log('passed here async1')


console.log('asyn and await------------------------')

async function run () {
  let javob = await maslahat(20);
  console.log (javob);
  javob = await maslahat(31);
  console.log(javob)
  javob = await maslahat(41);
  console.log(javob);
}
run();

























































// console.log ('task D');
// const moment = require("moment");

// function tellMeTime() {
//     console.log(`Operation  is  ${moment().format("DD MM YYYY HH:mm")} `)};


// class Shop {
//   constructor (non,cola,lagmon){
//     this.non=non,
//     this.cola=cola,
//     this.lagmon=lagmon;
//  }

// qoldiq () {console.log(`Hozirda vaqtda ${this.non}ta non, ${this.cola}ta cola, ${this.lagmon}ta lagmon bor`), tellMeTime(); }


//  qoshish (non,cola,lagmon) {
//   this.non+=non;
//   this.cola+=cola;
//   this.lagmon+=lagmon;
//   console.log (`Right now you have ${this.non}ta non,${this.cola} ta cola,${this.lagmon}ta lagmon available`),
// tellMeTime(); 
// }
// sell (non,cola,lagmon) {
//   this.non-=non;
//   this.cola-=cola;
//   this.lagmon-=lagmon;
//   console.log (`Right now you have ${this.non}ta non,${this.cola} ta cola,${this.lagmon}ta lagmon available`),
// tellMeTime(); 
// }

// }
 
// const shop = new Shop (3,3,3);

// console.log ('=============================Store========================')
// shop.qoldiq();

// console.log ('=====================after income ========================')
// shop.qoshish(1,1,1);
// ;



// console.log('============================After Selling==============================')
// shop.sell(2,2,2); 




// // qoldiq () {console.log(`Hozirda vaqtda ${this.non}ta non, ${this.cola}ta cola, ${this.lagmon}ta lagmon bor`)  }








// // task c 
// // function checkSimilarity(str1, str2) {
// //     if (str1.length !== str2.length) return false;
  
// //     if (str1 === str2) return true;
  
// //     if (str1.split("").every((char) => str2.includes(char))) {
// //       return true;
// //     }
// //     if (str2.split("").every((char) => str1.includes(char))) {
// //       return true;
// //     }
// //     return false;
// //   }
  
// //   console.log(checkSimilarity("laepp", "apple"));
// //   console.log(checkSimilarity("nodejs", "jsnode"));
// //   console.log(checkSimilarity("nojsde", "jsnode"));
// //   console.log(checkSimilarity("nodejs", "jsnodee"));
// //   console.log(checkSimilarity("nodejs", "hellojs"));