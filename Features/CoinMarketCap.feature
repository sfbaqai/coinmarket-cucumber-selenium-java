Feature: Front-end Home Page Scenarios CoinMarket

Scenario: Successfully display 100 elements in list
	Given User Launch Chrome browser
	When User opens URL "https://coinmarketcap.com/"
	And User clicks "View All"
	Then User is able to see 100 elements in list
	And user close the browser
	
Scenario: Verify watchlist page after adding watchlist
	Given User Launch Chrome browser
	When User opens URL "https://coinmarketcap.com/"
	And User clicks on add top watchlist for 5 random rows
	And User opens Watchlist in new tab
	Then User is able to see added watchlist on the page
	And user close the browser
	
Scenario: Verify market Price after filter changes
	Given User Launch Chrome browser
	When User opens URL "https://coinmarketcap.com/"
	And User changes apply currency filter to coin
	And User changes Market Cap to $100M to $1B
	And User changes Price filter to $1 to $100 and record data
	And User changes Market cap filter to $100M to $1B and record data
	Then user verifies MarketCap records should not be matching
	