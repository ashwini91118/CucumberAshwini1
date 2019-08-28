@tag
Feature: Add tariff planm
  I want to use this template for my feature file

  @tag1
  Scenario: negavite to home with congratulation you add tariff planm
    Given user should launch the browserm and eitie
    And user should enter the guru demo url and details
    When user should provide the valid detailsm
      | monthlyRent | freeLocalMinutes | freeinternationalminutes | freesmspack | localperminutesC | InternationalperminutesC | SmsperCharge |
      |         200 |              300 |                      400 |         500 |              600 |                      700 |          800 |
      |          30 |               40 |                       50 |          60 |               70 |                       80 |           90 |
    Then To verify congratulation you add tariff plan has displayedm
