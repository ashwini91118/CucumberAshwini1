@tag
Feature: Add customer
  I want to use this template for my feature file

  @tag1
  Scenario: Generate the customer ID
    Given user has to launch the browser
    When user has to provide the details
      | fname   | ashu          |
      | lname   | kumar         |
      | gmail   | abc@gmail.com |
      | address | Bangalore     |
      | phoneno |        354893 |
    Then to verify the customer id has to generate
