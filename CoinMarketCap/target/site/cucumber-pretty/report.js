$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/verify_list.feature");
formatter.feature({
  "name": "Verify list elements",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully display 100 elements in list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User opens URL \"https://coinmarketcap.com/\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks \"View All\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User is able to see 100 elements in list",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});