// features/support/world.js
const { setWorldConstructor } = require("@cucumber/cucumber");

const cb = require("./lib");

const paymentMethodTypes = {
  'Bank Account (ACH)': 'ach_back_account',
  'Wire Transfer': 'ach_bank_account',
  'Coinbase Account': 'ach_bank_account',
  'Debit Card': 'ach_bank_account',
  'PayPal': 'ach_bank_account',
  'none provided': 'ach_bank_account'
};

class CustomWorld {
  constructor() {}

  async setPaymentMethodType(type, currency) {
    let internalType = 'ach_bank_account';
    this.currency = 'USD';
    this.paymentMethod = await cb.findPaymentMethod(internalType, this.currency);
  }

  async makeDeposit(size) {
    let amount = '100.00';
    this.response = await cb.deposit({
      amount,
      currency: this.currency,
      payment_method_id: this.paymentMethod.id
    });
  }
}

setWorldConstructor(CustomWorld);