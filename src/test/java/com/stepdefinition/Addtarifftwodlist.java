package com.stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Addtarifftwodlist {
	/*public static WebHook.driver Hook.driver;

	@Given("user should enter the guru demo url")
	public void user_should_enter_the_guru_demo_url() {
		System.setProperty("webHook.driver.chrome.Hook.driver",
				"C:\\AshwiniWorkLocation1\\Cucumbertask\\Hook.driver\\chromeHook.driver.exe");
		Hook.driver = new ChromeHook.driver();
		Hook.driver.get("http://demo.guru99.com/telecom/");
		Hook.driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		
		

	}
*/
	@When("user should provide the valid details")
	public void user_should_provide_the_valid_details(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("when:1");
		List<List<String>> twodlist = dataTable.asLists(String.class);
		System.out.println(twodlist);
		Hook.driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		Hook.driver.findElement(By.id("rental1")).sendKeys(twodlist.get(0).get(0));
		Hook.driver.findElement(By.id("local_minutes")).sendKeys(twodlist.get(0).get(1));
		Hook.driver.findElement(By.id("inter_minutes")).sendKeys(twodlist.get(0).get(2));
		Hook.driver.findElement(By.id("sms_pack")).sendKeys(twodlist.get(0).get(3));
		Hook.driver.findElement(By.id("minutes_charges")).sendKeys(twodlist.get(0).get(4));
		Hook.driver.findElement(By.id("inter_charges")).sendKeys(twodlist.get(0).get(5));
		Hook.driver.findElement(By.id("sms_charges")).sendKeys(twodlist.get(0).get(6));
		Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();

	}

	@Then("To verify congratulation you add tariff plan has displayed")
	public void to_verify_congratulation_you_add_tariff_plan_has_displayed() {
		Assert.assertTrue(
				Hook.driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
		Hook.driver.quit();
	}

}
