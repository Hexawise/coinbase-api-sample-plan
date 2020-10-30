// features/support/world.js
const { setWorldConstructor } = require("@cucumber/cucumber");

const cb = require("./lib");

const paymentMethodTypes = {
  'Bank Account (ACH)': 'ach_bank_account',
  'Wire Transfer': 'ach_bank_account',
  'Coinbase Account': 'ach_bank_account',
  'Debit Card': 'fiat_account',
  'PayPal': 'ach_bank_account',
  'none provided': 'ach_bank_account'
};

class CustomWorld {
  constructor() {}

  async setPaymentMethodType(type, currency) {
    let internalType = paymentMethodTypes[type];
    this.currency = currency;
    this.paymentMethod = await cb.findPaymentMethod(internalType, currency);
  }

  async makeDeposit(amount) {
    try {
      this.response = await cb.deposit({
        amount,
        currency: this.currency,
        payment_method_id: this.paymentMethod.id
      });
    } catch (e) {
      console.error(e);
    }
  }
}

setWorldConstructor(CustomWorld);