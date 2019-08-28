package com.stepdefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Addtarifftwodlist {
	public static WebDriver driver;

	@Given("user should enter the guru demo url")
	public void user_should_enter_the_guru_demo_url() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\AshwiniWorkLocation1\\Cucumbertask\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();

	}

	@When("user should provide the valid details")
	public void user_should_provide_the_valid_details(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("when:1");
		List<List<String>> twodlist = dataTable.asLists(String.class);
		System.out.println(twodlist);
		driver.findElement(By.id("rental1")).sendKeys(twodlist.get(0).get(0));
		driver.findElement(By.id("local_minutes")).sendKeys(twodlist.get(0).get(1));
		driver.findElement(By.id("inter_minutes")).sendKeys(twodlist.get(0).get(2));
		driver.findElement(By.id("sms_pack")).sendKeys(twodlist.get(0).get(3));
		driver.findElement(By.id("minutes_charges")).sendKeys(twodlist.get(0).get(4));
		driver.findElement(By.id("inter_charges")).sendKeys(twodlist.get(0).get(5));
		driver.findElement(By.id("sms_charges")).sendKeys(twodlist.get(0).get(6));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
		
	}

	@Then("To verify congratulation you add tariff plan has displayed")
	public void to_verify_congratulation_you_add_tariff_plan_has_displayed() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}

}
