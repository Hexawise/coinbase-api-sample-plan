// features/support/steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given(/a payment method of type (.*) and currency (.*)/, async function(type, currency) {
  await this.setPaymentMethodType(type, currency);
});

When(/I make a (.*) deposit/, async function(size) {
  await this.makeDeposit(size);
});

Then(/the response (.*) should be (.*)/, function(field, value) {
  assert.equal(this.response[field], value);
});

Then(/the response should have field (.*)/, function(field) {
  assert(this.response[field]);
});