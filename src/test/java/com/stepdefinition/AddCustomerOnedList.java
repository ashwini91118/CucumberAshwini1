package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerOnedList {
	/*public static WebHook.driver Hook.driver;
	@Given("user should lauch the browse")
	public void user_should_lauch_the_browse() {
		System.setProperty("webHook.driver.chrome.Hook.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\Hook.driver\\chromeHook.driver.exe");
		Hook.driver = new ChromeHook.driver();
		Hook.driver.get("http://demo.guru99.com/telecom/");
	}*/

	@When("user should provide the details")
	public void user_should_provide_the_details(io.cucumber.datatable.DataTable dataTable) {
	   System.out.println("when");
	   List<String> oned = dataTable.asList(String.class);
	   Hook.driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
		Hook.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hook.driver.findElement(By.id("fname")).sendKeys(oned.get(0));
		Hook.driver.findElement(By.id("lname")).sendKeys(oned.get(1));
		Hook.driver.findElement(By.id("email")).sendKeys(oned.get(2));
		Hook.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(oned.get(3));
		Hook.driver.findElement(By.id("telephoneno")).sendKeys(oned.get(4));
		Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify whether the customer id is generated")
	public void to_verify_whether_the_customer_id_is_generated() {
		Assert.assertTrue(Hook.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		Hook.driver.quit();
	}



}
