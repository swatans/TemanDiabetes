
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
	  Given User in input darah page
	  When User want to see the whole section
	  Then User can easly fill the field
	  
	   @NegativeCase
	  Scenario: As user i want to save the page without fill any field
	  Given User in input darah page
	  When User didn't fill any field and save it
	  Then System will throw alert handling
	  Then I press OK
	  
	   @NegativeCase
	  Scenario: As user just fill jenis pemeriksaan darah then save it
	  Given User in input darah page
	  When User just fill pemeriksaan darah
	  Then System will throw alert handling
	  Then I press OK
	  
	  @NegativeCase
	  Scenario: As user just fill jenis pemeriksaan darah and time then save it
	  Given User in input darah page
	  When User fill time
	  Then System will throw alert handling
	  Then I press OK
	  
	    @NegativeCase
	  Scenario: As user just fill jenis pemeriksaan darah, time and sugar blood then save it
	  Given User in input darah page
	  When User fill sugar blood
	  Then System will throw alert handling
	  Then I press OK
	  
	     @NegativeCase
	  Scenario: As user just fill jenis pemeriksaan darah, time, sugar blood and makan malam then save it
	  Given User in input darah page
	  When User fill makan malam
	  Then System will throw alert handling
	  Then I press OK
	  
	     @PositiveCase
	  Scenario: As user i fill everything on the all section and save it
	  Given User in input darah page
	  When User fill snack malam
	  Then User verify the data is valid or not
	  