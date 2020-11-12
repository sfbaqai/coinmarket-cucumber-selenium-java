Feature: Test map api and info api

@Test1
Scenario: Verify currency conversion after getting curr ID
	Given User hits the map api to get ID of BTC USDT and ETH
	And User converts Bolivian Boliviano by calling price conversion
	Then User verifies api response
	

@Test2
Scenario: Verify json data after retrieving Ethereum
	Given User calls info api to get Ethereum data
	Then User checks logo is equal to "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
	And technical_doc is equal to "https://github.com/ethereum/wiki/wiki/White-Paper"
	And Symbol of Ethereum is "ETH"
	And date_added is equal to "2015-08-07T00:00:00.000Z"
	And platform is "null"
	And currency has "mineable" with it

#	THIS IS EXTRA POINT TASK	
@Test3
Scenario: Verify first ten currency ids
	Given User calls the info api to get data of first 1 to 10 currency id
	Then User check mineable tag available in them
	And user check correct cruptocurrencies are printed out
	
