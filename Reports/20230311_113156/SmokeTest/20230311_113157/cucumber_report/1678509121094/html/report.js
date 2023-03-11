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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to check for element visible (Root cause: java.lang.IllegalArgumentException: Object is null\r\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:70)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible$2.call(Unknown Source)\r\n\tat Script.I_verify(Script.groovy:171)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat SmokeTest.run(SmokeTest:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1678509117951.run(TempTestSuite1678509117951.groovy:36)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\r\n\tat Script.I_verify(Script.groovy:171)\r\n\tat ✽.User verify the data is valid or not(C:/Users/MSI/git/TemanDiabetes/Include/features/InsertRecordBlood.feature:64)\r\nCaused by: java.lang.IllegalArgumentException: Object is null\r\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:70)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible$2.call(Unknown Source)\r\n\tat Script.I_verify(Script.groovy:171)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat SmokeTest.run(SmokeTest:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1678509117951.run(TempTestSuite1678509117951.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I press OK",
  "keyword": "Then "
});
formatter.match({
  "location": "Script.I_press_OK()"
});
formatter.result({
  "status": "skipped"
});
});