
Feature: Insert Record Blood
  As user i want to Record my Daily Sugar Blood Data
  
  	  @PositiveCase
	  Scenario: As user i want to see entry point medication reminder 
	  Given I open default app
	  When User looking for tab medication reminder
	  Then User verify medication page
	  
	    @PositiveCase
	  Scenario: As user i want go to pengingat obat page and verify the page
	  Given User is on pengingat obat page
	  When User verify the pengingat obat page
	  Then User can insert reminder medicine
	  Then I press Cross
	  
	    @NegativeCase
	  Scenario: As user i want to insert the page but haven't filled any field and save it
		Given User is on pengingat obat page
	  When User verify the pengingat obat page
	  Then User can insert reminder medicine
	  And User haven't filled any field and save it
	  Then System will throw alert handling reminder medicine
	  Then I press OK
	   Then I press Cross
	  
	    @NegativeCase
	  Scenario: As user i want to insert reminder medicie for before eaten
		Given User is on pengingat obat page
	  When User verify the pengingat obat page
	  Then User can insert reminder medicine
	  Then User pick before eat
	  Then I press OK Reminder
	  Then System will throw alert handling reminder medicine
	  Then I press OK
	   Then I press Cross
	  
	   @NegativeCase
	  Scenario: As user i want to insert reminder medicie for before eaten
		Given User is on pengingat obat page
	  When User verify the pengingat obat page
	  Then User can insert reminder medicine
	  Then User pick after eat
	  Then I press OK Reminder
	  Then System will throw alert handling reminder medicine
	  Then I press OK
	   Then I press Cross
	  
	  
	  	   @PositiveCase
	  Scenario: As user i want to insert reminder and verify
		Given User is on pengingat obat page
	  When User verify the pengingat obat page
	  Then User can insert reminder medicine
	  Then User pick after eat
	  Then User fill the name of the medicine
	  Then User tambahkan medicine
	  Then I press OK Reminder
	  
	  
	  