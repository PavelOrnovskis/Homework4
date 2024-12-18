class BankAccount {
    balance: number

    constructor(balance: number) {
        this.balance = balance
    }

    deposit(amount: number): number {
        return this.balance + amount
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600