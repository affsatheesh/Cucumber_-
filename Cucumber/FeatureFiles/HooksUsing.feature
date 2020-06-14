@HookUsing
Feature: open the HRM application
Background:
    Given this is background
    And   background is started
@First
Scenario: login the HRM application
 Given open login page
 When give username and password
Then homepage should be displayed

@second
Scenario: i am going to touch setting
Given settings opened
When i will change my profile dp
Then i am coming back to my homepage

@Third
Scenario: i am going to search
Given i am finding search Box
When i am searching sathez
Then i got result i am comeback to Homebutton