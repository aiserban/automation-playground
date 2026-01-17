@smoke
Feature: Checkout

  Scenario Outline: <username> can purchase <product>
    Given I visit the login page
    And I login with the credentials of <username>
    When I see the inventory page
    And I add <product> to the cart
    And I click on the cart button
    Then I see the <product> in the cart
    And I proceed to checkout information
    And I submit the information for <username>
    Then I see the checkout overview page
    And I see the <product> in the overview
    When I click the Finish button
    Then I see the checkout complete page
    And the checkout confirmation message is displayed

    Examples:
      | product                           | username      |
      | Sauce Labs Onesie                 | standard_user |
      | Test.allTheThings() T-Shirt (Red) | problem_user  |
      | Sauce Labs Fleece Jacket          | error_user    |
      | Sauce Labs Bolt T-Shirt           | visual_user   |


