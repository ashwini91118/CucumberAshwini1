@tag
Feature: Add tariff plan
  I want to use this template for my feature file

  @tag1
  Scenario: negavite to home with congratulation you add tariff plan
    Given user should launch the browser
    And user should enter the guru demo url
    When user should provide the valid details
      |  10 |  20 |  30 |  40 |  50 |  60 |  70 |
      | 200 | 300 | 400 | 500 | 600 | 700 | 800 |
      |  30 |  40 |  50 |  60 |  70 |  80 |  90 |
    Then To verify congratulation you add tariff plan has displayed
