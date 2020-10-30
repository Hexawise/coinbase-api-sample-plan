const CoinbasePro = require('coinbase-pro');

// load .env file into process.env
require('dotenv').config();

const key = process.env.COINBASE_KEY;
const secret = process.env.COINBASE_SECRET;
const passphrase = process.env.COINBASE_PASSPHRASE;

const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';

const authedClient = new CoinbasePro.AuthenticatedClient(
  key,
  secret,
  passphrase,
  sandboxURI
);

async function findPaymentMethod(type, currency) {
  try {
    const pms = await authedClient.getPaymentMethods();
    return pms.find(pm => pm.type == type && pm.currency == currency);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

exports.getDeposits = () => {return authedClient.get(['transfers']);};
exports.deposit = (payload) => { return authedClient.post(['deposits', 'payment-method'], {body: payload}); };
exports.findPaymentMethod = findPaymentMethod;

// authedClient.getPaymentMethods().then(d => console.log(d));
// authedClient.getCoinbaseAccounts().then(d => console.log(d));