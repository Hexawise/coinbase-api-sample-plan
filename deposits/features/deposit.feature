# "Coinbase: Make Deposit", Revision 24
Feature: depositing funds into the exchange from a coinbase account
	As a coinbase user
	I want to deposit funds into the exchange
	So that I can actively participate in coin trading

	Scenario Outline: deposit funds
		Given a payment method of type <payment method> and currency <currency>
		When I make a <deposit size> deposit
		Then the response should have field id
    And the response currency should be <currency>
		Examples:
			| payment method     | deposit size | currency |
			| Bank Account (ACH) | small        | USD      |