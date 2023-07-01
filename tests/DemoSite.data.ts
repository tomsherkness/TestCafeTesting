import { DemoSiteInputs, FeatureImportanceCheckboxes, OperatingSystemChoices } from "./DemoSite.interface";

export const demoSiteInputs: DemoSiteInputs = {
    developerName: 'Developer Tester',
    populateButtonResult: 'Peter Parker'
}

export const featureImportanceCheckboxes: FeatureImportanceCheckboxes = {
    remoteTestingCheckboxText: 'Support for testing on remote devices',
    reusingJsCodeCheckboxText: 'Re-using existing JavaScript code for testing',
    parallelTestingCheckboxText: 'Running tests in background and/or in parallel in multiple browsers',
    continuousIntegrationCheckboxText: 'Easy embedding into a Continuous integration system',
    markupAnalysisCheckboxText: 'Advanced traffic and markup analysis'
}

export const operatingSystemRadioChoices: OperatingSystemChoices = {
    windowsOsRadio: 'Windows',
    macOsRadio: 'MacOS',
    linuxOsRadio: 'Linux'
}