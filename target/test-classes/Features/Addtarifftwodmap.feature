@tag5
Feature: Addtariff twodmap
  I want to use this template for my feature file

  @tag5
  Scenario: negavite to home with congratulation you add tariff planm
  
    
    When user should provide the valid detailsm
      | monthlyRent | freeLocalMinutes | freeinternationalminutes | freesmspack | localperminutesC | InternationalperminutesC | SmsperCharge |
      |         200 |              300 |                      400 |         500 |              600 |                      700 |          800 |
      |          30 |               40 |                       50 |          60 |               70 |                       80 |           90 |
    Then To verify congratulation you add tariff plan has displayedm
