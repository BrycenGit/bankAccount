function BankAccount (name, account) {
  this.name = name;
  this.account = account;
  this.currentId = 0;
}
BankAccount.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}
BankAccount.prototype.deposit = function(amount){
  this.account += amount;
}
BankAccount.prototype.withdrawl = function(amount){
  this.account -= amount;
}
BankAccount.prototype.Check = function(){
  return this.account;
}
//let allBankAccounts =[];
let newBankaccount = new BankAccount('default', 0); //<= declare outside and add below


function writeNameAndValue(name, value) {
  $('#account-name').text("Welcome " + name + '!');
  $('#balance').val('$' + value.toFixed(2));

}


$(document).ready(function() {
  // $('#account-name').text("Welcome " + newBankaccount.name + '!');
  // $('#balance').val('$' + newBankaccount.Check().toFixed(2));
  writeNameAndValue(newBankaccount.name, newBankaccount.Check());

  $('form#register').submit(function(event) {
    event.preventDefault();
    const inputtedName = $("input#nameInput").val();
    const inputtedinitDep = parseFloat($('input#initdepositinput').val());
    newBankaccount = new BankAccount(inputtedName,inputtedinitDep);
    writeNameAndValue(newBankaccount.name, newBankaccount.Check());
    // $('#account-name').text("Welcome " + newBankaccount.name + '!');
    // $('#balance').val('$' + newBankaccount.Check().toFixed(2));
  });

  $('form#deposit_withdrawl').submit(function(event) {
    event.preventDefault();
    let inputtedDeposit = parseFloat($("input#deposit-input").val());
    let inputtedWithdrawal = parseFloat($("input#withdrawal-input").val());
    if (inputtedDeposit) {
      newBankaccount.deposit(inputtedDeposit);  
    } 
    if (inputtedWithdrawal) {
      newBankaccount.withdrawl(inputtedWithdrawal);
    }
    $('#balance').val('$' + newBankaccount.Check().toFixed(2));
  });

 
});