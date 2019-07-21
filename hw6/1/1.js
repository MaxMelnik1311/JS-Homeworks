class Account {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return this.name;
  }
}

const account = new Account('Mangozedog', 'mango@dog.woof');

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
