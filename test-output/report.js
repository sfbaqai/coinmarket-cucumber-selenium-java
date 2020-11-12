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
formatter.write("Response: {\"status\":{\"timestamp\":\"2020-11-12T09:58:23.826Z\",\"error_code\":0,\"error_message\":null,\"elapsed\":12,\"credit_count\":1,\"notice\":null},\"data\":{\"id\":825,\"symbol\":\"USDT\",\"name\":\"Tether\",\"amount\":30,\"last_updated\":\"2020-11-12T09:57:06.000Z\",\"quote\":{\"BOB\":{\"price\":206.8406351051581,\"last_updated\":\"2020-11-12T09:57:57.000Z\"}}}}");
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
formatter.write("Response: {\"status\":{\"timestamp\":\"2020-11-12T09:58:24.347Z\",\"error_code\":0,\"error_message\":null,\"elapsed\":6,\"credit_count\":1,\"notice\":null},\"data\":{\"1027\":{\"id\":1027,\"name\":\"Ethereum\",\"symbol\":\"ETH\",\"category\":\"coin\",\"description\":\"Ethereum (ETH) is a cryptocurrency . Users are able to generate ETH through the process of mining. Ethereum has a current supply of 113,392,913.9365. The last known price of Ethereum is 463.81991293 USD and is up 1.07 over the last 24 hours. It is currently trading on 5513 active market(s) with $13,572,373,462.43 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.\",\"slug\":\"ethereum\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\",\"subreddit\":\"ethereum\",\"notice\":\"Infura is currently experiencing a [service outage](https://status.infura.io/) for its Ethereum Mainnet API.\",\"tags\":[\"mineable\",\"pow\",\"smart-contracts\"],\"tag-names\":[\"Mineable\",\"PoW\",\"Smart Contracts\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\"],\"urls\":{\"website\":[\"https://www.ethereum.org/\"],\"twitter\":[\"https://twitter.com/ethereum\"],\"message_board\":[\"https://forum.ethereum.org/\"],\"chat\":[\"https://gitter.im/orgs/ethereum/rooms\"],\"explorer\":[\"https://blockchain.coinmarketcap.com/chain/ethereum\",\"https://etherscan.io/\",\"https://ethplorer.io/\",\"https://blockchair.com/ethereum\",\"https://eth.tokenview.com/en/blocklist\"],\"reddit\":[\"https://reddit.com/r/ethereum\"],\"technical_doc\":[\"https://github.com/ethereum/wiki/wiki/White-Paper\"],\"source_code\":[\"https://github.com/ethereum\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d428589.0\"]},\"platform\":null,\"date_added\":\"2015-08-07T00:00:00.000Z\",\"twitter_username\":\"ethereum\",\"is_hidden\":0}}}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify first ten currency ids",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User calls the info api to get data of first 1 to 10 currency id",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_calls_the_info_api_to_get_data_of_first_to_currency_id(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check mineable tag available in them",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_check_mineable_tag_available_in_them()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check correct cruptocurrencies are printed out",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.TestAPISteps.user_check_correct_cruptocurrencies_are_printed_out()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"status\":{\"timestamp\":\"2020-11-12T09:58:24.895Z\",\"error_code\":0,\"error_message\":null,\"elapsed\":20,\"credit_count\":1,\"notice\":null},\"data\":{\"1\":{\"id\":1,\"name\":\"Bitcoin\",\"symbol\":\"BTC\",\"category\":\"coin\",\"description\":\"Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,538,368. The last known price of Bitcoin is 15,922.56830245 USD and is up 3.46 over the last 24 hours. It is currently trading on 9425 active market(s) with $31,537,804,935.98 traded over the last 24 hours. More information can be found at https://bitcoin.org/.\",\"slug\":\"bitcoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png\",\"subreddit\":\"bitcoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"sha-256\",\"store-of-value\",\"state-channels\"],\"tag-names\":[\"Mineable\",\"PoW\",\"SHA-256\",\"Store of Value\",\"State channels\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"PROPERTY\"],\"urls\":{\"website\":[\"https://bitcoin.org/\"],\"twitter\":[],\"message_board\":[\"https://bitcointalk.org\"],\"chat\":[],\"explorer\":[\"https://blockchain.coinmarketcap.com/chain/bitcoin\",\"https://blockchain.info/\",\"https://live.blockcypher.com/btc/\",\"https://blockchair.com/bitcoin\",\"https://explorer.viabtc.com/btc\"],\"reddit\":[\"https://reddit.com/r/bitcoin\"],\"technical_doc\":[\"https://bitcoin.org/bitcoin.pdf\"],\"source_code\":[\"https://github.com/bitcoin/\"],\"announcement\":[]},\"platform\":null,\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"\",\"is_hidden\":0},\"2\":{\"id\":2,\"name\":\"Litecoin\",\"symbol\":\"LTC\",\"category\":\"coin\",\"description\":\"Litecoin (LTC) is a cryptocurrency . Users are able to generate LTC through the process of mining. Litecoin has a current supply of 65,864,047.49979. The last known price of Litecoin is 59.20084175 USD and is down -0.27 over the last 24 hours. It is currently trading on 722 active market(s) with $2,338,334,794.72 traded over the last 24 hours. More information can be found at https://litecoin.org/.\",\"slug\":\"litecoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/2.png\",\"subreddit\":\"litecoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"scrypt\",\"medium-of-exchange\",\"binance-chain\"],\"tag-names\":[\"Mineable\",\"PoW\",\"Scrypt\",\"Medium of Exchange\",\"Binance Chain\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"PLATFORM\"],\"urls\":{\"website\":[\"https://litecoin.org/\"],\"twitter\":[\"https://twitter.com/LitecoinProject\"],\"message_board\":[\"https://litecointalk.io/\",\"https://litecoin-foundation.org/\"],\"chat\":[\"https://telegram.me/litecoin\"],\"explorer\":[\"https://blockchair.com/litecoin\",\"https://chainz.cryptoid.info/ltc/\",\"http://explorer.litecoin.net/chain/Litecoin\",\"https://ltc.tokenview.com/en\",\"https://explorer.viabtc.com/ltc\"],\"reddit\":[\"https://reddit.com/r/litecoin\"],\"technical_doc\":[],\"source_code\":[\"https://github.com/litecoin-project/litecoin\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d47417.0\"]},\"platform\":null,\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"LitecoinProject\",\"is_hidden\":0},\"3\":{\"id\":3,\"name\":\"Namecoin\",\"symbol\":\"NMC\",\"category\":\"coin\",\"description\":\"Namecoin (NMC) is a cryptocurrency and operates on the IOST platform. Users are able to generate NMC through the process of mining. Namecoin has a current supply of 14,736,400. The last known price of Namecoin is 0.53908004 USD and is up 7.46 over the last 24 hours. It is currently trading on 6 active market(s) with $5,162.37 traded over the last 24 hours. More information can be found at https://www.namecoin.org/.\",\"slug\":\"namecoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/3.png\",\"subreddit\":\"namecoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"sha-256\",\"platform\",\"mineable\",\"pow\",\"sha-256\",\"platform\",\"mineable\",\"pow\",\"sha-256\",\"platform\",\"mineable\",\"pow\",\"sha-256\",\"platform\"],\"tag-names\":[\"Mineable\",\"PoW\",\"SHA-256\",\"Platform\",\"Mineable\",\"PoW\",\"SHA-256\",\"Platform\",\"Mineable\",\"PoW\",\"SHA-256\",\"Platform\",\"Mineable\",\"PoW\",\"SHA-256\",\"Platform\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\"],\"urls\":{\"website\":[\"https://www.namecoin.org/\"],\"twitter\":[\"https://twitter.com/Namecoin\"],\"message_board\":[],\"chat\":[\"https://telegram.me/namecoin\"],\"explorer\":[\"https://nmc.tokenview.com/\",\"https://www.namebrow.se/\",\"https://namecha.in/\"],\"reddit\":[\"https://reddit.com/r/namecoin\"],\"technical_doc\":[],\"source_code\":[\"https://github.com/namecoin\"],\"announcement\":[\"https://bitcointalk.org/?topic\u003d6017.0\"]},\"platform\":{\"id\":2405,\"name\":\"IOST\",\"symbol\":\"IOST\",\"slug\":\"iostoken\",\"token_address\":\"123456789012343\"},\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"Namecoin\",\"is_hidden\":0},\"4\":{\"id\":4,\"name\":\"Terracoin\",\"symbol\":\"TRC\",\"category\":\"coin\",\"description\":\"Terracoin (TRC) is a cryptocurrency . Users are able to generate TRC through the process of mining. Terracoin has a current supply of 22,935,396.43036118. The last known price of Terracoin is 0.06786808 USD and is up 3.94 over the last 24 hours. It is currently trading on 2 active market(s) with $251.21 traded over the last 24 hours. More information can be found at http://www.terracoin.io/.\",\"slug\":\"terracoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/4.png\",\"subreddit\":\"terracoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"sha-256\"],\"tag-names\":[\"Mineable\",\"PoW\",\"SHA-256\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\"],\"urls\":{\"website\":[\"http://www.terracoin.io/\"],\"twitter\":[\"https://twitter.com/Terracoin_TRC\"],\"message_board\":[\"https://medium.com/@clockuniverse\"],\"chat\":[\"https://mattermost.terracoin.io/\",\"https://t.me/terracoin\"],\"explorer\":[\"https://insight.terracoin.io/\",\"https://explorer.terracoin.io/chain/Terracoin\"],\"reddit\":[\"https://reddit.com/r/terracoin\"],\"technical_doc\":[\"https://wiki.terracoin.io/view/Whitepaper\"],\"source_code\":[\"https://github.com/terracoin\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d1364146.0\"]},\"platform\":null,\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"Terracoin_TRC\",\"is_hidden\":0},\"5\":{\"id\":5,\"name\":\"Peercoin\",\"symbol\":\"PPC\",\"category\":\"coin\",\"description\":\"Peercoin (PPC) is a cryptocurrency . Users are able to generate PPC through the process of mining. Peercoin has a current supply of 26,600,062.68501335. The last known price of Peercoin is 0.21503907 USD and is up 2.24 over the last 24 hours. It is currently trading on 17 active market(s) with $29,167.49 traded over the last 24 hours. More information can be found at http://www.peercoin.net.\",\"slug\":\"peercoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/5.png\",\"subreddit\":\"peercoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"hybrid-pow-pos\",\"sha-256\",\"medium-of-exchange\",\"payments\"],\"tag-names\":[\"Mineable\",\"Hybrid - PoW \u0026 PoS\",\"SHA-256\",\"Medium of Exchange\",\"Payments\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"PROPERTY\"],\"urls\":{\"website\":[\"http://www.peercoin.net\"],\"twitter\":[\"https://twitter.com/PeercoinPPC\"],\"message_board\":[\"https://talk.peercoin.net\"],\"chat\":[\"https://t.me/peercoin\",\"https://discord.gg/m294ReV\"],\"explorer\":[\"https://chainz.cryptoid.info/ppc/\",\"https://explorer.peercoin.net/\",\"https://www.coinexplorer.net/PPC\"],\"reddit\":[\"https://reddit.com/r/peercoin\"],\"technical_doc\":[\"https://docs.peercoin.net/\"],\"source_code\":[\"https://github.com/peercoin\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d101820.0\"]},\"platform\":null,\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"PeercoinPPC\",\"is_hidden\":0},\"6\":{\"id\":6,\"name\":\"Novacoin\",\"symbol\":\"NVC\",\"category\":\"coin\",\"description\":\"Novacoin (NVC) is a cryptocurrency . Users are able to generate NVC through the process of mining. Novacoin has a current supply of 2,335,756.713897. The last known price of Novacoin is 0.26065253 USD and is up 3.92 over the last 24 hours. It is currently trading on 2 active market(s) with $1,256.78 traded over the last 24 hours. More information can be found at http://novacoin.org.\",\"slug\":\"novacoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/6.png\",\"subreddit\":\"Novacoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"hybrid-pow-pos\",\"scrypt\"],\"tag-names\":[\"Mineable\",\"Hybrid - PoW \u0026 PoS\",\"Scrypt\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\"],\"urls\":{\"website\":[\"http://novacoin.org\"],\"twitter\":[],\"message_board\":[],\"chat\":[],\"explorer\":[\"https://explorer.novaco.in/\"],\"reddit\":[\"https://reddit.com/r/Novacoin\"],\"technical_doc\":[\"https://github.com/novacoin-project/novacoin/wiki\"],\"source_code\":[\"https://github.com/novacoin-project/novacoin\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d143221.0\"]},\"platform\":null,\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"\",\"is_hidden\":0},\"7\":{\"id\":7,\"name\":\"Devcoin\",\"symbol\":\"DVC\",\"category\":\"coin\",\"description\":\"Devcoin (DVC) is a cryptocurrency . Users are able to generate DVC through the process of mining. Devcoin has a current supply of 15,167,257,500. The last known price of Devcoin is 0.00002298 USD and is up 0.00 over the last 24 hours. More information can be found at http://devcoin.org.\",\"slug\":\"devcoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/7.png\",\"subreddit\":\"devcoin\",\"notice\":\"\",\"tags\":[\"mineable\"],\"tag-names\":[\"Mineable\"],\"tag-groups\":[\"OTHER\"],\"urls\":{\"website\":[\"http://devcoin.org\"],\"twitter\":[\"https://twitter.com/devtome\"],\"message_board\":[],\"chat\":[],\"explorer\":[\"http://node1.devcoin.cloud\"],\"reddit\":[\"https://reddit.com/r/devcoin\"],\"technical_doc\":[],\"source_code\":[\"https://github.com/devcoin/core\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d233997.0\"]},\"platform\":null,\"date_added\":\"2013-04-28T00:00:00.000Z\",\"twitter_username\":\"devtome\",\"is_hidden\":0},\"8\":{\"id\":8,\"name\":\"Feathercoin\",\"symbol\":\"FTC\",\"category\":\"coin\",\"description\":\"Feathercoin (FTC) is a cryptocurrency . Users are able to generate FTC through the process of mining. Feathercoin has a current supply of 297,735,080. The last known price of Feathercoin is 0.00959293 USD and is up 2.67 over the last 24 hours. It is currently trading on 13 active market(s) with $12,660.72 traded over the last 24 hours. More information can be found at http://feathercoin.com.\",\"slug\":\"feathercoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/8.png\",\"subreddit\":\"FeatherCoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"neoscrypt\",\"medium-of-exchange\",\"payments\"],\"tag-names\":[\"Mineable\",\"PoW\",\"NeoScrypt\",\"Medium of Exchange\",\"Payments\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\",\"PROPERTY\",\"PROPERTY\"],\"urls\":{\"website\":[\"http://feathercoin.com\"],\"twitter\":[\"https://twitter.com/Feathercoin\"],\"message_board\":[\"https://forum.feathercoin.com\"],\"chat\":[\"https://telegram.me/feathercoinofficial\"],\"explorer\":[\"http://explorer.feathercoin.com/\",\"https://chainz.cryptoid.info/ftc/\",\"https://fsight.chain.tips/\"],\"reddit\":[\"https://reddit.com/r/FeatherCoin\"],\"technical_doc\":[\"https://feathercoin.com/about/\"],\"source_code\":[\"https://github.com/FeatherCoin/Feathercoin\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d178286.0\"]},\"platform\":null,\"date_added\":\"2013-05-03T00:00:00.000Z\",\"twitter_username\":\"Feathercoin\",\"is_hidden\":0},\"9\":{\"id\":9,\"name\":\"Mincoin\",\"symbol\":\"MNC\",\"category\":\"coin\",\"description\":\"Mincoin (MNC) is a cryptocurrency . Users are able to generate MNC through the process of mining. Mincoin has a current supply of 6,228,916.8879491. The last known price of Mincoin is 0.07458228 USD and is up 0.00 over the last 24 hours. More information can be found at https://www.mincoin.us/.\",\"slug\":\"mincoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/9.png\",\"subreddit\":\"MinCoin\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"scrypt\"],\"tag-names\":[\"Mineable\",\"PoW\",\"Scrypt\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\"],\"urls\":{\"website\":[\"https://www.mincoin.us/\"],\"twitter\":[\"https://twitter.com/mincoinus\"],\"message_board\":[\"https://www.mincoinforum.com\"],\"chat\":[],\"explorer\":[\"http://cryptoexplore.com\",\"https://www.mincoinexplorer.com/\"],\"reddit\":[\"https://reddit.com/r/MinCoin\"],\"technical_doc\":[\"https://github.com/mincoin/mincoin-whitepaper/blob/master/docs/mincoin-whitepaper.pdf\"],\"source_code\":[\"https://github.com/mincoin\"],\"announcement\":[\"https://bitcointalk.org/index.php?topic\u003d165397.0\"]},\"platform\":null,\"date_added\":\"2013-05-03T00:00:00.000Z\",\"twitter_username\":\"mincoinus\",\"is_hidden\":0},\"10\":{\"id\":10,\"name\":\"Freicoin\",\"symbol\":\"FRC\",\"category\":\"coin\",\"description\":\"Freicoin (FRC) is a cryptocurrency . Users are able to generate FRC through the process of mining. Freicoin has a current supply of 100,000,000 with 56,903,495.14031652 in circulation. The last known price of Freicoin is 0.00541367 USD and is down -4.92 over the last 24 hours. It is currently trading on 1 active market(s) with $1,546.35 traded over the last 24 hours. More information can be found at http://freico.in.\",\"slug\":\"freicoin\",\"logo\":\"https://s2.coinmarketcap.com/static/img/coins/64x64/10.png\",\"subreddit\":\"\",\"notice\":\"\",\"tags\":[\"mineable\",\"pow\",\"sha-256\"],\"tag-names\":[\"Mineable\",\"PoW\",\"SHA-256\"],\"tag-groups\":[\"OTHER\",\"CONSENSUS_ALGORITHM\",\"CONSENSUS_ALGORITHM\"],\"urls\":{\"website\":[\"http://freico.in\"],\"twitter\":[\"https://twitter.com/Freicoin\"],\"message_board\":[\"https://freicoinalliance.com/\"],\"chat\":[],\"explorer\":[\"http://freicoin.info/chain/Freicoin\"],\"reddit\":[],\"technical_doc\":[\"http://freico.in/docs/freimarkets.pdf\"],\"source_code\":[\"https://github.com/freicoin/freicoin\"],\"announcement\":[]},\"platform\":null,\"date_added\":\"2013-05-03T00:00:00.000Z\",\"twitter_username\":\"Freicoin\",\"is_hidden\":0}}}");
formatter.after({
  "status": "passed"
});
});