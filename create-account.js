function createAccount(pin, amount = 0) {
  return {
    checkBalance(code) {
      if (code === pin) {
        return `$${amount}`;
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
