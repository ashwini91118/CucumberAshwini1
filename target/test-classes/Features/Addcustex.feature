
Feature: Addcustomer example
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Generate the CustomerID
    
    When user has to provide the valid details "<fname>","<llastname>","<email>","<address>","<phone>"
    Then to verify customer id has generated

    Examples: 
      | fname | llastname | email          | address   | phone    |
      | ashu  | amar      | abc@gmail.com  | bangalore |   124324 |
      | amar  | ashu      | abcd@gmail.com | bangalore | 23509809 |
