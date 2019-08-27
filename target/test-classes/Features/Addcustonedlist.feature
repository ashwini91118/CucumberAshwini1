@tag
Feature: Add customer
  I want to use this template for my feature file

  @tag1
  Scenario: user should generate the CustomerID
    Given user should lauch the browse
    When user should provide the details
      | Ashu | amar | abc@gmail.com | Bangalore | 1243535 |
    Then to verify whether the customer id is generated
