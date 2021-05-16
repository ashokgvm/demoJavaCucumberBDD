$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoBackground.feature");
formatter.feature({
  "line": 2,
  "name": "Open SwagLabs Page and validate online shoping details",
  "description": "",
  "id": "open-swaglabs-page-and-validate-online-shoping-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demoBackground"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Open SwagLabs HomePage and validate",
  "description": "Purpose of this TC\u0027s is to check HomePage for swaglabs page",
  "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Step1"
    }
  ],
  "line": 12,
  "name": "Enter \u003cUserName\u003e and \u003cPassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "swagLabs Homepage should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 16,
      "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 18,
      "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 579000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Step1"
    }
  ],
  "line": 6,
  "name": "Open browser and login to SwagLabs Application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "SwagLabs Login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.openBrowserAndLoginToSwagLabsApplication()"
});
formatter.result({
  "duration": 7554045400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.swaglabsLoginPageShouldBeDisplayed()"
});
formatter.result({
  "duration": 123586100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Open SwagLabs HomePage and validate",
  "description": "Purpose of this TC\u0027s is to check HomePage for swaglabs page",
  "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demoBackground"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Step1"
    }
  ],
  "line": 12,
  "name": "Enter standard_user and secret_sauce",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "swagLabs Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 6
    },
    {
      "val": "secret_sauce",
      "offset": 24
    }
  ],
  "location": "LoginPage.enterUserNameAndPassword(String,String)"
});
formatter.result({
  "duration": 590636500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.swaglabsHomepageShouldBeDisplayed()"
});
formatter.result({
  "duration": 3971214200,
  "status": "passed"
});
formatter.after({
  "duration": 96800,
  "status": "passed"
});
formatter.before({
  "duration": 97500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Step1"
    }
  ],
  "line": 6,
  "name": "Open browser and login to SwagLabs Application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "SwagLabs Login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.openBrowserAndLoginToSwagLabsApplication()"
});
formatter.result({
  "duration": 5349800500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.swaglabsLoginPageShouldBeDisplayed()"
});
formatter.result({
  "duration": 75792400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Open SwagLabs HomePage and validate",
  "description": "Purpose of this TC\u0027s is to check HomePage for swaglabs page",
  "id": "open-swaglabs-page-and-validate-online-shoping-details;open-swaglabs-homepage-and-validate;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demoBackground"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Step1"
    }
  ],
  "line": 12,
  "name": "Enter problem_user and secret_sauce",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "swagLabs Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 6
    },
    {
      "val": "secret_sauce",
      "offset": 23
    }
  ],
  "location": "LoginPage.enterUserNameAndPassword(String,String)"
});
formatter.result({
  "duration": 481296500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.swaglabsHomepageShouldBeDisplayed()"
});
formatter.result({
  "duration": 3528592000,
  "status": "passed"
});
formatter.after({
  "duration": 63600,
  "status": "passed"
});
});