@facebook
Feature: Open facebook my account
Scenario Outline: check login features
 Given open the facebook login page
When  enter the "<Username>" and "<Password>"
And click the login button
 
Examples:
 
 |Username                    |Password|
 |sathezsk02@gmail.com|worldend02|
 |sathesspartans001@gmail.com|worldend|
 
