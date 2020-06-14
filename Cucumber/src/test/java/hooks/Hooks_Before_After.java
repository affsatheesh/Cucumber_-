package hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class Hooks_Before_After {
	@Given("^this is background$")
	public void this_is_background() throws Throwable {
	  System.out.println("this is background");
	}

	@Given("^background is started$")
	public void background_is_started() throws Throwable {
	  System.out.println("background is started");
	}
	@Before
	public void Methodstarting()
	{
		System.out.println("Starting the Method");
	}
	@Before(order=1)
	public void Codes_Reading()
	{
		System.out.println("codes reading done");
	}
	@After(order=1)
	public void successfull()
	{
		System.out.println("code successfull done");
	}
	@After
	public void Mehodsending()
	{
		System.out.println("Method ended");
	}
	@Before("@First")
	public void beforeFirst()
	{
		System.out.println("First Scenario started");
	}
	@Before("@second")
	public void BeforeSecond()
	{
		System.out.println("before second scenario started");
	}
	@Before("@Third")
	public void BeforeThird()
	{
		System.out.println("before third scenario started");
	}
	@After("@First")
	public void afterfirst()
	{
		System.out.println("ending the first scenario");
	}
	@After("@second")
	public void Aftersecond()
	{
		System.out.println("Ending the second scenario");
	}
	@After("@Third")
	public void afterThird()
	{
		System.out.println("after Third scenario Ended");
	}
}


