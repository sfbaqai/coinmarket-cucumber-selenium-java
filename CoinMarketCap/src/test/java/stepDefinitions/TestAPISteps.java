package stepDefinitions;

import static io.restassured.RestAssured.given;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;

import org.junit.Assert;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import utilities.CurrencyAPIFunctions;

public class TestAPISteps {

	String baseUri="https://pro-api.coinmarketcap.com";
	CurrencyAPIFunctions cf;
	Response _RESP;
	String CUR_ID_BTC="";
	String CUR_ID_USDT="";
	String CUR_ID_ETH="";
	Scenario Scn; 
	@Before
	public void BeforeHook(Scenario s) {
		this.Scn = s;
	}
	
	@After
	public void afterHook(Scenario s) {
		this.Scn = s;
		if(cf.getRsponse()==null) {
			Scn.write("Response: No Response received");
		}else {
			Scn.write("Response: "+cf.getRsponse().asString());	
		}
	}
	
	@Given("User hits the map api to get ID of BTC USDT and ETH")
	public void user_hits_the_map_api_to_get_ID_of_BTC_USDT_and_ETH() {
		  cf = new CurrencyAPIFunctions();
		  CUR_ID_BTC = cf.getCurrID("BTC");
		  CUR_ID_USDT = cf.getCurrID("USDT");
		  CUR_ID_ETH = cf.getCurrID("ETH");
		 
	}

	@Given("User converts Bolivian Boliviano by calling price conversion")
	public void user_converts_Bolivian_Boliviano_by_calling_price_conversion() {
		cf.getConvPrice(CUR_ID_BTC, "1000", "BOB");
		cf.getConvPrice(CUR_ID_ETH, "20000", "BOB");
		cf.getConvPrice(CUR_ID_USDT, "30", "BOB");
	}

	@Then("User verifies api response")
	public void user_verifies_api_response() {
		if(!CUR_ID_ETH.equals("") && 
			!CUR_ID_USDT.equals("") && 
			!CUR_ID_BTC.equals(""))
			Assert.assertTrue(true);
		else
			Assert.assertTrue(false);
	}

	@Given("User calls info api to get Ethereum data")
	public void user_calls_info_api_to_get_Ethereum_data() {
  	 	 cf = new CurrencyAPIFunctions();
		_RESP=cf.getEthereum_data();
	}

	@Then("User checks logo is equal to {string}")
	public void user_checks_logo_is_equal_to(String logo_data) {
	    Assert.assertTrue(cf.verify_logo(_RESP, logo_data));
	}

	@Then("technical_doc is equal to {string}")
	public void technical_doc_is_equal_to(String technical_doc_value) {
		Assert.assertTrue(cf.verify_technical_doc_value(_RESP, technical_doc_value));
	}

	@Then("Symbol of Ethereum is {string}")
	public void symbol_of_Ethereum_is(String symbol_val) {
		Assert.assertTrue(cf.verify_symbol(_RESP, symbol_val));
	}

	@Then("date_added is equal to {string}")
	public void date_added_is_equal_to(String date_added_val) {
		Assert.assertTrue(cf.verify_date_added(_RESP, date_added_val));
	}

	@Then("platform is {string}")
	public void platform_is(String platform_val) {
		if(platform_val.equals("null")) {
			Assert.assertTrue(cf.verify_platform(_RESP, null));
		}else {
			Assert.assertTrue(cf.verify_platform(_RESP, platform_val));
		}

	}

	@Then("currency has {string} with it")
	public void currency_has_with_it(String tag_val) {
		Assert.assertTrue(cf.verify_tag_value(_RESP, tag_val));
	}






}
