function createAccount(pin, amount = 0) {
  return {
    checkBalance(code) {
      if (code === pin) {
        return `$${amount}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit(code, amt) {
      if (code === pin) {
        amount += amt;
        return `Succesfully deposited $${amt}. Current balance: $${amount}.`;
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
