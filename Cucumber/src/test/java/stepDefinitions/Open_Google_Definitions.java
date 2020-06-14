package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Open_Google_Definitions
{ 
	WebDriver driver;
	@Given("^: User entering the facebook\\.com$")
	public void user_entering_the_facebook_com() throws Throwable {
	 	System.setProperty("webdriver.chrome.driver","D:\\software\\Study@@\\jar files\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.get("https://www.facebook.com/");
	}

	@When("^: User entering the Username \"([^\"]*)\"$")
	public void user_entering_the_Username(String login) throws Throwable {
       driver.findElement(By.id("email")).sendKeys(login);
	}

	@When("^: User entering the Password  \"([^\"]*)\"$")
	public void user_entering_the_Password(String password) throws Throwable {
      driver.findElement(By.id("pass")).sendKeys(password);
	}

	@Then("^: User click the Login Botton$")
	public void user_click_the_Login_Botton() throws Throwable {
        driver.findElement(By.id("u_0_b")).click();
   Boolean homepage =     driver.findElement(By.xpath("//input[@type='search']")).isDisplayed();
      
  Assert.assertTrue(homepage);
	}
}