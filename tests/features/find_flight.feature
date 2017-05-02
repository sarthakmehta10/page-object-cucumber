Feature: Flight Search Test
  As a user
  I can find a flight and go to the results page
  
  Scenario: Search the flights
    When I navigate to 'home' page
    And I click on 'departure' location field
    And I choose 'flightFrom' field with value 'France'
    And I choose 'flightFromCity' field with value 'Paris'
    And I click on 'destination' location field
    And I choose 'flightTo' field with value 'Belarus'
    And I choose 'flightToCity' field with value 'Minsk'
    And I select my trip mode as 'one-way'
    And I enter 'depDate' as '28.05.2017'
    And I click on 'findFlights'
    Then I should land on 'flight-details' results page
