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
    withdraw(code, amt) {
      if (code === pin) {
        if (amt <= amount) {
          amount -= amt;
          return `Succesfully withdrew $${amt}. Current balance: $${amount}.`;
        } else if (amt >= amount) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
