# coinmarket-cucumber-selenium-java
This is a maven project that contains test cases to test UI of coinmarketcap.com and also rest api with json validations and rest-assured (api: https://coinmarketcap.com/api/documentation/v1/). 


Upgraded to Cucumber 5
The code is now upgraded to Cucumber 4 with new



Upgraded to Cucumber-JVM 5
The code is now upgraded to Cucumber 4 with new

Libraries support
Test Runner support
Hooks (@BeforeStep and @AfterStep)
DataTable code change


Make sure you have JAVA 11 for this.


In order to run UI-test cases Simply Run TestRun.java in TestRunner Package.
In order to run-API-test-cases Simply Run APITestRun.java in TestRunner Package.


Generated results of test cases are available in test-output folder.

and HTML file "index.html" contains the generated report of all scenarios and their results.


Steps files are available in stepDefinitions package

pageObjects package contains class file for functions used for UI Automation

utilities package contains class file CurrencyAPIFunctions.java that contains Functions used in API testing

Feature file for UI scenarios is found in Features folder, Filename: CoinMarketCap.feature
Feature file for API scenarios is found in Features folder, Filename: CoinMaker_API.feature



Target folder also contains generated report against the runs

If you want to run a test case one by one, just place tag in TestRun.java or APITestRun.java for available tag for a scenario.

