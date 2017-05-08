Feature: Destinations Test
  As a user
  I can check the destinations which can be visited and go to the results page
  
  Scenario: Check destinations
    When I navigate to 'home' page
    And I select 'flights' option from the menu
    And I select 'option' as 'Destinations'
    Then I should land on 'destination' results page
