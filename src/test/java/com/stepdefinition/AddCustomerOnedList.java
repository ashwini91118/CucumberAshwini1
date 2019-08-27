package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerOnedList {
	public static WebDriver driver;
	@Given("user should lauch the browse")
	public void user_should_lauch_the_browse() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@When("user should provide the details")
	public void user_should_provide_the_details(io.cucumber.datatable.DataTable dataTable) {
	   System.out.println("when");
	   List<String> oned = dataTable.asList(String.class);
	   driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(oned.get(0));
		driver.findElement(By.id("lname")).sendKeys(oned.get(1));
		driver.findElement(By.id("email")).sendKeys(oned.get(2));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(oned.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(oned.get(4));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify whether the customer id is generated")
	public void to_verify_whether_the_customer_id_is_generated() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		
	}



}
