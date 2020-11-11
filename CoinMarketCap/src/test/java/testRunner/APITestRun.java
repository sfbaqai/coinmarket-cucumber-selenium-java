package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
(
		features = {".//Features/CoinMaker_API_Test.feature"},
		dryRun=false,
		glue = "stepDefinitions",
		monochrome=true,
		strict=true,
		plugin = {"pretty","html:test-output"}
//		,tags = "@Test2"
						
)
public class APITestRun {

	
	
}
