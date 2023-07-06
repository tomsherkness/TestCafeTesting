import { CommentSectionText, DemoSiteInputs, FeatureImportanceCheckboxes, OperatingSystemChoices, TestCafeInterfaceChoices } from './DemoSite.interface'

export const defaultPage = 'https://devexpress.github.io/testcafe/example/'

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

export const testcafeInterfaceChoices: TestCafeInterfaceChoices = {
  commandLine: 'Command Line',
  javascriptApi: 'JavaScript API',
  both: 'Both'
}

export const commentSectionText: CommentSectionText = {
  commentAreaText: 'TestCafe is very easy and lightweight to use. Thank you TestCafe devs!'
}
