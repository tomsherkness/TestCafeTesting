import { Selector } from "testcafe"
import { TextInputByTestId } from "../common/typeText/TextInputByTestId"
import { ClickCheckBoxByTestId } from "../common/checkbox/ClickCheckboxByTestId"
import { ClickRadioByTestId } from "../common/radio/ClickRadioByTestId"
import { featureImportanceCheckboxes, operatingSystemRadioChoices } from "./DemoSite.data"

class DemoSiteHelper {
    populateButton: Selector
    submitButton: Selector
    slider: Selector
    disabledSlider: Selector
    developerNameInput: TextInputByTestId
    textArea: TextInputByTestId
    remoteTestingCheckbox: ClickCheckBoxByTestId
    reusingJsCodeCheckbox: ClickCheckBoxByTestId
    parallelTestingCheckBox: ClickCheckBoxByTestId
    continuousIntegrationCheckbox: ClickCheckBoxByTestId
    markupAndAnalysisCheckbox: ClickCheckBoxByTestId
    windowsRadioButton: ClickRadioByTestId
    macOsRadioButton: ClickRadioByTestId
    linuxRadioButton: ClickRadioByTestId

    constructor(){
        this.populateButton = Selector('input').withAttribute('data-testid', 'populate-button')
        this.submitButton = Selector('button').withAttribute('data-testid', 'submit-button')
        this.slider = Selector('div').withAttribute('class', 'slider-values-active')
        this.disabledSlider = Selector('div').withAttribute('class', 'slider-values')

        this.developerNameInput = new TextInputByTestId('input', 'name-input')
        this.textArea = new TextInputByTestId('textarea', 'comments-area')

        this.remoteTestingCheckbox = new ClickCheckBoxByTestId('remote-testing-checkbox')
        this.reusingJsCodeCheckbox = new ClickCheckBoxByTestId('reusing-js-code-checkbox')
        this.parallelTestingCheckBox = new ClickCheckBoxByTestId('parallel-testing-checkbox')
        this.continuousIntegrationCheckbox = new ClickCheckBoxByTestId('ci-checkbox')
        this.markupAndAnalysisCheckbox = new ClickCheckBoxByTestId('analysis-checkbox')

        this.windowsRadioButton = new ClickRadioByTestId('windows-radio')
        this.macOsRadioButton = new ClickRadioByTestId('macos-radio')
        this.linuxRadioButton = new ClickRadioByTestId('linux-radio')
    }

    ClickPopulateButtonAndVerify = async (t: TestController, expectedText: string) => {
        await t.click(this.populateButton)
        await t.expect(this.developerNameInput.value).eql(expectedText)
    }

    ClickFeatureCheckBoxesAndVerifyLabels = async (t: TestController) => {
        const { remoteTestingCheckboxText, 
            reusingJsCodeCheckboxText, 
            parallelTestingCheckboxText, 
            continuousIntegrationCheckboxText,
             markupAnalysisCheckboxText
            } = featureImportanceCheckboxes
        await this.remoteTestingCheckbox.clickCheckBox(t)
        await this.reusingJsCodeCheckbox.clickCheckBox(t)
        await this.parallelTestingCheckBox.clickCheckBox(t)
        await this.continuousIntegrationCheckbox.clickCheckBox(t)
        await this.markupAndAnalysisCheckbox.clickCheckBox(t)
        await t.expect(this.remoteTestingCheckbox.checkboxText).eql(remoteTestingCheckboxText)
        await t.expect(this.reusingJsCodeCheckbox.checkboxText).eql(reusingJsCodeCheckboxText)
        await t.expect(this.parallelTestingCheckBox.checkboxText).eql(parallelTestingCheckboxText)
        await t.expect(this.continuousIntegrationCheckbox.checkboxText).eql(continuousIntegrationCheckboxText)
        await t.expect(this.markupAndAnalysisCheckbox.checkboxText).eql(markupAnalysisCheckboxText)
    }

    ClickOperatingSystemRadioOption = async (t: TestController, operatingSystem: string) => {
        const { windowsOsRadio, macOsRadio, linuxOsRadio } = operatingSystemRadioChoices
        if(operatingSystem === windowsOsRadio){await this.windowsRadioButton.clickRadio(t)}
        if(operatingSystem === macOsRadio){await this.macOsRadioButton.clickRadio(t)}
        if(operatingSystem === linuxOsRadio){await this.linuxRadioButton.clickRadio(t)}
        await t.expect(this.windowsRadioButton.checkRadioText).eql(windowsOsRadio)
        await t.expect(this.macOsRadioButton.checkRadioText).eql(macOsRadio)
        await t.expect(this.linuxRadioButton.checkRadioText).eql(linuxOsRadio)
    }

    TypeDeveloperNameInputAndVerify = async (t: TestController, expectedText: string) => {
        await this.developerNameInput.typeText(t, expectedText)
        await t.expect(this.developerNameInput.value).eql(expectedText)
    }

    VerifyElementsDisabledByDefault = async (t: TestController) => {
        await t.expect(this.submitButton.withAttribute('disabled', 'disabled').exists).ok('the submit button was not in a disabled state by default')
        await t.expect(this.textArea.selector.withAttribute('disabled', 'disabled').exists).ok('the comment box area was not in a disabled state by default')
        await t.expect(this.disabledSlider.exists).ok('the slider was not in a disabled state by default')
    }
}
export default new DemoSiteHelper()