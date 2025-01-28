Feature: Searching for "semrush" on Bing with different categories

  Scenario: Find "semrush" in all results
    Given I go to "https://www.bing.com"
    When I type "semrush" in the search bar
    And I press the search button
    Then I should see results about "semrush"

  Scenario: Find "semrush" in video results
    Given I go to "https://www.bing.com"
    When I type "semrush" in the search bar
    And I press the search button
    And I choose "Videos" filter
    Then I should see only video results for "semrush"

  Scenario: Find "semrush" in news results
    Given I go to "https://www.bing.com"
    When I type "semrush" in the search bar
    And I press the search button
    And I choose "News" filter
    Then I should see only news articles about "semrush"