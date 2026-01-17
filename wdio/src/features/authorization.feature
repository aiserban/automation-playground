@smoke
Feature: Authorization is required for the app

  Scenario Outline: Users that are not logged in cannot access the <page> page
    Given I visit the <page> page
    Then I see the login page
    And the <error> error message is displayed

    Examples:
      | page     | error                    |
      | inventory | NOT_AUTHORIZED_INVENTORY |
      | cart     | NOT_AUTHORIZED_CART      |
