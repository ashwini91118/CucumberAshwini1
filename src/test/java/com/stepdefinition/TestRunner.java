package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = "com.stepdefinition", plugin = { "json:target/cucumber-reports/Cucumber.json",
		"rerun:src/test/resources/Features/failed.txt" }, tags = "@Sanity", monochrome = true, dryRun = false, strict = true)

public class TestRunner {

}













// plugin=
// {"html:target","rerun:src/test/resources/Features/failed.txt"},dryRun=false,strict=true,monochrome=true)

// plugin="json:target/cucumber-reports/Cucumber.json"
// "rerun:src/test/resources/Features/failed.txt"
// , plugin ="html:target", dryRun = false, strict = true, monochrome = true