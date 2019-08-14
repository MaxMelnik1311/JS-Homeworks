class Account {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.name}, Email: ${this.email}`);
  }
}

const account = new Account('Mangozedog', 'mango@dog.woof');

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const newUser = new Account('Wildcat', 'mymailisyourmail.com');
newUser.getInfo();
