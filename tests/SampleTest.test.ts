import DemoSiteHelper from "./DemoSite.helper"
import { commentSectionText, demoSiteInputs, operatingSystemRadioChoices, testcafeInterfaceChoices } from "./DemoSite.data"
import Fixtures from "./Fixtures/Fixtures"

const { developerName, populateButtonResult } = demoSiteInputs
const { windowsOsRadio } = operatingSystemRadioChoices
const { both } = testcafeInterfaceChoices
const { commentAreaText } = commentSectionText

Fixtures.DefaultFixture('demo fixture')

test('demo test', async t => {
    await DemoSiteHelper.VerifyElementsDisabledByDefault(t)
    await DemoSiteHelper.ClickPopulateButtonAndVerify(t, populateButtonResult)
    await DemoSiteHelper.TypeDeveloperNameInputAndVerify(t, developerName)
    await DemoSiteHelper.ClickFeatureCheckBoxesAndVerifyLabels(t)
    await DemoSiteHelper.ClickOperatingSystemRadioOption(t, windowsOsRadio)
    await DemoSiteHelper.ClickTestCafeInterfaceDropdownAndSelect(t, both)
    await DemoSiteHelper.ClickTriedTestCafeAndSetRatingSlider(t)
    await DemoSiteHelper.TypeCommentAreaInputAndVerify(t, commentAreaText)
    await DemoSiteHelper.ClickSubmitAndVerifyThankYouHeader(t, developerName)
})