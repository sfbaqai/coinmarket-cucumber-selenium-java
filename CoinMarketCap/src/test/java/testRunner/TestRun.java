package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = {".//Features/CoinMarketCap.feature"},
		dryRun=false,
		glue = "stepDefinitions",
		monochrome=true,
		strict=true,
		plugin = {"pretty","html:test-output"}		
				)
public class TestRun {
	
}
