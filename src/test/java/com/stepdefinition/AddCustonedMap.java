package com.stepdefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustonedMap {
	public static WebDriver driver;
	@Given("user has to launch the browser")
	public void user_has_to_launch_the_browser() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@When("user has to provide the details")
	public void user_has_to_provide_the_details(io.cucumber.datatable.DataTable cust) {
		System.out.println("when");
	Map<String, String> onedmap = cust.asMap(String.class, String.class);
		driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(onedmap.get("fname"));
		driver.findElement(By.id("lname")).sendKeys(onedmap.get("lname"));
		driver.findElement(By.id("email")).sendKeys(onedmap.get("gmail"));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedmap.get("address"));
		driver.findElement(By.id("telephoneno")).sendKeys(onedmap.get("phoneno"));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("to verify the customer id has to generate")
	public void to_verify_the_customer_id_has_to_generate() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}



}