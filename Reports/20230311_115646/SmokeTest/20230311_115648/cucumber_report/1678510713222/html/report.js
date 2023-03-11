$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/MSI/git/TemanDiabetes/Include/features/MedicationReminder.feature");
formatter.feature({
  "name": "Insert Record Blood",
  "description": "  As user i want to Record my Daily Sugar Blood Data",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As user i want to see entry point medication reminder",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "name": "I open default app",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.I_open_default_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User looking for tab medication reminder",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_swipe_to_bottom_trx()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify medication page",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_verify_medication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want go to pengingat obat page and verify the page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "name": "User is on pengingat obat page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.I_pengingat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the pengingat obat page",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_pengingat_page_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can insert reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_insert_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press Cross",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_cross_reminder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to insert the page but haven\u0027t filled any field and save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User is on pengingat obat page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.I_pengingat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the pengingat obat page",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_pengingat_page_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can insert reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_insert_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User haven\u0027t filled any field and save it",
  "keyword": "And "
});
formatter.match({
  "location": "Script.I_reminder_havent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press OK",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press Cross",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_cross_reminder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to insert reminder medicie for before eaten",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User is on pengingat obat page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.I_pengingat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the pengingat obat page",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_pengingat_page_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can insert reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_insert_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pick before eat",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_before_eat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press OK Reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK_reminder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press OK",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press Cross",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_cross_reminder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to insert reminder medicie for before eaten",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User is on pengingat obat page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.I_pengingat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the pengingat obat page",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_pengingat_page_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can insert reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_insert_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pick after eat",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_after_eat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press OK Reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK_reminder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press OK",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press Cross",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_cross_reminder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to insert reminder and verify",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "name": "User is on pengingat obat page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.I_pengingat_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the pengingat obat page",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_pengingat_page_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can insert reminder medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_insert_medicine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pick after eat",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_after_eat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the name of the medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_set_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tambahkan medicine",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_tambahkanr()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press OK Reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK_reminder()"
});
formatter.result({
  "status": "passed"
});
});