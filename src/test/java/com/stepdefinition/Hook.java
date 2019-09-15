package com.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;

	@Before
	public void user_should_launch_browser() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Ashwini-selenium-practise\\FaceBook\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");

	}

	@After
	public void browser_close() {
		System.out.println("After");
		driver.quit();
	}

@Before("@tag20")
public void taggedhook() {
	System.out.println("taggedhook");

}
	
}

