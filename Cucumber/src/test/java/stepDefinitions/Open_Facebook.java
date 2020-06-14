package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Open_Facebook {
	
	WebDriver driver;
	@Given("^open the facebook login page$")
	public void open_the_facebook_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver","D:\\software\\Study@@\\jar files\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.get("https://www.facebook.com/");
	}
	@When("^enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_and(String username, String password) throws Throwable {
     driver.findElement(By.id("email")).sendKeys(username);
     driver.findElement(By.id("pass")).sendKeys(password);
	}

	@When("^click the login button$")
	public void click_the_login_button() throws Throwable {
		driver.findElement(By.id("u_0_b")).click();
	}

	}

