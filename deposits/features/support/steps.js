// features/support/steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given(/a payment method of type (.*) and currency (.*)/, async function(type, currency) {
  await this.setPaymentMethodType(type, currency);
});

When(/I make a (.*) deposit/, async function(size) {
  const amountSizes = {
    'small': '100.00',
    'large': '10000.00'
  };
  await this.makeDeposit(amountSizes[size]);
});

Then(/the response (.*) should be (.*)/, function(field, value) {
  assert.equal(this.response[field], value);
});

Then(/the response should have field (.*)/, function(field) {
  assert(this.response[field]);
});