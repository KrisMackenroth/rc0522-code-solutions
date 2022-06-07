/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    var newObject = new Transaction();
    newObject.type = 'deposit';
    newObject.amount = amount;
    this.transactions.push(newObject);
    return true;
  } else return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    var newObject = new Transaction();
    newObject.type = 'withdrawal';
    newObject.amount = amount;
    this.transactions.push(newObject);
    return true;
  } else return false;
};

Account.prototype.getBalance = function () {
  var total = 0;
  var sum = 0;
  var balance;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      total += this.transactions[i].amount;
    } else { sum += this.transactions[i].amount; }

  }
  balance = total - sum;
  return balance;
};
