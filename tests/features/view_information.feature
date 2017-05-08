Feature: Informations Test
  As a user
  I can check the various informations and go to the results page
  
  Scenario: Check information
    When I navigate to 'home' page
    And I select 'information' option from the menu
    And I select 'option' as 'Baggage rules'
    Then I should be taken to 'baggage-type' results page
    And I click on 'checkedBaggage'
    Then I should land on 'baggage-info' results page
