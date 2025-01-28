Feature: Searching for "prowly" on Google with date filters

  Scenario: Find "prowly" without date filter
    Given I go to "https://www.google.com"
    When I type "prowly" in the search bar
    And I press the search button
    Then I should see results about "prowly"

  Scenario: Find "prowly" from the last 24 hours
    Given I go to "https://www.google.com"
    When I type "prowly" in the search bar
    And I press the search button
    And I choose "Past 24 hours" filter
    Then I should see only recent results about "prowly"

  Scenario: Find "prowly" from the last year
    Given I go to "https://www.google.com"
    When I type "prowly" in the search bar
    And I press the search button
    And I choose "Past year" filter
    Then I should see only results from the past year about "prowly"