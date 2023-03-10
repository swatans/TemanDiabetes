import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

import io.appium.java_client.AppiumDriver
import io.appium.java_client.android.AndroidDriver
import io.appium.java_client.android.nativekey.AndroidKey
import io.appium.java_client.android.nativekey.KeyEvent



class Script {
	String textInput
	String textValue

	/*
	 The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("I open default website")
	def I_open_default_website() {
		WebUI.openBrowser('https://www.wikipedia.org/')
		WebUI.maximizeWindow()
	}


	@Given("I open default app")
	def I_open_default_app() {
		Mobile.startExistingApplication('com.temandiabetes.android', FailureHandling.STOP_ON_FAILURE)
		//Mobile.startExistingApplication('kobitßΩon-store:v157113', FailureHandling.STOP_ON_FAILURE)
		Mobile.delay(5)

	}
	@Given("I open fresh app")
	def I_open_app() {
		Mobile.startApplication('C:\\Users\\MSI\\Downloads\\temandiabetes.apk', true)
		//Mobile.startExistingApplication('kobitßΩon-store:v157113', FailureHandling.STOP_ON_FAILURE)
		Mobile.delay(5)

	}
	@Given("User in the Rekaman Page")
	def in_rekaman_page() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/Button_Plus'), 10)
	}
	
	@When("User go to Rekaman Page")
	def I_go_to_rekamanpage() {
		Mobile.tap(findTestObject('Object Repository/Navbar/Navbar_Rekaman'), 10)
	}
	
	@When("User go to insert blood and chose manual mechanism")
	def I_go_to_insert() {
			Mobile.tap(findTestObject('Object Repository/RekamanPage/Graph/Button_Plus'), 10)
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertBloodRecord/TextView_Manual'), 10)
			
	}
	@And("User chose manual")
	def I_chose_manual() {
			Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertBloodRecord/TextView_Manual'), 10)	
	}
	
	@Then("User redirect input page")
	def I_redirect_to() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_InputGulaDarah'), 10)
	}
	
	@Then("User Verify all the section")
	def I_verify_rekaman_section() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/Button_HistoryGulaDarah'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/Button_LihatGrafik'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/Button_Plus'), 10)
	}
	
	@And("User check the data record is there or not")
	def I_check_data() {
		Mobile.delay(4)
		if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/WithoutData/TextView_BelumAdaData'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/WithoutData/TextView_SilahkanMasukanGulaDarah'), 10, FailureHandling.OPTIONAL)
		} else if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/Graph/WithData/TextView_SebelumMakanMalam'), 10, FailureHandling.OPTIONAL)) {
				Mobile.pressBack()
		} else {
			System.println("TIDAK ADA")
		}
	}
	
	

	@When("I am on clear account chat room")
	def I_am_on_account_chat_room() {
		this.I_click('Home/Button_Chat')
		this.I_click('Search/Button_SearchContact')
		this.I_type_on('automation test', 'Search/TextBox_SearchContact')
		this.I_click('Search/List_Contact-1st')
		//this.I_should_see('ChatRoom/Button_VoiceCall')
		this.I_click('Home/Button_MoreOptions')
		this.I_click('ChatRoom/List_ClearConversation')
		Mobile.delay(2)
	}

	@When("I am on clear group chat room")
	def I_am_on_group_chat_room() {
		this.I_click('Home/Button_Search')
		this.I_type_on('automation test', 'Search/TextBox_Search')
		this.I_hide_keyboard()
		this.I_click('Search/List_ListOfGroup-1st')
		//this.I_should_see('ChatRoom/Text_TotalMembers')
		this.I_click('Home/Button_MoreOptions')
		this.I_click('ChatRoom/List_ClearConversation')
		Mobile.delay(2)
	}
	


	@When("I click '(.*)'")
	def I_click(String elme) {
		Mobile.tap(findTestObject('Object Repository/'+elme), 10)
	}

	@When("I click and hold '(.*)'")
	def I_click_and_hold(String elme) {
		Mobile.tapAndHold(findTestObject('Object Repository/'+elme), 3 , 2)
	}

	@When("I type '(.*)' on '(.*)'")
	def I_type_on(String txt, String elme) {
		Mobile.setText(findTestObject('Object Repository/'+elme), txt, 10)
	}

	@When("I should see '(.*)'")
	def I_should_see(String elme) {
		Mobile.verifyElementVisible(findTestObject('Object Repository/'+elme), 10)
	}

	@When("I should not see '(.*)'")
	def I_should_not_see(String elme) {
		Mobile.verifyElementNotVisible(findTestObject('Object Repository/'+elme), 5)
	}

	@When("I should not see object '(.*)'")
	def I_should_not_see_object(String elme) {
		Mobile.verifyElementNotExist(findTestObject('Object Repository/'+elme), 5)
	}

	@When("I verify text '(.*)'")
	def I_assert_text(String elme) {
		Mobile.verifyElementText(findTestObject('Object Repository/'+elme), 5)
	}

	@When("I get text '(.*)'")
	def I_get_text(String elme) {
		Mobile.getText(findTestObject('Object Repository/'+elme), 5)
	}

	@When("I compare text '(.*)'")
	def I_compare_text(String elme) {
		Mobile.verifyEqual(I_get_text('Object Repository/'+elme), 5)
	}


	@When("I swipe to bottom")
	def I_swipe_to_bottom() {
		Mobile.swipe(500, 1600, 500, 0)
		Mobile.delay(3)
	}

	@When("I swipe to bottom transaction")
	def I_swipe_to_bottom_transaction() {
		Mobile.swipe(63, 1152, 63, 1154)
		Mobile.delay(3)
	}
	@When("I swipe to bottom trx")
	def I_swipe_to_bottom_trx() {
		Mobile.swipe(63, 1154, 63, 675)
		Mobile.delay(3)
	}
	@When("I swipe slider '(.*)'")
	def I_swipe_slider(String elme) {
		Mobile.setSliderValue(findTestObject('Object Repository/'+elme), 1, 2)
	}

	@When("I scroll to up")
	def I_scroll_to_up() {
		Mobile.swipe(691, 180, 1017, 800)
		Mobile.delay(3)
	}

	@When("I scroll to up trx")
	def I_scroll_to_up_trx() {
		Mobile.swipe(1066, 1080, 1306, 1989)
		Mobile.delay(3)
	}

	@When("I press back")
	def I_press_back() {
		Mobile.pressBack()
	}

	@When("I wait for (.*) seconds")
	def I_wait_for(String secondsStr) {
		int seconds = secondsStr.toInteger()
		Mobile.delay(seconds)
	}

	@When("I kill app")
	def I_kill_app() {
		Mobile.pressBack()
		Mobile.pressBack()
		Mobile.pressBack()
		AppiumDriver<?> driver = MobileDriverFactory.getDriver()
		driver.terminateApp('id.chatalia.app')
	}

	@When("I hide keyboard")
	def I_hide_keyboard() {
		Mobile.hideKeyboard()
	}

	@When("I tap app")
	def I_tap_app() {
		Mobile.tapAtPosition(200, 300)
	}

	@When("I tap tutorial at transaction")
	def I_tap_app_transaction() {
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
		Mobile.delay(1)
		Mobile.tapAtPosition(200, 300)
	}

	@When("I close app")
	def I_close_app() {
		Mobile.closeApplication('id.chatalia.app', FailureHandling.STOP_ON_FAILURE)
	}
}
