package com.stepdefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Addtarifftwodmap {
	/*public static WebHook.driver Hook.driver;

	@Given("user should launch the browserm and eitie")
	public void user_should_launch_the_browserm_and_eitie() {
		System.setProperty("webHook.driver.chrome.Hook.driver",
				"C:\\AshwiniWorkLocation1\\Cucumbertask\\Hook.driver\\chromeHook.driver.exe");
		Hook.driver = new ChromeHook.driver();

	}

	@Given("user should enter the guru demo url and details")
	public void user_should_enter_the_guru_demo_url_and_details() {
		Hook.driver.get("http://demo.guru99.com/telecom/");
		Hook.driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		

	}*/

	@When("user should provide the valid detailsm")
	public void user_should_provide_the_valid_detailsm(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("when:1");
		List<Map<String, String>> twodMap = dataTable.asMaps(String.class, String.class);
		System.out.println(twodMap);
		Hook.driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		Hook.driver.findElement(By.id("rental1")).sendKeys(twodMap.get(0).get("monthlyRent"));
		Hook.driver.findElement(By.id("local_minutes")).sendKeys(twodMap.get(0).get("freeLocalMinutes"));
		Hook.driver.findElement(By.id("inter_minutes")).sendKeys(twodMap.get(0).get("freeinternationalminutes"));
		Hook.driver.findElement(By.id("sms_pack")).sendKeys(twodMap.get(0).get("freesmspack"));
		Hook.driver.findElement(By.id("minutes_charges")).sendKeys(twodMap.get(0).get("localperminutesC"));
		Hook.driver.findElement(By.id("inter_charges")).sendKeys(twodMap.get(0).get("InternationalperminutesC"));
		Hook.driver.findElement(By.id("sms_charges")).sendKeys(twodMap.get(0).get("SmsperCharge"));
		Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("To verify congratulation you add tariff plan has displayedm")
	public void to_verify_congratulation_you_add_tariff_plan_has_displayedm() {
		Assert.assertTrue(
				Hook.driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
		Hook.driver.quit();

	}

}
