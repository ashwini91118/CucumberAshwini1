package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomer {
	public static WebDriver driver;

	@Given("user should launch browser")
	public void user_should_launch_browser() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");

	}

	@When("user provide the valid details")
	public void user_provide_the_valid_details() {
	driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
	driver.findElement(By.xpath("//label[text()='Done']")).click();
	driver.findElement(By.id("fname")).sendKeys("Ram");
	driver.findElement(By.id("lname")).sendKeys("kumar");
	driver.findElement(By.id("email")).sendKeys("abc@gmail.com");
	driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Chennai");
	driver.findElement(By.id("telephoneno")).sendKeys("1243545");
	driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify the customer id is displayed")
	public void to_verify_the_customer_id_is_displayed() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

}
