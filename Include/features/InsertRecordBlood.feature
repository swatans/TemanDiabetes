
Feature: Insert Record Blood
  As user i want to Record my Daily Sugar Blood Data

	  @PositiveCase
	  Scenario: As user i want to go to Rekaman Page and verify all the section
	  Given I open default app
	  When User go to Rekaman Page
	  And User check the data record is there or not
	  Then User Verify all the section
	  
	    @PositiveCase
	  Scenario: As user i want to insert manually the blood record
	  Given User in the Rekaman Page
	  When User go to insert blood and chose manual mechanism
	  And User chose manual
	  Then User redirect input page
	  
	     @PositiveCase
	  Scenario: As user i want to verify all the section insert sugar blood
	  Given User in the Rekaman Page
	  When User go to insert blood and chose manual mechanism
	  And User chose manual
	  Then User redirect input page