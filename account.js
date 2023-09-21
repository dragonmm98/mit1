const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor (name,amount,account_id) {
      this.name =name;
      this.#amount = amount;
      this.#account_id = account_id;
    }

    tellMeBalance () {
        console.log (`Sizning hisobingiz:`, this.#amount); 
        return this.#amount;
    }

    withdraw (money) {
        if (this.#amount > money) {
            this.#amount -=money;
            console.log (`Hisobdan ${money} yechildi va qoldiq ${this.#amount}`);
        } else {  console.log (`not enough money: ${this.#amount}`)};
    }

    makeDeposit (amount) {
        this.#amount += amount;
        console.log (`Hisbingiz toldirildi ${this.#amount}`)
    }
    details () {
        console.log (`Hi Dear ${this.name} your balance is ${this.#amount}`);
    }

    static tellMeAboutClass () {
        console.log ('Bu class accountlarni yasaydi');
    }
    static time (){
        console.log (`Hozirgi vaqt ${moment().format('YY MM DD')}`)
    }
}

module.exports = Account;