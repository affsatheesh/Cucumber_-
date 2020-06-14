$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OpenGoogle.feature");
formatter.feature({
  "line": 2,
  "name": "open the facebook application",
  "description": "",
  "id": "open-the-facebook-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@facebooklogin"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "open facebook and login",
  "description": "",
  "id": "open-the-facebook-application;open-facebook-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": ": User entering the facebook.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ": User entering the Username \"sathesspartans001@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": User entering the Password  \"worldend\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": ": User click the Login Botton",
  "keyword": "Then "
});
formatter.match({
  "location": "Open_Google_Definitions.user_entering_the_facebook_com()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sathesspartans001@gmail.com",
      "offset": 30
    }
  ],
  "location": "Open_Google_Definitions.user_entering_the_Username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "worldend",
      "offset": 31
    }
  ],
  "location": "Open_Google_Definitions.user_entering_the_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Open_Google_Definitions.user_click_the_Login_Botton()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Open facebook my account",
  "description": "",
  "id": "open-facebook-my-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@facebook"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "check login features",
  "description": "",
  "id": "open-facebook-my-account;check-login-features",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the login button",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "open-facebook-my-account;check-login-features;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "open-facebook-my-account;check-login-features;;1"
    },
    {
      "cells": [
        "sathezsk02@gmail.com",
        "worldend02"
      ],
      "line": 11,
      "id": "open-facebook-my-account;check-login-features;;2"
    },
    {
      "cells": [
        "sathesspartans001@gmail.com",
        "worldend"
      ],
      "line": 12,
      "id": "open-facebook-my-account;check-login-features;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "check login features",
  "description": "",
  "id": "open-facebook-my-account;check-login-features;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@facebook"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "open the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the \"sathezsk02@gmail.com\" and \"worldend02\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Open_Facebook.open_the_facebook_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sathezsk02@gmail.com",
      "offset": 11
    },
    {
      "val": "worldend02",
      "offset": 38
    }
  ],
  "location": "Open_Facebook.enter_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Open_Facebook.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "check login features",
  "description": "",
  "id": "open-facebook-my-account;check-login-features;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@facebook"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "open the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the \"sathesspartans001@gmail.com\" and \"worldend\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Open_Facebook.open_the_facebook_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sathesspartans001@gmail.com",
      "offset": 11
    },
    {
      "val": "worldend",
      "offset": 45
    }
  ],
  "location": "Open_Facebook.enter_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Open_Facebook.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
});