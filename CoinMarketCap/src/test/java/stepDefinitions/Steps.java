package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import pageObjects.CoinMarketPage;

public class Steps {
	
	public WebDriver driver;
	public CoinMarketPage cp;
	
	@Given("User Launch Chrome browser")
	public void user_Launch_Chrome_browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		cp = new CoinMarketPage(driver);
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("User clicks {string}")
	public void user_clicks(String string) {
		cp.clickShowAll();
	}

	@Then("User is able to see {int} elements in list")
	public void user_is_able_to_see_elements_in_list(Integer num_of_elements) {
		if(cp.verifyRows()) {
			Assert.assertTrue(true);
		}else {
			Assert.assertTrue(false);
		}
	}
	

	@When("User clicks on add top watchlist for {int} random rows")
	public void user_clicks_on_add_top_watchlist_for_random_rows(Integer int1) {
		
			cp.click_random_watchlists();
	
	}

	@When("User opens Watchlist in new tab")
	public void user_opens_Watchlist_in_new_tab() {
	    cp.open_watchlist_new_tab();
	}

	@Then("User is able to see added watchlist on the page")
	public void user_is_able_to_see_added_watchlist_on_the_page() {
	    cp.verifyWatchList();
	}

	@When("User changes apply currency filter to coin")
	public void user_changes_apply_currency_filter_to_coin() {
	   cp.open_currency_coin_filter();
	}

	@When("User changes Market Cap to $100M to $1B")
	public void user_changes_Market_Cap_to_$100M_to_$1B() {
	    cp.select_market_cap_first();
	}

	@When("User changes Price filter to $1 to $100 and record data")
	public void user_changes_Price_filter_to_$1_to_$100_and_record_data() {
		cp.select_price_filter_record_data();
	}

	@When("User changes Market cap filter to $100M to $1B and record data")
	public void user_changes_Market_cap_filter_to_$100M_to_$1B_and_record_data() {
		cp.change_market_cap_filters();
	}

	@Then("user verifies MarketCap records should not be matching")
	public void user_verifies_MarketCap_records_should_not_be_matching() {
		cp.verify_market_prices_filter_change();
	}
	
	
	@Then("user close the browser")
	public void user_close_the_browser() {
	    driver.quit();
	}
}
