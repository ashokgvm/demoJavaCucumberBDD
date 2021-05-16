@demoBackground
Feature: Open SwagLabs Page and validate online shoping details

  Background:
    #Step1
    When Open browser and login to SwagLabs Application
    Then SwagLabs Login page should be displayed

  Scenario Outline: Open SwagLabs HomePage and validate
  Purpose of this TC's is to check HomePage for swaglabs page
    #Step1
    Then Enter <UserName> and <Password>
    Then swagLabs Homepage should be displayed

    Examples:
      |UserName     |Password    |
      |standard_user|secret_sauce|
      |problem_user |secret_sauce|
