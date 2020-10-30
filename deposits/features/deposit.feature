# "Coinbase: Make Deposit", Revision 24
Feature: depositing funds into the exchange from a coinbase account
	As a coinbase user
	I want to deposit funds into the exchange
	So that I can actively participate in coin trading

	Scenario Outline: deposit funds
		Given a payment method of type <payment method> and currency <currency>
		When I make a <deposit size> deposit
		Then the response should have field id
		Examples:
			| payment method     | deposit size | currency |
			| Debit Card         | small        | USD      |
			| Debit Card         | large        | GBP      |
			| PayPal             | small        | GBP      |
			| PayPal             | large        | USD      |
			| none provided      | withdrawal   | USD      |
			| Bank Account (ACH) | withdrawal   | GBP      |
			| Wire Transfer      | withdrawal   | USD      |
			| Bank Account (ACH) | small        | USD      |
			| Wire Transfer      | small        | GBP      |
			| Coinbase Account   | small        | USD      |
			| Coinbase Account   | large        | GBP      |
			| none provided      | small        | GBP      |
			| Bank Account (ACH) | large        | GBP      |
			| Wire Transfer      | large        | USD      |
			| Debit Card         | withdrawal   | USD      |
			| PayPal             | withdrawal   | USD      |
			| none provided      | large        | USD      |