/* exported Bank */
function Bank() {
  var newObject = {};
  newObject.nextAccountNumber = 1;
  this.nextAccountNumber = newObject.nextAccountNumber;
  newObject.accounts = [];
  this.accounts = newObject.accounts;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance) === true) {
    var account = new Account(this.nextAccountNumber, holder);
    account.balance = account.deposit(balance);
    account.balance = account.getBalance();
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  } return null;

};

Bank.prototype.getTotalAssets = function () {

  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    this.accounts[i].balance = this.accounts[i].getBalance();
    total += this.accounts[i].balance;
  }
  return total;
};
