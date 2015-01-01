var randomNumber = require('./module1');
var dollarNum = require('./module2');

var converterNum = function () {
    return dollarNum(randomNumber());

};

var accountBalance = function() {
    var balance = "Account balance: \n";
    return balance;
};

exports.converterNum = converterNum;
exports.accountBalance = accountBalance;
