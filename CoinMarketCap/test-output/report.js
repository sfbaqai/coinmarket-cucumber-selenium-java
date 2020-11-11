$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/CoinMaker_API_Test.feature");
formatter.feature({
  "name": "Test map api and info api",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify currency conversion after getting curr ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User hits the map api to get ID of BTC USDT and ETH",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_hits_the_map_api_to_get_ID_of_BTC_USDT_and_ETH()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User converts Bolivian Boliviano by calling price conversion",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_converts_Bolivian_Boliviano_by_calling_price_conversion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies api response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_verifies_api_response()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"status\":{\"timestamp\":\"2020-11-11T20:24:51.281Z\",\"error_code\":0,\"error_message\":null,\"elapsed\":10,\"credit_count\":1,\"notice\":null},\"data\":{\"id\":825,\"symbol\":\"USDT\",\"name\":\"Tether\",\"amount\":30,\"last_updated\":\"2020-11-11T20:24:06.000Z\",\"quote\":{\"BOB\":{\"price\":207.05749862597378,\"last_updated\":\"2020-11-11T20:23:57.000Z\"}}}}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify json data after retrieving Ethereum",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User calls info api to get Ethereum data",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_calls_info_api_to_get_Ethereum_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks logo is equal to \"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_checks_logo_is_equal_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "technical_doc is equal to \"https://github.com/ethereum/wiki/wiki/White-Paper\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.technical_doc_is_equal_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Symbol of Ethereum is \"ETH\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.symbol_of_Ethereum_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "date_added is equal to \"2015-08-07T00:00:00.000Z\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.date_added_is_equal_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "platform is \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.platform_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "currency has \"mineable\" with it",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.currency_has_with_it(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Response: No Response received");
formatter.after({
  "status": "passed"
});
});