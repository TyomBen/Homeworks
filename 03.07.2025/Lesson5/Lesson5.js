function createAccount (accountHolder, accountNumber, balance = 0) {
    return {
        //properties
        balance,
        accountHolder,
        accountNumber,
        accounts : [],
       
        deposit : function (amount) {
            if((amount <= 0)) {
                throw new Error("Deposit amount must be greater than zero.");
            }
            this.balance += amount;
        },
        withdraw : function (amount) {
            if(amount > this.balance) {
                throw new Error("Insufficient funds or invalid withdrawal amount.");
            }
            this.balance -= amount;
        },
        getBalance : function () {
            return this.balance;
        },
        addAccount : function (account) {
            this.accounts.push(account);
            return this.accounts;
        },
        findAccount : function (accNum) {
            let found_acc = "There are not found person by your accountholder";
            this.accounts.forEach(({accountNumber, accountHolder}) => {
                if(accountNumber === accNum){
                    found_acc = accountHolder;
                }
            })
           return found_acc;
        },
        getTotalBalance : function () {
            let sum = 0;
            this.accounts.forEach(({balance}) => {
                sum += balance;
            })
            return sum;
        }
    }      
}
//You need to write object inside of argument of the function like account2.addAccount({accountHolder : 'Some', accountNumber : '1234', balance : 20050})

class CreateAccount {
    #balance = 0;
    #accountHolder = null;
    #accountNumber = null;
    constructor (balance, accountHolder, accountNumber){
        this.#balance = balance;
        this.#accountHolder = accountHolder;
        this.#accountNumber = accountNumber;
    }
    deposit (deposit) {
        if(deposit > 0) {
            return this.#balance += deposit;
        }
        return 'There is something else, please try later';
    }
    withdraw (amount) {
        if(amount > 0 && amount < this.#balance) {
            return this.#balance -= amount;
        }
        return 'There is something else, please try later'
    }
    getBalance () {
        return this.#balance;
    }
    getAllData () {
        return {
            balance : this.#balance,
            accountHolder : this.#accountHolder,
            accountNumber : this.#accountNumber
        }
    }
}

//You need to write object inside of argument of the function like account2.addAccount({accountHolder : 'Some', accountNumber : '1234', balance : 20050})

class Bank {
    #accounts = [];

    addAccount(account) {
        this.#accounts.push(account);
        return this.#accounts;
    }
    findAccount(acc_num) {
        const res = [];
        this.#accounts.forEach(({accountNumber, accountHolder}) => {
            if(acc_num.includes(accountNumber)) {
                res.push(accountNumber)
            }
        })
        return res;
    }
    getTotalBalance() {
        const res = this.#accounts.reduce((acc, {balance}) => {
            return acc + balance;
        }, 0)
        return res;
    }
}

//You need to write object inside of argument of the function like account2.addAccount({accountHolder : 'Some', accountNumber : '1234', balance : 20050})