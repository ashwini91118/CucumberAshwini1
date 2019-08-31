package com.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomer {
	/*public static WebHook.driver Hook.driver;

	@Given("user should launch browser")
	public void user_should_launch_browser() {
		System.setProperty("webHook.driver.chrome.Hook.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\Hook.driver\\chromeHook.driver.exe");
		Hook.driver = new ChromeHook.driver();
		Hook.driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		Hook.driver.get("http://demo.guru99.com/telecom/");
		
		

	}
*/
	@When("user provide the valid details")
	public void user_provide_the_valid_details() {
	Hook.driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
	Hook.driver.findElement(By.xpath("//label[text()='Done']")).click();
	Hook.driver.findElement(By.id("fname")).sendKeys("Ram");
	Hook.driver.findElement(By.id("lname")).sendKeys("kumar");
	Hook.driver.findElement(By.id("email")).sendKeys("abc@gmail.com");
	Hook.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Chennai");
	Hook.driver.findElement(By.id("telephoneno")).sendKeys("1243545");
	Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify the customer id is displayed")
	public void to_verify_the_customer_id_is_displayed() {
		Assert.assertTrue(Hook.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		Hook.driver.quit();
	}

}
