const readline = require("readline");

class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`$${amount} deposited successfully.`);
    } else {
      console.log("Invalid deposit amount.");
    }
    this.displayAccountInfo();
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`$${amount} withdrawn successfully.`);
    } else {
      console.log("Insufficient funds.");
    }
    this.displayAccountInfo();
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`\nAccount Information:`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}\n`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("Enter account number: ", (accountNumber) => {
    rl.question("Enter owner name: ", (ownerName) => {
      rl.question("Enter initial balance: ", (balance) => {
        let account = new BankAccount(
          accountNumber,
          ownerName,
          parseFloat(balance)
        );
        account.displayAccountInfo();
        accountMenu(account);
      });
    });
  });
}

function accountMenu(account) {
  console.log("Account Menu:");
  console.log("1. Deposit");
  console.log("2. Withdraw");
  console.log("3. Display Account Info");
  console.log("4. Exit");

  rl.question("Choose an action: ", (option) => {
    switch (option) {
      case "1":
        rl.question("Enter deposit amount: ", (amount) => {
          account.deposit(parseFloat(amount));
          accountMenu(account);
        });
        break;
      case "2":
        rl.question("Enter withdrawal amount: ", (amount) => {
          account.withdraw(parseFloat(amount));
          accountMenu(account);
        });
        break;
      case "3":
        account.displayAccountInfo();
        accountMenu(account);
        break;
      case "4":
        console.log("Exiting account menu.");
        rl.close();
        break;
      default:
        console.log("Invalid option.");
        accountMenu(account);
    }
  });
}

main();
