console.log ('task D');
const moment = require("moment");

function tellMeTime() {
    console.log(`Operation  is  ${moment().format("DD MM YYYY HH:mm")} `)};


class Shop {
  constructor (non,cola,lagmon){
    this.non=non,
    this.cola=cola,
    this.lagmon=lagmon;
 }

qoldiq () {console.log(`Hozirda vaqtda ${this.non}ta non, ${this.cola}ta cola, ${this.lagmon}ta lagmon bor`), tellMeTime(); }


 qoshish (non,cola,lagmon) {
  this.non+=non;
  this.cola+=cola;
  this.lagmon+=lagmon;
  console.log (`Right now you have ${this.non}ta non,${this.cola} ta cola,${this.lagmon}ta lagmon available`),
tellMeTime(); 
}
sell (non,cola,lagmon) {
  this.non-=non;
  this.cola-=cola;
  this.lagmon-=lagmon;
  console.log (`Right now you have ${this.non}ta non,${this.cola} ta cola,${this.lagmon}ta lagmon available`),
tellMeTime(); 
}

}
 
const shop = new Shop (3,3,3);

console.log ('=============================Store========================')
shop.qoldiq();

console.log ('=====================after income ========================')
shop.qoshish(1,1,1);
;



console.log('============================After Selling==============================')
shop.sell(2,2,2); 




// qoldiq () {console.log(`Hozirda vaqtda ${this.non}ta non, ${this.cola}ta cola, ${this.lagmon}ta lagmon bor`)  }








// task c 
// function checkSimilarity(str1, str2) {
//     if (str1.length !== str2.length) return false;
  
//     if (str1 === str2) return true;
  
//     if (str1.split("").every((char) => str2.includes(char))) {
//       return true;
//     }
//     if (str2.split("").every((char) => str1.includes(char))) {
//       return true;
//     }
//     return false;
//   }
  
//   console.log(checkSimilarity("laepp", "apple"));
//   console.log(checkSimilarity("nodejs", "jsnode"));
//   console.log(checkSimilarity("nojsde", "jsnode"));
//   console.log(checkSimilarity("nodejs", "jsnodee"));
//   console.log(checkSimilarity("nodejs", "hellojs"));