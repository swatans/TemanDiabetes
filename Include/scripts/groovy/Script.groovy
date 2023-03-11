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

	@Given("User in input darah page")
	def in_input_page() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_InputGulaDarah'), 10)
	}

	@When("User go to Rekaman Page")
	def I_go_to_rekamanpage() {
		Mobile.tap(findTestObject('Object Repository/Navbar/Navbar_Rekaman'), 10)
	}

	@When("User want to see the whole section")
	def I_see_whole() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_InputGulaDarah'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_GulaDarah'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_JenisPemeriksaanGulaDarah'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_MasukanTanggal'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_MasukanWaktu'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Date'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_InputWaktu'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_PilihJenisGulaDarah'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}

	@When("User go to insert blood and chose manual mechanism")
	def I_go_to_insert() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/Graph/Button_Plus'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertBloodRecord/TextView_Manual'), 10)
	}
	@When("User didn't fill any field and save it")
	def I_dont_fill() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_InputGulaDarah'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}
	@When("User just fill pemeriksaan darah")
	def I_just_pemeriksaan() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_PilihJenisGulaDarah'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/JenisGulaDarah/TextView_BangunTidur'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}

	@When("User fill time")
	def I_just_time() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_InputWaktu'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/InputWaktu/Button_Konfirmasi'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}

	@When("User fill sugar blood")
	def I_just_sugarblood() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextField_GulaDarah'), 10)
		Mobile.setText(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextField_GulaDarah'), '2000', 10)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}

	@When("User fill makan malam")
	def I_just_makanmalam() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/ExtraField/BangunTidur_TextField_ApaMakanMalamAnda'), 10)
		Mobile.setText(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/ExtraField/BangunTidur_TextField_ApaMakanMalamAnda'), 'Ini adalah testing automation', 10)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}

	@When("User fill snack malam")
	def I_just_snackmalam() {
		this.I_swipe_to_bottom_transaction()
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/ExtraField/BangunTidur_TextField_ApaSnackMalamAnda'), 10)
		Mobile.setText(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/ExtraField/BangunTidur_TextField_ApaSnackMalamAnda'), 'Ini adalah testing automation', 10)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_Selesai'), 10)
	}

	@And("User chose manual")
	def I_chose_manual() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertBloodRecord/TextView_Manual'), 10)
	}

	@Then("User redirect input page")
	def I_redirect_to() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/TextView_InputGulaDarah'), 10)
	}

	@Then("User verify the data is valid or not")
	def I_verify() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/PopUpVerify/TextView_Verify_GulaDarah'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/PopUpVerify/TextView_Verify_MakanMalam'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/PopUpVerify/TextView_Verify_SnackMalam'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/PopUpVerify/TextView_Verify_Tanggal'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/PopUpVerify/TextView_Verify_Waktu'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/PopUpVerify/Button_YaBenar'), 10)
	}

	@Then("User verify medication page")
	def I_verify_medication() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/Button_Plus'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/TextView_PengingatObat'), 10)
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/Button_Plus'), 10)
	}

	@Given("User is on pengingat obat page")
	def I_pengingat_page() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/PengingatObat/TextView_PengingatObat'), 10)
	}

	@When("User verify the pengingat obat page")
	def I_pengingat_page_verify() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/PengingatObat/TextView_PengingatObat'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/PengingatObat/Button_Back'), 10)
		Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/PengingatObat/Button_Tambahkan'), 10)
	}

	@Then("User can insert reminder medicine")
	def I_insert_medicine() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/PengingatObat/Button_Tambahkan'), 10)
	}

	@Then("System will throw alert handling")
	def I_handling_1() {
		if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Alert'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Handling_1'), 10, FailureHandling.OPTIONAL)
		} else if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Alert'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Handling_JenisPemeriksaan', FailureHandling.OPTIONAL), 10)
		} else if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Alert'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Handling_2', FailureHandling.OPTIONAL), 10)
		} else if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Alert'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Handling_3', FailureHandling.OPTIONAL), 10)
		} else if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Alert'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/TextView_Handling_4', FailureHandling.OPTIONAL), 10)
		} else {
			System.println("TIDAK ADA")
		}
	}

	@Then("System will throw alert handling reminder medicine")
	def I_handling_medicine() {
		if (Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/Alert/TextView_Alert'), 10, FailureHandling.OPTIONAL)) {
			Mobile.verifyElementVisible(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/Alert/TextView_Handling_1'), 10, FailureHandling.OPTIONAL)
		} else {
			System.println("TIDAK ADA")
		}
	}

	@And("User haven't filled any field and save it")
	def I_reminder_havent() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/Button_Selesai'), 10)
	}



	@Then("User can easly fill the field")
	def I_easly() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Button_PilihJenisGulaDarah'), 10)
		Mobile.pressBack()
	}

	@Then("User pick before eat")
	def I_before_eat() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/CheckBox_SebelumMakan'), 10)
	}

	@Then("User pick after eat")
	def I_after_eat() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/CheckBox_SesudahMakan'), 10)
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
	@When("User looking for tab medication reminder")
	def I_swipe_to_bottom_trx() {
		Mobile.swipe(63, 1154, 63, 675)
		Mobile.swipe(63, 1154, 63, 675)
		Mobile.swipe(63, 1154, 63, 675)
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

	@Then("I press back")
	def I_press_back() {
		Mobile.pressBack()
	}

	@Then("I press OK")
	def I_press_OK() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/InsertSugarBlood/Alert_Handling/Button_OK'), 10)
	}

	@Then("I press OK Reminder")
	def I_press_OK_reminder() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/Button_Selesai'), 10)
	}

	@Then("User fill the name of the medicine")
	def I_set_text() {
		Mobile.setText(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/TextField_MasukanNamaObat'), 'Ultraflu Automation', 10)
	}

	@Then("I press Cross")
	def I_press_cross_reminder() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/Button_Cross'), 10)
	}

	@Then("User tambahkan medicine")
	def I_tambahkanr() {
		Mobile.tap(findTestObject('Object Repository/RekamanPage/MedicationReminder/InsertRecord/Button_Tambahkan'), 10)
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
