@tag
Feature: Addcustomeronedmap
  I want to use this template for my feature file

  @tag2 @tag3
  Scenario: Generate the customer ID
   
    When user has to provide the details
      | fname   | ashu          |
      | lname   | kumar         |
      | gmail   | abc@gmail.com |
      | address | Bangalore     |
      | phoneno |        354893 |
    Then to verify the customer id has to generate
