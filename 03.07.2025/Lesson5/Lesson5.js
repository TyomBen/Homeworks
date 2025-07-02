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

