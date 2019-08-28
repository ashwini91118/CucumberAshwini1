package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Addtarifftwodmap {
	public static WebDriver driver;
	@Given("user should launch the browserm and eitie")
	public void user_should_launch_the_browserm_and_eitie() {
	    System.setProperty("webdriver.chrome.driver", "C:\\AshwiniWorkLocation1\\Cucumbertask\\driver\\chromedriver.exe");
	    driver=new ChromeDriver();
	    
	   
	}

	@Given("user should enter the guru demo url and details")
	public void user_should_enter_the_guru_demo_url_and_details() {
		driver.get("http://demo.guru99.com/telecom/");
		 driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		
	}

	@When("user should provide the valid detailsm")
	public void user_should_provide_the_valid_detailsm(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("when:1");
		List<Map<String, String>> twodMap = dataTable.asMaps(String.class, String.class);
		System.out.println(twodMap);
		driver.findElement(By.id("rental1")).sendKeys(twodMap.get(0).get("monthlyRent"));
		driver.findElement(By.id("local_minutes")).sendKeys(twodMap.get(0).get("freeLocalMinutes"));
		driver.findElement(By.id("inter_minutes")).sendKeys(twodMap.get(0).get("freeinternationalminutes"));
		driver.findElement(By.id("sms_pack")).sendKeys(twodMap.get(0).get("freesmspack"));
		driver.findElement(By.id("minutes_charges")).sendKeys(twodMap.get(0).get("localperminutesC"));
		driver.findElement(By.id("inter_charges")).sendKeys(twodMap.get(0).get("InternationalperminutesC"));
		driver.findElement(By.id("sms_charges")).sendKeys(twodMap.get(0).get("SmsperCharge"));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("To verify congratulation you add tariff plan has displayedm")
	public void to_verify_congratulation_you_add_tariff_plan_has_displayedm() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}



}
