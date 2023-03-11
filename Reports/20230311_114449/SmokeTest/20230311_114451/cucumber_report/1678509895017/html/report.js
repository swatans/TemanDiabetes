$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/MSI/git/TemanDiabetes/Include/features/InsertRecordBlood.feature");
formatter.feature({
  "name": "Insert Record Blood",
  "description": "  As user i want to Record my Daily Sugar Blood Data",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As user i want to go to Rekaman Page and verify all the section",
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
  "name": "User go to Rekaman Page",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_go_to_rekamanpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check the data record is there or not",
  "keyword": "And "
});
formatter.match({
  "location": "Script.I_check_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify all the section",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_verify_rekaman_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to insert manually the blood record",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "name": "User in the Rekaman Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_rekaman_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User go to insert blood and chose manual mechanism",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_go_to_insert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chose manual",
  "keyword": "And "
});
formatter.match({
  "location": "Script.I_chose_manual()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirect input page",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_redirect_to()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to verify all the section insert sugar blood",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User want to see the whole section",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_see_whole()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can easly fill the field",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_easly()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As user i want to save the page without fill any field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User didn\u0027t fill any field and save it",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_dont_fill()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_1()"
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
formatter.scenario({
  "name": "As user just fill jenis pemeriksaan darah then save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User just fill pemeriksaan darah",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_just_pemeriksaan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_1()"
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
formatter.scenario({
  "name": "As user just fill jenis pemeriksaan darah and time then save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill time",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_just_time()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_1()"
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
formatter.scenario({
  "name": "As user just fill jenis pemeriksaan darah, time and sugar blood then save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill sugar blood",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_just_sugarblood()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_1()"
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
formatter.scenario({
  "name": "As user just fill jenis pemeriksaan darah, time, sugar blood and makan malam then save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill makan malam",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_just_makanmalam()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System will throw alert handling",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_handling_1()"
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
formatter.scenario({
  "name": "As user i fill everything on the all section and save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "name": "User in input darah page",
  "keyword": "Given "
});
formatter.match({
  "location": "Script.in_input_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill snack malam",
  "keyword": "When "
});
formatter.match({
  "location": "Script.I_just_snackmalam()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the data is valid or not",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_verify()"
});
formatter.result({
  "status": "passed"
});
});