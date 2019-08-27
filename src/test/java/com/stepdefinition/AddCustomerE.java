package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerE {
	public static WebDriver driver;

	@Given("user should launch the browser")
	public void user_should_launch_the_browser() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@When("user has to provide the valid details {string},{string},{string},{string},{string}")
	public void user_has_to_provide_the_valid_details(String fname, String llastname , String email, String address,
			String phone) {
		System.out.println("when-1");
		driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(fname);
		driver.findElement(By.id("lname")).sendKeys(llastname);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(address);
		driver.findElement(By.id("telephoneno")).sendKeys(phone);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify customer id has generated")
	public void to_verify_customer_id_has_generated() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

}
