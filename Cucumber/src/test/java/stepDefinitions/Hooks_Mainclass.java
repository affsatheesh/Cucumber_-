package stepDefinitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooks_Mainclass 
{
	@Given("^open login page$")
	public void open_login_page() throws Throwable {
	       System.out.println("open the login page");
	}

	@When("^give username and password$")
	public void give_username_and_password() throws Throwable {
	 System.out.println("username password entered");
	}

	@Then("^homepage should be displayed$")
	public void homepage_should_be_displayed() throws Throwable {
	 System.out.println("hoome page displayed");
	}
  
	@Given("^settings opened$")
	public void settings_opened() throws Throwable {
	  System.out.println("settings opened");
	}
   
	@When("^i will change my profile dp$")
	public void i_will_change_my_profile_dp() throws Throwable {
	     System.out.println("ill change my profile");
	}

	@Then("^i am coming back to my homepage$")
	public void i_am_coming_back_to_my_homepage() throws Throwable {
	System.out.println("im come back to my homepage");
	}
   
	@Given("^i am finding search Box$")
	public void i_am_finding_search_Box() throws Throwable {
	  System.out.println("i am finding search box");
	}
   
	@When("^i am searching sathez$")
	public void i_am_searching_sathez() throws Throwable {
	  System.out.println("i am searching sathez");
	}
 
	@Then("^i got result i am comeback to Homebutton$")
	public void i_got_result_i_am_comeback_to_Homebutton() throws Throwable {
	  System.out.println("im comback homepage");
	}


}