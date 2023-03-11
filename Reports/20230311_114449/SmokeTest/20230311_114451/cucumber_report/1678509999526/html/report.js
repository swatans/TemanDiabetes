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
