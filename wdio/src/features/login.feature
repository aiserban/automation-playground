@smoke
Feature: Login tests

  Scenario Outline: <username> can login
    Given I visit the login page
    When I login with the credentials of <username>
    Then I see the inventory page

    Examples:
      | username                |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             |

  Scenario: Locked out users are unable to login
    Given I visit the login page
    When I login with the credentials of locked_out_user
    Then I see the login page
    And the LOCKED_OUT error message is displayed

  Scenario: Users are not able to login with incorrect password
    Given I visit the login page
    When I login with standard_user and definitelyNotTheRightPassword
    Then I see the login page
    And the INCORRECT_PASSWORD error message is displayed
