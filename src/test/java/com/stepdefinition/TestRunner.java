package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = "com.stepdefinition")
public class TestRunner {

}
// plugin="json:target/cucumber-reports/Cucumber.json"
//"rerun:src/test/resources/Features/failed.txt"
//, plugin ="html:target", dryRun = false, strict = true, monochrome = true