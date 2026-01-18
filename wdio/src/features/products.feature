@smoke
Feature: Products page

  Scenario: Accurate product information is displayed
    Given I visit the login page
    And I login with the credentials of standard_user
    When I see the inventory page
    Then all products are listed with the expected information
