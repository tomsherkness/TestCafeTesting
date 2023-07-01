import DemoSiteHelper from "./DemoSite.helper"
import { demoSiteInputs, operatingSystemRadioChoices } from "./DemoSite.data"
import Fixtures from "./Fixtures/Fixtures"

const { developerName, populateButtonResult } = demoSiteInputs
const { windowsOsRadio } = operatingSystemRadioChoices

Fixtures.DefaultFixture('demo fixture')

test('demo test', async t => {
    await DemoSiteHelper.VerifyElementsDisabledByDefault(t)
    await DemoSiteHelper.ClickPopulateButtonAndVerify(t, populateButtonResult)
    await DemoSiteHelper.TypeDeveloperNameInputAndVerify(t, developerName)
    await DemoSiteHelper.ClickFeatureCheckBoxesAndVerifyLabels(t)
    await DemoSiteHelper.ClickOperatingSystemRadioOption(t, windowsOsRadio)
})