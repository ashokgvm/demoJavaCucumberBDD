@smokeTest
Feature: Open SwagLabs Page and validate online shoping details

  Scenario: Open SwagLabs HomePage and validate
  This is to check HomePage for swaglabs page
  #step1
  When Open browser and login to SwagLabs Application
  Then SwagLabs Login page should be displayed


  Scenario Outline: Open SwagLabs HomePage and validate - 2
  Purpose of this TC's is to check HomePage for swaglabs page
    #Step1
  When Open browser and login to SwagLabs Application
  Then Enter <UserName> and <Password>

  Then swagLabs Homepage should be displayed

    Examples:
      |UserName     |Password    |
      |standard_user|secret_sauce|
      |problem_user |secret_sauce|


    #DataTable - Data Driven
  Scenario: Open SwagLabs HomePage and validate - 3
  Purpose of this TC's is to check HomePage for swaglabs page
    #Step1
  When Open browser and login to SwagLabs Application
  Then Pass username and password
  |standard_user|secret_sauce|
  Then swagLabs Homepage should be displayed