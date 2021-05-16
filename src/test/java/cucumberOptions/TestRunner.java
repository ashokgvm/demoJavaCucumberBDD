package cucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue = "stepDefinations",
        tags = "@demoBackground", //dryRun = true, //skips/checks step definitions implemented or not
        monochrome = true, //gives details of info
        // Pretty- Prints the Gherkin source with additional colors and stack traces for errors
        plugin = {"pretty", "html:target/html", "json:target/json/Report.json", "junit:target/Junit/Report.xml"}
        )

public class TestRunner {
}
